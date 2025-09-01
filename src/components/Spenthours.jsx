import React from 'react'
import {cn} from '@/lib/utils'
import MultiSplineChart from './Charts/MultiSplineChart'
import DataLabels from './../../node_modules/apexcharts/src/modules/DataLabels';
import { X } from 'lucide-react';

const Spenthours = ({className ="", ...props}) => {
return (
    <div className={cn("shadow-md", className)} {...props}>
        <h1 className="text-lg font-semibold text-stone-500">Spent Hours</h1>
        <MultiSplineChart 
            options={{
                tooltip: { enabled: false },
                dataLabels: { enabled: false },
                markers: { hover: { size: 0 } },
                yaxis: {
                min: -10,   // forces chart downwards
                max: 10,    // forces chart upwards
                tickAmount: 5,
                labels: { show : false },
                axisBorder: { show: false, color: "#555" },
                annotations : {
                    points : [
                        {
                        x: 7,   // must match one category on x-axis
                        y: 0,     // exact y-value to place dot at
                        marker: {
                            size: 8,
                            fillColor: "#FF4560",
                            strokeColor: "#fff",
                            strokeWidth: 2
                        },
                        label: {
                            text: "Intersection",
                            style: { color: "#fff", background: "#FF4560" }
                        }
                        }
                    ]
                }
                }
            }}
            />
            <div className = "flex flex-row justify-between pt-2">
                <div>
                    <p className="flex justify-center text-sm font-bold text-stone-900 ">20H</p>
                    <p className=" cursor-pointer text-sm text-stone-400">Time Spent</p>
                </div>
                <div>
                    <p className="flex justify-center text-sm font-bold text-stone-900">20H</p>
                    <p className="cursor-pointer text-sm text-stone-400">Time Spent</p>
                </div>
                <div>
                    <p className="flex justify-center text-sm font-bold text-stone-900">20H</p>
                    <p className="cursor-pointer text-sm text-stone-400 hover:text-stone-500">Time Spent</p>
                </div>
            </div>

    </div>
)
}

export default Spenthours
