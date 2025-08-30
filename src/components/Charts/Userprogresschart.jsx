"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Dot, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots and colors"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-2)",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} 
import {cn} from '@/lib/utils'
export default function Userprogresschart({className= ""}) {
  return (

        <ChartContainer config={chartConfig} className={cn("w-full pb-10 " , className)}>
          <LineChart
            accessibilityLayer
            data={chartData}
          
            margin={{
              top: 5,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="visitors"
                  hideLabel
                />
              }
            />
            <Line
              activeDot = {false}
              dataKey="visitors"
              type="line"
              stroke="#B6D148"
              strokeWidth={3}
              dot={({ payload, ...props }) => {
                return (
                  <Dot
                    key={payload.browser}
                    r={5}
                    cx={props.cx}
                    cy={props.cy}
                    fill="white"
                    stroke="#B6D148"
                    strokeWidth={4}
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      
  )
}
