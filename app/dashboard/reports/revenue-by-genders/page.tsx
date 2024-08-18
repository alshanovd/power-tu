"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const option: echarts.EChartsOption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["product", "2015", "2016", "2017"],
      ["Matcha", 43.3, 85.8, 93.7],
      ["Milk ", 83.1, 73.4, 55.1],
      ["Cocoa", 86.4, 65.2, 82.5],
      ["Brownie", 72.4, 53.9, 39.1],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  backgroundColor: "rgba(0, 0, 0, 1)",
};

export default function TotalRevenuePage() {
  return (
    <div>
      {/* <h1 className="text-2xl">BarChartPage</h1> */}

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
