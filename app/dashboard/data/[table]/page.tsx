"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import useSWR from "swr";
import { Spinner } from "@nextui-org/spinner";
import { Chip } from "@nextui-org/chip";
import { useEffect, useState } from "react";

import { apiUrl, fetcher } from "@/app/tools/fetcher";

type Column = {
  key: string;
  header: string;
};

export default function RawDataPage({ params }: { params: { table: string } }) {
  const url = `${apiUrl}/${params.table}`;
  const [columns, setColumns] = useState<Column[]>([]);
  const { data, error, isLoading } = useSWR<any[], Error>(url, fetcher, {
    refreshWhenOffline: false,
  });

  useEffect(() => {
    if (data?.length) {
      const keys = Object.keys(data[0]);

      setColumns(
        keys.map((key) => ({ key, header: key.toUpperCase() }) as Column),
      );
    }
  }, [data]);

  return (
    (data && columns.length && (
      <div>
        <h1 className="text-2xl uppercase">{params.table}</h1>
        <Table className="mt-4">
          <TableHeader>
            {columns?.map((column) => (
              <TableColumn key={column.key}>{column.header}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {data?.map((row) => (
              <TableRow key={row[columns[0].key]}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(row, columnKey)}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )) ||
    (isLoading && (
      <div className="flex justify-center w-full">
        <Spinner size="lg" />
      </div>
    )) ||
    (error && (
      <Chip color="danger" radius="sm" size="lg">
        <div className="font-bold text-xl">Error</div>
      </Chip>
    ))
  );
}
