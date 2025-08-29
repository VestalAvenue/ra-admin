// MultiSplineChart.jsx
import React from "react";
import Chart from "react-apexcharts";

function gaussian(mu, sigma, xs, scale=1) {
  return xs.map(x => {
    const z = (x-mu)/sigma;
    return +(scale * Math.exp(-0.5*z*z)).toFixed(3);
  });
}

export default function MultiSplineChart({ options: overrideOptions = {} }) {
const categories = ["M", "T", "W", "T", "F", "S", "S"]; 
const xIdx = [0, 1, 2, 3, 4, 5, 6];
const base = 0;
const seriesData = [
    gaussian(1.0, 1.55, xIdx, 8).map(v => v - base),
    gaussian(0.8, 1.60, xIdx, 7).map(v => v - base),
    gaussian(1.2, 1.70, xIdx, 6).map(v => v - base),
    gaussian(1.0, 1.85, xIdx, 5).map(v => v - base),
    gaussian(0.9, 1.50, xIdx, 9).map(v => v - base),
    gaussian(1.1, 1.65, xIdx, 4.5).map(v => v - base),
];

  const colors = ["#365CF5","#FF7A00","#FFB800","#4FC9DA","#77C043","#A855F7"];

  const defaultOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      height: 260,
      animations: { easing: "easeinout", speed: 600 }
    },
    stroke: { curve: "smooth", width: 2 },
    colors,
    dataLabels: { enabled: false },
    markers: {
      size: 0,
      strokeWidth: 0,
      hover: { size: 5 }
    },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#777" } }
    },
    yaxis: {
      min: -1,
      max: 9,
      tickAmount: 4,
      labels: { style: { colors: "#999" } }
    },
    grid: {
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
      padding: { left: 0, right: 10 }
    },
    legend: { show: false },
    tooltip: {
      shared: true,
      x: { show: true }
    },
  };

  // merge default options with overrides from props
  const mergedOptions = {
    ...defaultOptions,
    ...overrideOptions,
  };

  const series = seriesData.map((d,i)=>({ name: `Series ${i+1}`, data: d }));

  return <Chart options={mergedOptions} series={series} type="line" height={260} />;
}
