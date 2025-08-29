import { useState } from "react";
import {cn} from "@/lib/utils"
import Timeline from "@/components/misc/Timeline"
import Timelineleft from "@/components/misc/Timelineleft"
import Timelinetest from "./misc/Timelinetest";
import Timelineshad from "./misc/Timelineshad";





export default function LectureSch({className="", ...props}) {
  const days = [
    { label: "MON", date: 20 },
    { label: "TUE", date: 21 },
    { label: "WED", date: 22 },
    { label: "THU", date: 23 },
    { label: "FRI", date: 24 },
  ];

  
  const [selected, setSelected] = useState(null); // starts as nothing selected

  return (
    <div className = {cn(className)} {...props}>
        <h1 className = "text-md font-bold font-golos text-stone-500">
            Today's Lecture Schedule
        </h1>
        <div className={`grid grid-cols-5 gap-1`}>
      {days.map((day, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`flex flex-col items-center justify-center h-16 rounded-2xl cursor-pointer transition text-sm
            ${
              selected === index
                ? "bg-stone-700 text-white "
                : "bg-transparent text-stone-400"
            }`}
        >
          <span className="text-md font-bold">{day.label}</span>
          <span className="text-md font-bold">{day.date}</span>
        </div>
      ))}
      </div>
      <div className="pt-2 ">
      <Timelineshad />
      </div>
      </div>
  
  )
}
