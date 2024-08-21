"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Spinner } from "@nextui-org/spinner";

import { CountriesContext } from "@/app/tools/countries";
import { title } from "@/components/primitives";
import { SubNavbar, SubNavbarItem } from "@/components/sub-navbar";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

const items: SubNavbarItem[] = [
  {
    title: "Revenue by Gender",
    href: "/dashboard/reports/revenue-by-gender",
  },
  { title: "Total Revenue", href: "/dashboard/reports/total-revenue" },
  { title: "Order Status", href: "/dashboard/reports/order-status" },
  { title: "Products Sold", href: "/dashboard/reports/products-sold" },
  {
    title: "Order Status Statistics",
    href: "/dashboard/reports/status-statistics",
  },
];

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [countries, setCountries] = useState<string[]>(["World"]);

  const url = `${apiUrl}/countries`;
  const { data, error, isLoading } = useSWR<string[], Error>(
    url,
    fetcher,
    SWRparams,
  );

  useEffect(() => {
    setCountries(data || []);
  }, [data?.length]);

  return (
    <>
      <h1 className={title()}>Reports</h1>
      <div className="flex w-full mt-3">
        <div className="w-2/12">{SubNavbar(items, true)}</div>
        <CountriesContext.Provider value={countries}>
          {(data && <div className="w-10/12 mt-3">{children}</div>) ||
            (isLoading && (
              <div className="w-full justify-center flex">
                <Spinner size="lg" />
              </div>
            ))}
        </CountriesContext.Provider>
      </div>
    </>
  );
}
