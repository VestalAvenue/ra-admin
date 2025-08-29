import React from 'react'
import { cn } from '../lib/utils'
import { Card , CardHeader , CardFooter , CardTitle } from './ui/card'
import {CalendarCheck , Presentation} from "lucide-react"
import { profile } from '@/data/dummy'

const format = (num) => {
    if (num > 1000) {
        if(num%10 === 0) {
            return (num / 1000) + "K";
        }
        else {
            return (num / 1000) + "K+";
        }
    }
    return num;
}

// Accept className so parent grid span / sizing utilities (e.g., lg:col-span-2) take effect.
const Coursestatus = ({ className = '', ...props }) => {
return (
    
    <div
        className={cn('grid grid-cols-2 gap-4 p-1 auto-rows-fr' ,className)}
    >
        <Card className="shadow-0 border-0 bg-[#AECC34] flex flex-col justify-between">
            <CardHeader>
                <CardTitle className=" flex items-center justify-center rounded-2xl w-10 h-10  bg-white hover:bg-opacity-80">
                    <CalendarCheck className="hover:bg-opacity-80" color="#AECC34" />
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col items-start pb-5 pl-8">
                <p className="text-2xl text-white font-bold">{format(profile.likes)}</p>
                <p className="text-sm pt-1 font-bold text-white">Completed Courses</p>
            </CardFooter>
        </Card>

        <Card className="shadow-0 border-0 bg-[#535AE7] flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-2xl w-10 h-10 bg-white">
                    <Presentation color="#535AE7" />
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col items-start pb-5 pl-8">
                <p className="text-2xl text-white font-bold">38+</p>
                <p className="text-sm pt-1 font-bold text-white">Completed Courses</p>
            </CardFooter>
        </Card> 

        <Card className="shadow-0 border-0 bg-[#4FC9DA] flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-2xl w-10 h-10 bg-white">
                    <CalendarCheck color="#4FC9DA" />
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col items-start pb-5 pl-8">
                <p className="text-2xl text-white font-bold">38+</p>
                <p className="text-sm pt-1 font-bold text-white">Completed Courses</p>
            </CardFooter>
        </Card>

        <Card className="shadow-0 border-0 bg-[#EBC33F] flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="flex items-center justify-center rounded-2xl w-10 h-10 bg-white">
                    <CalendarCheck color="#EBC33F" />
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex flex-col items-start pb-5 pl-8">
                <p className="text-2xl text-white font-bold">38+</p>
                <p className="text-sm pt-1 font-bold text-white">Completed Courses</p>
            </CardFooter>
        </Card>
    </div>
)
}

export default Coursestatus
