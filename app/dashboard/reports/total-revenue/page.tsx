"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams as SWRParams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

interface TotalRevenue {
  month: string;
  revenue: number;
}

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>("");
  const { data, error, isLoading } = useSWR<TotalRevenue[]>(
    `${apiUrl}/annual-revenue`,
    fetcher,
    SWRParams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});
  const [showReport, setShowReport] = useState<boolean>(false);

  useEffect(() => {
    setOption((opt) => ({
      ...opt,
      // dataZoom: [
      //   {
      //     type: "inside",
      //   },
      // ],
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
      <AIAssistance setShowReport={setShowReport} />
      {showReport && (
        <div className="mt-7 py-3 px-5 border border-violet-500">
          <h1 className="text-xl">Revenue Insights Report</h1>

          <h2 className="mt-5 font-bold">
            1. Strong Revenue Growth in Q4 2023
          </h2>
          <ul>
            <li>
              The revenue saw significant growth in the last quarter of 2023,
              with November and December showing strong performance at
              $521,700.07 and $445,822.90, respectively.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Analyze the factors that contributed to
              this growth, such as successful marketing campaigns, seasonal
              demand, or product launches. Consider replicating these strategies
              in future years to maintain or exceed this performance.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">2. Peak Revenue in Early 2024</h2>
          <ul>
            <li>
              Revenue reached its highest in January 2024 ($560,712.20) and
              March 2024 ($577,801.67), indicating strong business performance
              during this period.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Identify what drove these peaks, such as
              post-holiday sales, new product introductions, or other market
              conditions. Capitalize on these trends by planning early-year
              promotions and ensuring inventory and staffing are sufficient to
              meet demand.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">3. Decline in Revenue in Mid-2024</h2>
          <ul>
            <li>
              Revenue declined in the middle of 2024, particularly in June 2024
              ($345,128.30) and August 2024 ($215,738.75), indicating a
              potential seasonal dip or other market challenges.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Investigate the causes of this decline,
              such as market saturation, decreased consumer spending, or
              ineffective marketing strategies. Consider introducing special
              promotions, discounts, or events to stimulate sales during these
              slower months.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            4. Consistent Performance in Second Half of 2023
          </h2>
          <ul>
            <li>
              The revenue figures for September through December 2023 remained
              strong, showing consistent performance with minor fluctuations.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Maintain this consistency by continuing
              to support successful strategies. Monitor market trends closely to
              adapt quickly to any potential changes in consumer behavior or
              economic conditions.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            5. Opportunities for Growth in Low-Revenue Months
          </h2>
          <ul>
            <li>
              Revenue in months like August 2023 ($199,329.85) and August 2024
              ($215,738.75) was significantly lower compared to peak periods.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Focus on growth strategies during these
              low-revenue months. This could include launching targeted
              marketing campaigns, introducing limited-time offers, or exploring
              new customer segments to drive sales.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
