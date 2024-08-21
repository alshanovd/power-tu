"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import AIAssistance from "@/components/ai-assistance";

interface RevenueGender {
  month: string;
  gender: "Male" | "Female";
  revenue: number;
}

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>("");
  const [showReport, setShowReport] = useState<boolean>(false);
  const { data, error, isLoading } = useSWR<RevenueGender[]>(
    `${apiUrl}/annual-revenue-by-gender`,
    fetcher,
    SWRparams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    let dataset: any = convertData(data);

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
        <span className={violetColor}>Total Revenue by Gender</span>
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

      <AIAssistance setShowReport={setShowReport} />

      {showReport && (
        <div className="mt-7 py-3 px-5 border border-violet-500">
          <h1 className="text-xl">Revenue Analysis Report</h1>

          <h2 className="mt-5 font-bold">1. Focus on Female Segment Growth</h2>
          <ul>
            <li>
              Overall, revenue from female customers tends to be higher than
              male customers in most months. This trend is particularly strong
              from September 2023 through January 2024.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Continue to prioritize and expand
              marketing campaigns targeting female customers, especially during
              months where their spending is significantly higher (e.g.,
              November 2023 to January 2024). Consider launching new products or
              promotions that appeal specifically to this segment.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            2. Address the Decline in Female Revenue in Recent Months
          </h2>
          <ul>
            <li>
              There is a noticeable decline in revenue from female customers in
              August 2024, dropping to $139,340.75, which is significantly lower
              compared to previous months.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Investigate potential causes for this
              drop, such as changes in product offerings, seasonality, or
              customer preferences. Re-engage this segment with targeted
              promotions, loyalty programs, or feedback surveys to understand
              their current needs and preferences.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            3. Capitalize on Male Segment During Peak Months
          </h2>
          <ul>
            <li>
              Male revenue shows peaks in March 2024 and January 2024, with
              March being the highest at $353,117.77.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Focus on understanding what drove higher
              male spending during these peak months. Replicate successful
              strategies during these months, such as seasonal promotions or
              product launches, and consider rolling out similar campaigns in
              other months to sustain or boost revenue from male customers.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            4. Boost Male Segment Revenue in Low Months
          </h2>
          <ul>
            <li>
              Male revenue saw significant declines in August 2024, dropping to
              $76,398.00, which is notably lower compared to earlier months.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Develop specific campaigns to boost male
              customer engagement during low-revenue months. Consider offering
              exclusive discounts, bundling products, or running time-limited
              offers that target male customers’ interests.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            5. Balance Gender-Specific Marketing
          </h2>
          <ul>
            <li>
              While there are months where one gender segment significantly
              outperforms the other, overall revenue balance between genders is
              crucial for sustainable growth.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Develop gender-specific marketing
              strategies that address the unique preferences and behaviors of
              both male and female customers. Tailor messaging, product
              recommendations, and promotions to resonate with each segment.
            </li>
          </ul>

          <h2 className="mt-5 font-bold">
            6. Leverage Data for Personalized Marketing
          </h2>
          <ul>
            <li>
              The revenue trends indicate different spending behaviors between
              genders across months.
            </li>
            <li className="mt-2">
              <strong>Action:</strong> Utilize this data to create personalized
              marketing campaigns that reflect the seasonal and gender-specific
              spending patterns. Personalized emails, targeted ads, and custom
              offers can help maintain or increase revenue from both segments.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function convertData(data?: RevenueGender[]) {
  const dataset: any = {};

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

  return dataset;
}
