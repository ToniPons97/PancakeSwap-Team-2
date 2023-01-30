import React, { useState } from "react";
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
  registerables,
  Filler,
  ScriptableContext,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function ChartComponent(props) {
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
        props.handleSetCoinValue(context.dataset.data[context.dataIndex]);
        console.log(context.dataset.pointBackgroundColor);
        console.log(
          event.chart.$datalabels._datasets[0].forEach((item) => {
            console.log(item.$context.dataset);
          })
        );
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

  const yearChart = {
    labels: props.coinValues.dataYear.map((label) => label.time),
    datasets: [
      {
        pointBackgroundColor: `rgb(104, 215, 224, 0)`,
        pointHoverBackgroundColor: props.chartColor
          ? "rgba(255, 99, 132, 1)"
          : "rgb(104, 215, 224, 1)",
        pointBorderColor: "rgb(104, 215, 224, 0)",
        fill: true,
        data: props.coinValues.dataYear.map((data) => data.value),
        borderColor: props.chartColor
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            props.chartColor
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            props.chartColor ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };

  const monthChart = {
    labels: props.coinValues.dataMonth.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: props.coinValues.dataMonth.map((data) => data.value),
        borderColor: props.chartColor
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            props.chartColor
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            props.chartColor ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };
  const weekChart = {
    labels: props.coinValues.dataWeek.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: props.coinValues.dataWeek.map((data) => data.value),
        borderColor: props.chartColor
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            props.chartColor
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            props.chartColor ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
          );
          return gradient;
        },
      },
    ],
  };

  const dayChart = {
    labels: props.coinValues.dataDay.map((label) => label.time),
    datasets: [
      {
        fill: true,
        data: props.coinValues.dataDay.map((data) => data.value),
        borderColor: props.chartColor
          ? "rgba(255, 99, 132, 0.5)"
          : "rgb(104, 215, 224, 0.5)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(
            0,
            props.chartColor
              ? "rgba(255, 99, 132, 0.5)"
              : "rgb(104, 215, 224, 0.5)"
          );
          gradient.addColorStop(
            1,
            props.chartColor ? "rgba(255, 99, 132, 0)" : "rgb(104, 215, 224, 0)"
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
      {props.chartStyle === "line" ? (
        <Line
          id="canvas"
          options={options}
          data={handleCorrectChart(props.buttonInfo)}
        />
      ) : (
        <Bar
          id="canvas"
          options={options}
          data={handleCorrectChart(props.buttonInfo)}
        />
      )}
    </div>
  );
}
