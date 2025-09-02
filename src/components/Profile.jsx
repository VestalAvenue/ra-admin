import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from '../lib/utils'

import Kari from "@/data/Kari.png"

import { ClockFading , BookMarked , CircleCheckBig , UserRoundCheck  } from "lucide-react"
import {profile} from '@/data/dummy'


const rounded = (num) => {
    if(num>1000){
        return (num/1000) + "K";
    }
    else return num
}

const Profile = ({ className = '', ...props }) => {
return (
    <div className={cn(className)} {...props}>
        <Card className=" p-1 m-1 bg-transparent shadow-none border-0 lg:h-100">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <img src={Kari} alt="Profile Picture" className="w-16 h-16 mx-auto my-0 rounded-full" />
                <div className="flex flex-col items-center gap-0">
                    <CardDescription className="m-0">Kari wiza</CardDescription>
                    <CardDescription className="m-0 mt-0">@Kari_wiza@001</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row justify-center gap-2">
                    <Button>Follow</Button>
                    <Button>View Profile</Button>
                </div>
                <div className="text-stone-400 text-lg text-center mt-3">
                    <p>"Crafting a Path of Knowledge, Innovation,....</p>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-2 items-center cursor-default text-center">
                    <div className="border-1 border-dashed items-center  py-5">
                        <ClockFading className="mx-auto size-7" />
                        <span className="inline-block px-2 py-0.5 mt-2 text-xs font-semibold rounded-full bg-[#DFF5F8] text-[#4FC9E0] transition-colors duration-200 hover:bg-[#4FC9E0] hover:text-white">
                            {profile.hours}H
                        </span>
                    </div>
                    <div className="border-1 border-dashed items-center cursor-default py-5">
                        <BookMarked className="mx-auto size-7" />
                        <span className="inline-block px-2 py-0.5 mt-2 text-xs font-semibold rounded-full bg-[#F3F2F1] text-[#AA8676] transition-colors duration-200 hover:bg-[#AA8676] hover:text-white">
                            {profile.bookmarked}
                        </span>
                    </div>
                    <div className="border-1 border-dashed items-center cursor-default py-5">
                        <CircleCheckBig className="mx-auto size-7" />
                        <span className="inline-block px-2 py-0.5 mt-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 hover:bg-blue-700 hover:text-white">
                            {rounded(profile.likes)}
                        </span>
                    </div>
                    <div className="border-1 border-dashed items-center cursor-default py-5">
                        <UserRoundCheck className="mx-auto size-7" />
                        <span className="inline-block px-2 py-0.5 mt-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 hover:bg-blue-700 hover:text-white">
                            {rounded(profile.followers)}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
)
}

export default Profile
