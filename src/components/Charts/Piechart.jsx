import { TrendingUp } from "lucide-react";
import { Pie, PieChart , Cell } from "recharts";
import {useState} from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "Shoes", total: 44, fill: "red" },
  { category: "Grocery", total: 55, fill: "blue" },
  { category: "Other", total: 41, fill: "yellow" },
];

const chartConfig = {
  Total: {
    label: "Total",
  },
  Shoes: {
    label: "Shoes",
    color: "var(--chart-1)",
  },
  Grocery: {
    label: "Grocery",
    color: "var(--chart-2)",
  },
  Other: {
    label: "Other",
    color: "var(--chart-3)",
  },
};

export function Piechart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Card className="flex flex-row border-0 shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto flex-1 justify-center aspect-square max-h-[200px] min-w-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"    
              nameKey="category" 
              innerRadius={50}
            >
             {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} className={`
                    transition 
                    hover:brightness-150
                    hover:drop-shadow-[0_0_50px_theme(colors.${entry.color})]
                    cursor-pointer
                  `} />
              ))}
              </Pie>
          </PieChart>
        </ChartContainer>
        
      </CardContent>
    </Card>
  );
}
