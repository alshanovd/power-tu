"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

interface StatusesByMonth {
  month: string;
  status: string;
  count: number;
}

export default function StatusStatistics() {
  const [country, setCountry] = useState<string>("");
  const [months, setMonths] = useState<string[]>([]);
  const [showReport, setShowReport] = useState<boolean>(false);
  const { data, error, isLoading } = useSWR<StatusesByMonth[]>(
    `${apiUrl}/statuses-by-month`,
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
        <AIAssistance setShowReport={setShowReport} />
      </div>
      {showReport && (
        <div className="mt-7 py-3 px-5 border border-violet-500">
          <h1 className="text-xl">Sales Analysis Report</h1>

          <h2 className="mt-5 font-bold">1. High Cancellation Rates</h2>
          <ul>
            <li>
              Months such as May 2024 and June 2024 have particularly high
              cancellation rates (13 cancellations each).
            </li>
            <li>
              Understanding the root cause of these cancellations—whether they
              are due to pricing issues, product quality, customer service, or
              other factors—should be a priority.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Implement a cancellation analysis process
              to identify trends and underlying causes. Use this data to refine
              policies, improve product offerings, or enhance customer service.
              Consider offering discounts or incentives to reduce cancellations.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">2. Conversion of Pending Orders</h2>
          <ul>
            <li>
              There is a notable number of pending orders each month. For
              example, in November 2023, there were 16 pending orders, which
              suggests potential lost revenue if these are not converted to
              completed sales.
            </li>
            <li>
              <strong className="mt-2">Action:</strong> Establish a follow-up
              process for pending orders to encourage completion. This could
              include reminder emails, limited-time offers, or personalized
              customer support.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">3. Fluctuating Completion Rates</h2>
          <ul>
            <li>
              The number of completed orders fluctuates month-to-month, with
              peaks in January 2024 (18 completed) and dips in months like June
              2024 (7 completed).
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Identify the factors contributing to high
              completion rates in certain months and replicate these strategies.
              For instance, if January saw a surge due to a specific marketing
              campaign or product launch, consider implementing similar
              initiatives during other months.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">4. Shipping Efficiency</h2>
          <ul>
            <li>
              There are periods where the number of shipped orders is relatively
              low compared to the number of completed orders, such as in
              December 2023 (11 completed, 6 shipped).
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Improve logistical processes to ensure
              that all completed orders are shipped promptly. Delays in shipping
              can lead to cancellations or customer dissatisfaction, which can
              negatively impact future sales.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">5. Focus on Customer Retention</h2>
          <ul>
            <li>
              The repeated pattern of cancellations suggests that customer
              retention strategies might need enhancement.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Implement loyalty programs, personalized
              marketing, and excellent post-purchase support to retain customers
              and reduce cancellations. Satisfied customers are more likely to
              make repeat purchases, driving overall sales growth.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            6. Leverage Months with Lower Cancellations
          </h2>
          <ul>
            <li>
              Months with lower cancellations, like August 2024 (4
              cancellations), indicate more stable sales periods.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Analyze what worked well during these
              months and apply those strategies to months with higher
              cancellation rates.
            </li>
          </ul>
        </div>
      )}
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
