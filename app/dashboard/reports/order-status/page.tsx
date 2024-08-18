"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

const option: echarts.EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 7,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
  backgroundColor: "rgba(0, 0, 0, 1)",
};

export default function OrderStatusPage() {
  return (
    <div className="min-h-60">
      {/* <h1 className="text-2xl">OrderStatusPage</h1> */}
      <ReactECharts
        className="mt-5"
        lazyUpdate={true}
        notMerge={true}
        option={option}
        style={{ height: "500px" }}
        theme="dark"
      />
    </div>
  );
}
