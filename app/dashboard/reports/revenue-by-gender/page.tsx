"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useState } from "react";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";

const option: echarts.EChartsOption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["product", "Male", "Female"],
      ["Jan", 43.3, 85.8],
      ["Feb", 83.1, 73.4],
      ["Mar", 86.4, 65.2],
      ["Apr", 72.4, 53.9],
      ["May", 72.4, 53.9],
      ["Jun", 86.4, 65.2],
      ["Jul", 83.1, 73.4],
      ["Aug", 43.3, 85.8],
      ["Sep", 43.3, 85.8],
      ["Oct", 43.3, 85.8],
      ["Nov", 43.3, 85.8],
      ["Dec", 43.3, 85.8],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: "bar" }, { type: "bar" }],
  backgroundColor: "rgba(0, 0, 0, 1)",
};

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>("");

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
