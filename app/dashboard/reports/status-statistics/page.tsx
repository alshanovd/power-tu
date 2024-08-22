"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries, defaultCountry } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

interface StatusesByMonth {
  month: string;
  status: string;
  count: number;
}

export default function StatusStatistics() {
  const [country, setCountry] = useState<string>(defaultCountry);
  const [months, setMonths] = useState<string[]>([]);
  const { data, error, isLoading } = useSWR<StatusesByMonth[]>(
    `${apiUrl}/statuses-by-month/${country}/`,
    fetcher,
    SWRparams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    if (!data) {
      setOption({});

      return;
    }
    let dataset: object = data ? convertData(data) : {};
    let statuses = Array.from(new Set(data?.map((item) => item.status)));
    let months = Array.from(new Set(data?.map((item) => item.month)));

    setOption({
      title: {
        text: "Order Status Statistics",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: statuses,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: months,
      },
      yAxis: {
        type: "value",
      },
      series: Object.values(dataset),
      backgroundColor: "rgba(0, 0, 0, 1)",
    });
  }, [data?.length]);

  return (
    <div>
      <h2 className="text-2xl">
        The bar chart represents{" "}
        <span className={violetColor}>Monthly Order Status Count</span> over the
        year
      </h2>
      <p className="mt-3">
        This visualization allows for a clear comparison of revenue
        contributions from different genders, helping to identify patterns and
        disparities across regions or on a worldwide scale.
      </p>
      {<Countries setCountry={setCountry} />}
      <div>
        <ReactECharts
          className="mt-7"
          lazyUpdate={true}
          notMerge={true}
          option={option}
          theme="dark"
        />
      </div>
      <div className="mt-7">
        <AIAssistance
          country={country}
          prompt="Explain Cancelled status trend"
        />
      </div>
    </div>
  );
}

function convertData(data?: StatusesByMonth[]): object {
  const dataset: any = {};

  if (data) {
    for (const dataItem of data) {
      if (!dataset[dataItem.status]) {
        dataset[dataItem.status] = {
          name: dataItem.status,
          type: "line",
          stack: "Total",
          data: [],
        };
      }
      dataset[dataItem.status].data.push(dataItem.count);
    }
  }

  return dataset;
}
