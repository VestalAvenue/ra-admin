import React from 'react'
import {cn} from "@/lib/utils"
import { Totalcoursechart } from './Charts/Totalcoursechart'
import { User } from 'lucide-react';
import Userprogresschart from './Charts/Userprogresschart';
const Userprogress = ( {className="", ...props}) => {
  return (
    <div className = {cn("rounded-2xl bg-white p-4 shadow-sm flex flex-col h-72 dark:bg-stone-900", className)} {...props}>
        <h1 className ="text-lg font-bold text-stone-500 dark:text-white">User Progress</h1>
        <p className ="text-[12px] font-semibold text-stone-500 hover:text-stone-400 dark:text-white">Latest Update</p>
        <div className = "flex flex-row flex-1 pt-3">
            <p className ="text-xl font-bold text-stone-600 dark:text-white">89%</p>
            <Userprogresschart className =""/>
        </div>
    </div>
  )
}

export default Userprogress
