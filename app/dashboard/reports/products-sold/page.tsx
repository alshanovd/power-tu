"use client";
import { Spinner } from "@nextui-org/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useState } from "react";
import useSWR from "swr";

import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";

interface TotalItemsSold {
  id: number;
  product_name: string;
  total_sold: number;
}

export default function ProductsSoldPage() {
  const [country, setCountry] = useState<string>("");
  const { data, error, isLoading } = useSWR<TotalItemsSold[]>(
    `${apiUrl}/total-items-sold`,
    fetcher,
    SWRparams,
  );

  return (
    <div>
      <h2 className="text-2xl">
        The table shows the <span className={violetColor}>total count</span> of
        items sold
      </h2>
      <p className="mt-3">
        This table presents the total count of each item sold over the course of
        a year. It provides a detailed breakdown of sales figures for individual
        products, offering insights into the popularity and demand for each
        item. This data can be used to analyze sales performance, identify
        top-selling products, and inform inventory and purchasing decisions.
      </p>

      {<Countries setCountry={setCountry} />}

      {(isLoading && (
        <div className="w-full justify-center flex items-center">
          <Spinner size="lg" />
        </div>
      )) ||
        (data && (
          <Table className="mt-5">
            <TableHeader>
              <TableColumn>Product Name</TableColumn>
              <TableColumn>Total Count Sold</TableColumn>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product_name}</TableCell>
                  <TableCell>{item.total_sold}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
    </div>
  );
}
