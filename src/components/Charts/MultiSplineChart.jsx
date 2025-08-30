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
    const maxY = 9; // symmetric y-axis

    // Top series (positive, above center)
    const topSeries = [
        gaussian(1.0, 1.55, xIdx, 8),
        gaussian(0.8, 1.60, xIdx, 7),
        gaussian(1.2, 1.70, xIdx, 6),
    ];
    // Bottom series (positive, but plotted below center)
    const bottomSeries = [
        gaussian(1.0, 1.85, xIdx, 5).map(v => -v),
        gaussian(0.9, 1.50, xIdx, 9).map(v => -v),
        gaussian(1.1, 1.65, xIdx, 4.5).map(v => -v),
    ];

    const seriesData = [...topSeries, ...bottomSeries];

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
            min: -maxY,
            max: maxY,
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

    const mergedOptions = {
        ...defaultOptions,
        ...overrideOptions,
    };

    const series = seriesData.map((d,i)=>({ name: `Series ${i+1}`, data: d }));

    return <Chart options={mergedOptions} series={series} type="line" height={260} />;
}
