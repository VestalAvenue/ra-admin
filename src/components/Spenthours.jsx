import React from 'react'
import {cn} from '@/lib/utils'
import MultiSplineChart from './Charts/MultiSplineChart'
import DataLabels from './../../node_modules/apexcharts/src/modules/DataLabels';

const Spenthours = ({className ="", ...props}) => {
return (
    <div className={cn("shadow-md", className)} {...props}>
        <h1 className="text-lg font-semibold text-stone-500">Spent Hours</h1>
        <MultiSplineChart 
           options={{
                tooltip: { enabled: true , onDatasetHover : {highlightDataSeries: true} },
                dataLabels: { enabled: false },
                markers: { hover: { size: 0 } }
            }}
        />
    </div>
)
}

export default Spenthours
