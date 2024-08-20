"use client";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import useSWR from "swr";

import { violetColor } from "@/components/primitives";
import { apiUrl, fetcher, SWRparams } from "@/app/tools/fetcher";
import { Countries } from "@/components/select-country";

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
  const [country, setCountry] = useState<string>("");
  const { data, error, isLoading } = useSWR<any[]>(
    `${apiUrl}/annual-revenue-by-gender`,
    fetcher,
    SWRparams,
  );
  const [option, setOption] = useState<echarts.EChartsOption>({});

  useEffect(() => {
    let dataset: any = {};

    setOption({
      title: {
        text: "Order Status Statistics",
      },
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
    });
  }, [data?.length]);

  return (
    <div>
      <h1 className="text-2xl">
        The pie chart represents{" "}
        <span className={violetColor}>order status</span> distribution
      </h1>
      <p className="mt-3">
        This pie chart displays the overall statistics for order statuses,
        specifically showing the proportions of orders that are “Completed,”
        “Shipped,” and “Pending.” Each segment represents the percentage of
        orders in each status, providing a quick and clear overview of how
        orders are distributed across these three categories.
      </p>

      {<Countries setCountry={setCountry} />}

      <div className="min-h-60">
        <ReactECharts
          className="mt-5"
          lazyUpdate={true}
          notMerge={true}
          option={option}
          style={{ height: "500px" }}
          theme="dark"
        />
      </div>
    </div>
  );
}
