import React from 'react'
import {cn} from '@/lib/utils'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {TrendingUp} from "lucide-react"
import {Piechart} from './Charts/Piechart'
const Courseprogress = ({className= " " , ...props}) => {
return (
    <div className={cn("p-2 rounded shadow h-full", className)} {...props}>
        <h1 className="text-base font-bold text-stone-400 mb-2">
            Course Progress
        </h1>
        <div className="flex flex-row gap-2 justify-between">
            {/* Card 1 */}
            <div className="border border-dashed rounded-lg px-3 py-2 flex items-center gap-2 bg-white">
                <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span>
                <div>
                    <div className="text-md font-semibold font-family-sans text-gray-800">$68,200</div>
                    <div className="text-stone-400 text-xs">Income</div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="border border-dashed rounded-lg px-3 py-2 flex items-center gap-2 bg-white">
                <span className="w-3 h-3 rounded-full bg-stone-400 inline-block"></span>
                <div>
                    <div className="text-base font-semibold text-gray-800">$45,587</div>
                    <div className="text-stone-400 text-xs">Income</div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="border border-dashed rounded-lg px-3 py-2 flex items-center gap-2 bg-white">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <div>
                    <div className="text-base font-semibold text-gray-800">$49k</div>
                    <div className="text-stone-400 text-xs">Income</div>
                </div>
            </div>
        </div>
        <div>
            <Piechart />
        </div>
        <div className="flex flex-row text-sm font-semibold">
            <span className="text-[#BBCE34] pr-2"> 86.90%  </span>
            <TrendingUp className="pr-2 text-[#BBCE34]" />
            <span>More than last month</span>
        </div>
    </div>
)
}

export default Courseprogress
