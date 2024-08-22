"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries, defaultCountry } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams as SWRParams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

interface TotalRevenue {
  month: string;
  revenue: number;
}

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>(defaultCountry);
  const { data, error, isLoading } = useSWR<TotalRevenue[]>(
    `${apiUrl}/annual-revenue/${country}/`,
    fetcher,
    SWRParams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    setOption((opt) => ({
      ...opt,
      title: {
        text: "Total Revenue by Months",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Revenue, $"],
      },
      xAxis: {
        ...opt.xAxis,
        data: data?.map((item) => item.month),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Revenue, $",
          data: data?.map((item) => item.revenue),
          type: "line",
        },
      ],
      backgroundColor: "rgba(0, 0, 0, 1)",
    }));
  }, [data?.length]);

  return (
    <div>
      {" "}
      <h2 className="text-2xl">
        The graph represents{" "}
        <span className={violetColor}>Total Revenue by Months</span>
      </h2>
      <p className="mt-3">
        This graph displays the total revenue for each month, offering a visual
        overview of how revenue changes over time. It allows for easy comparison
        between months, making it simple to identify trends, seasonal patterns,
        and overall performance.
      </p>
      {<Countries setCountry={setCountry} />}
      <ReactECharts
        className="mt-5"
        lazyUpdate={true}
        notMerge={true}
        option={option}
        theme="dark"
      />
      <AIAssistance
        country={country}
        prompt="What is total revenue for a year?"
        report="total-revenue"
      />
    </div>
  );
}
