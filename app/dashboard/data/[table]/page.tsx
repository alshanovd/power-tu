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

import { fetcher } from "@/app/tools/fetcher";

type Product = {
  product_id: number;
  name: string;
  price: number;
};

export default function RawDataPage({ params }: { params: { table: string } }) {
  const columns = [
    { key: "product_id", header: "Product ID" },
    { key: "name", header: "Name" },
    { key: "price", header: "Price" },
  ];
  const url = `https://ec2-3-27-170-95.ap-southeast-2.compute.amazonaws.com:8000/${params.table}`;
  const { data, error, isLoading } = useSWR<any, Error>(url, fetcher, {
    refreshWhenOffline: false,
    refreshInterval: 10000,
  });

  return (
    (data && (
      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.header}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data?.map((row: Product) => (
            <TableRow key={row.product_id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(row, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )) ||
    (isLoading && <Spinner size="lg" />) ||
    (error && (
      <Chip color="danger" radius="sm" size="lg">
        <div className="font-bold text-xl">Error</div>
      </Chip>
    ))
  );
}
