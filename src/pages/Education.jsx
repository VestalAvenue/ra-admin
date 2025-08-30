import React from 'react'
import Profile from '@/components/Profile.jsx'
import { Coursestatus, LectureSch, Todolist } from '../components'
import { Courseprogress } from '../components'
import { Recentactivity} from '@/components'
import {Lectures} from '@/components'
import {Spenthours} from '@/components'
import {Totalcourses} from '@/components'
import {Userprogress } from '@/components'
const Education = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-4 gap-4 ">
    <Profile className="bg-primary-foreground p-4 rounded shadow h-100 sm:min-h-0 lg:col-span-2 sm:col-span-1" />
    <Coursestatus className="bg-primary-foreground p-4 rounded shadow h-100 sm:min-h-0 lg:col-span-2" />
    <Courseprogress className="bg-white p-4 rounded shadow h-100 sm:min-h-0 lg:col-span-2" />
    <Recentactivity className="bg-primary-foreground p-4 rounded shadow h-full sm:min-h-0 lg:col-span-2 xl:col-span-2 " />
    <LectureSch className="bg-primary-foreground p-4 rounded shadow h-full lg:h-100 md:h-120  sm:min-h-0 md:col-span-1 lg:col-span-2 " />
    <Lectures className="bg-primary-foreground p-4 rounded shadow h-full sm:min-h-0 sm:col-span-1 md:col-span-1 lg:col-span-2" />
    <Spenthours className="bg-primary-foreground p-4 rounded shadow h-full sm:min-h-0 sm:col-span-1 md:col-span-1 lg:col-span-2 lg:h-100 md:h-90 sm:h-90">card 4</Spenthours>
    <Todolist className="bg-primary-foreground p-4 rounded shadow h-full sm:min-h-0 sm:col-span-1 md:col-span-1 lg:col-span-2 lg:h-100 md:h-90 sm:h-90" />
    <div className="grid grid-rows-2  gap-2 lg:col-span-2 lg:h-100 md:h-90 sm:h-90">
      <Totalcourses className="shadow-md h-48" /> 
      <Userprogress className="shadow-md h-47" />
    </div>
    </div>
    
  )
}

export default Education  
