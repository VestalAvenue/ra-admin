import React from 'react'
import {cn} from '@/lib/utils'
import { List } from 'lucide-react'
import Emily from '@/data/emily.png'
import Micheal from '@/data/micheal.png'
import Samantha from '@/data/samantha.png'
import Jennifer from '@/data/jennifer.png'
import David from '@/data/david.png'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const recent = [
    {
        id: 1,
        name: "Emily Klein",
        time: "2 Week",
        activity: 'Paused "Fillo Desi..."',
        avatar: Emily,
    },
    {
        id: 2,
        name: "Micheal Klein",
        time: "1 Min",
        activity: '"Completed..."',
        avatar: Micheal,
    },
    {
        id: 3,
        name: "Sam Franco",
        time: "4 hours",
        activity: "Joined 'Literature...'",
        avatar: Samantha,
    },
    {
        id: 4,
        name: "David Waters",
        time: "1 week",
        activity: 'Achieved 90% scor...',
        avatar: David,
    },
    {
        id: 5,
        name: "Jennifer Mandela",
        time: "1 Min",
        activity: "Submitted research...",
        avatar: Jennifer,
    },
]
const Recentactivity = ({className = "", ...props}) => {
  return (
    
    <div className= {cn(className)} {...props}>
      <h1 className ="text-bold text-stone-500 font-bold">Recent Activity</h1>
      <div className = "flex flex-col gap-2">
        {recent.map(item=>
            <div key={item.id} className="flex items-center gap-3 py-3 border-b border-dashed border-stone-300 last:border-b-0">
              <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-xl object-cover"/>
              <div className="flex flex-col text-sm leading-tight">
                <span className="font-semibold text-stone-700">{item.name}</span>
                <span className="text-stone-400">{item.activity}</span>
              </div>
              <span className="ml-auto text-xs text-stone-400 whitespace-nowrap">{item.time}</span>
            </div>
        )}
      </div>
      
    </div>
  )
}

export default Recentactivity
