import React from "react"
import { cn } from "@/lib/utils"

import { FileText , Folder} from "lucide-react"
const Datafiles = ({ className = "", ...props }) => {
  return (
    <div className={cn("", className)} {...props}>
      <h1 className="text-xl font-bold text-stone-500 pl-5 pt-5">Data Folder and Files</h1>
      <div className="flex flex-row border-1 border-dashed rounded-2xl m-3 p-0 justify-between">
        <div className="flex items-center pl-2">
          <FileText className="w-8 h-8 text-stone-400" />
        </div>
        <div className="flex-1 p-5 border-stone-200">
          <h2 className="text-lg font-bold text-stone-500">React Data</h2>
          <p className="text-sm font-semibold text-stone-500">18 files</p>
        </div>
        <div className="flex align-end items-center pr-2">
          <p className="text-lg font-bold text-stone-500">32GB</p>
        </div>
        
      </div>
      <div className="flex flex-row border-1 border-dashed rounded-2xl m-3 p-0 justify-between">
        <div className="flex items-center pl-2">
          <Folder className="w-8 h-8 text-stone-400 fill-yellow-400 text-yellow-500" />
        </div>
        <div className="flex-1 p-5 border-stone-200">
          <h2 className="text-lg font-bold text-stone-500">React Data</h2>
          <p className="text-sm font-semibold text-stone-500">18 files</p>
        </div>
        <div className="flex align-end items-center pr-2">
          <p className="text-lg font-bold text-stone-500">32GB</p>
        </div>
        
      </div>
      <div className = "flex  justify-center pt-4">
        <button className="bg-blue-400 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-700 transition ">
          View more
        </button>
      </div>
    </div>
  )
}

export default Datafiles
