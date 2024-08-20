"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";

interface RevenueGender {
  month: string;
  gender: "Male" | "Female";
  revenue: number;
}

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>("");
  const { data, error, isLoading } = useSWR<RevenueGender[]>(
    `${apiUrl}/annual-revenue-by-gender`,
    fetcher,
    SWRparams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    let dataset: any = {};

    if (data) {
      for (const dataItem of data) {
        if (dataItem.gender === "Male") {
          dataset[dataItem.month] = [
            dataItem.month,
            dataItem.revenue,
            dataset[dataItem.month]
              ? dataset[dataItem.month][2]
                ? dataset[dataItem.month][2]
                : 0
              : 0,
          ];
        }
        if (dataItem.gender === "Female") {
          dataset[dataItem.month] = [
            dataItem.month,
            dataset[dataItem.month]
              ? dataset[dataItem.month][1]
                ? dataset[dataItem.month][1]
                : 0
              : 0,
            dataItem.revenue,
          ];
        }
      }
    }

    setOption({
      title: {
        text: "Total Revenue",
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["product", "Male", "Female"],
          ...Object.values<[string, number, number]>(dataset),
        ],
      },
      xAxis: { type: "category" },
      yAxis: { tooltip: { show: true } },
      series: [{ type: "bar" }, { type: "bar" }],
      backgroundColor: "rgba(0, 0, 0, 1)",
    });
  }, [data?.length]);

  return (
    <div>
      <h2 className="text-2xl">
        The bar chart represents{" "}
        <span className={violetColor}>total revenue by gender</span>
      </h2>
      <p className="mt-3">
        This visualization allows for a clear comparison of revenue
        contributions from different genders, helping to identify patterns and
        disparities across regions or on a worldwide scale.
      </p>

      {<Countries setCountry={setCountry} />}

      <ReactECharts
        className="mt-5"
        lazyUpdate={true}
        notMerge={true}
        option={option}
        theme="dark"
      />
    </div>
  );
}
