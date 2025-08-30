import React from 'react'
import {cn} from "@/lib/utils"
import { Totalcoursechart } from './Charts/Totalcoursechart'

const Userprogress = ( {className="", ...props}) => {
  return (
    <div className = {cn("rounded-2xl bg-white p-4 shadow-sm flex flex-col h-72", className)} {...props}>
        <h1 className ="text-lg font-bold text-stone-500">User Progress</h1>
        <p className ="text-[12px] font-semibold text-stone-500 hover:text-stone-400">Latest Update</p>
        <div className = "flex flex-row flex-1 pt-3">
            <p className ="text-xl font-bold text-stone-600">89%</p>
            <Totalcoursechart className =""/>
        </div>
    </div>
  )
}

export default Userprogress
