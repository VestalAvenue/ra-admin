"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer ,Cell ,YAxis} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
	{ month: "", desktop: 186 },
	{ month: "", desktop: 305 },
	{ month: "", desktop: 237 },
	{ month: "", desktop: 73 },
	{ month: "", desktop: 209 },
	{ month: "", desktop: 214 },
]

const chartConfig = {
	desktop: { label: "Total Courses:", color: "var(--chart-1)" },
}
import {cn} from '@/lib/utils'

export function Totalcoursechart({ className = "", ...props }) {
	return (
		<div className={cn("pl-10 " ,{className})} {...props}>
			<ChartContainer config={chartConfig} className="w-full h-[120px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData} accessibilityLayer>
						<CartesianGrid vertical={false} horizontal = {false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={8}
							axisLine={false}
							tickFormatter={(v) => v.slice(0, 3)
                            }                            
						/>
                         <YAxis hide domain={[0, "dataMax + 50"]} /> 
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={[3,3,0,0]} barSize = {12}  >
                            {chartData.map((entry, index) => (
                            <Cell
                            key={`cell-${index}`}
                            fill={
                                [
                                "var(--chart-1)",
                                "var(--chart-2)",
                                "var(--chart-3)",
                                "var(--chart-4)",
                                "var(--chart-5)",
                                "var(--chart-6)",
                                ][index % 6] // cycle through colors
                            }
                            />
                        ))}
                            </Bar>
					</BarChart>
				</ResponsiveContainer>
			</ChartContainer>
		</div>
	)
}
