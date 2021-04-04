import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";

const rand = () => Math.floor(Math.random() * 255);

const Chart: React.FC<IChartProps> = ({ data }) => {
  const genData = () => ({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        borderColor: "white",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return <Bar data={genData} options={options} type={""} />;
};

export default Chart;
