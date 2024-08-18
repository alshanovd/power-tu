"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useState } from "react";

import { violetColor } from "@/components/primitives";
import { Countries } from "@/components/select-country";

export default function TotalRevenuePage() {
  const [country, setCountry] = useState<string>("");

  const option: echarts.EChartsOption = {
    legend: {},
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
    backgroundColor: "rgba(0, 0, 0, 1)",
  };

  return (
    <div>
      {" "}
      <h2 className="text-2xl">
        The graph represents{" "}
        <span className={violetColor}>total revenue by months</span>
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
    </div>
  );
}
