"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

export default function TotalRevenuePage() {
  const option: echarts.EChartsOption = {
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
      {/* <h1 className="text-2xl">GraphPage</h1> */}
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
