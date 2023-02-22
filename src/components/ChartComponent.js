import React, { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function ChartComponent({
  changeExchange,
  chartStyle,
  buttonInfo,
  handleSetCoinValue,
  chart,
  getExchange,
}) {
  const [pointVisible, setPointVisible] = useState(0);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
    Filler
  );

  ChartJS.defaults.set("plugins.datalabels", {
    labels: {
      title: {
        value: "rgba(53, 162, 235, 0)",
        color: "rgba(53, 162, 235, 0)",
        font: {
          size: "100px",
        },
      },
    },
    listeners: {
      enter: function (context, event) {
        handleSetCoinValue(context.dataset.data[context.dataIndex]);
      },
    },
  });

  const options = {
    hover: {
      intersect: false,
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          color: "rgb(255,255,255)",
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "rgb(255,255,255)",
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Cake/BNB",
      },
    },
  };

  const dataYear = [
    { time: chart[360], value: getExchange(360) },
    { time: chart[330], value: getExchange(330) },
    { time: chart[300], value: getExchange(300) },
    { time: chart[270], value: getExchange(270) },
    { time: chart[240], value: getExchange(240) },
    { time: chart[210], value: getExchange(210) },
    { time: chart[180], value: getExchange(180) },
    { time: chart[150], value: getExchange(150) },
    { time: chart[120], value: getExchange(120) },
    { time: chart[90], value: getExchange(90) },
    { time: chart[60], value: getExchange(60) },
    { time: chart[30], value: getExchange(30) },
    { time: chart[0], value: getExchange(0) },
  ];

  const dataWeek = [
    { time: chart[7], value: getExchange(7) },
    { time: chart[6], value: getExchange(6) },
    { time: chart[5], value: getExchange(5) },
    { time: chart[4], value: getExchange(4) },
    { time: chart[3], value: getExchange(3) },
    { time: chart[2], value: getExchange(2) },
    { time: chart[1], value: getExchange(1) },
    { time: chart[0], value: getExchange(0) },
  ];

  const dataMonth = [
    { time: chart[30], value: getExchange(30) },
    { time: chart[27], value: getExchange(27) },
    { time: chart[24], value: getExchange(24) },
    { time: chart[20], value: getExchange(20) },
    { time: chart[16], value: getExchange(16) },
    { time: chart[12], value: getExchange(12) },
    { time: chart[9], value: getExchange(9) },
    { time: chart[6], value: getExchange(6) },
    { time: chart[3], value: getExchange(3) },
    { time: chart[0], value: getExchange(0) },
  ];
  const dataDay = [
    { time: "12:30 AM", value: "55" },
    { time: "04:30 AM", value: "62" },
    { time: "08:30 AM", value: "53" },
    { time: "12:30 PM", value: "51" },
    { time: "02:30 PM", value: "52" },
    { time: "04:30 PM", value: "55" },
    { time: "06:30 PM", value: "60" },
    { time: "08:30 PM", value: "66" },
    { time: "10:30 PM", value: "64" },
    { time: "12:30 PM", value: "60" },
  ];
  const yearChart = {
    labels: dataYear.map((label) => label.time),
    datasets: [
      {
        pointBackgroundColor: `rgb(104, 215, 224, 0)`,
        pointHoverBackgroundColor: changeExchange
          ? "rgba(255, 99, 132, 1)"
          : "rgb(104, 215, 224, 1)",
        pointBorderColor: "rgb(104, 215, 224, 0)",
        fill: true,
        data: dataYear.map((data) => data.value),
        borderColor: changeExchange
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            changeExchange
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            changeExchange ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };

  const monthChart = {
    labels: dataMonth.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: dataMonth.map((data) => data.value),
        borderColor: changeExchange
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            changeExchange
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            changeExchange ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };
  const weekChart = {
    labels: dataWeek.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: dataWeek.map((data) => data.value),
        borderColor: changeExchange
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            changeExchange
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            changeExchange ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };

  const dayChart = {
    labels: dataDay.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: dataDay.map((data) => data.value),
        borderColor: changeExchange
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            changeExchange
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            changeExchange ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };

  const handleCorrectChart = (buttonInfo) => {
    if (buttonInfo === "1w") {
      return weekChart;
    } else if (buttonInfo === "1m") {
      return monthChart;
    } else if (buttonInfo === "24h") {
      return dayChart;
    } else {
      return yearChart;
    }
  };

  return (
    <div>
      {chartStyle === "line" ? (
        <Line
          id="canvas"
          options={options}
          data={handleCorrectChart(buttonInfo)}
        />
      ) : (
        <Bar
          id="canvas"
          options={options}
          data={handleCorrectChart(buttonInfo)}
        />
      )}
    </div>
  );
}
