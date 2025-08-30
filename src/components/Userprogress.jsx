import React from 'react'
import {cn} from "@/lib/utils"
const Userprogress = ( {className="", ...props}) => {
  return (
    <div className = {cn("rounded-2xl bg-white p-4 shadow-sm flex flex-col h-72", className)} {...props}>
      <h1>User Progress</h1>
    </div>
  )
}

export default Userprogress
