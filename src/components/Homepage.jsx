import React from 'react'
import ProjectStatus from './ProjectStatus.jsx'
import Messages from './Messages.jsx'
import Expenditure from './Expenditure.jsx'
import MeetingSchedule from './MeetingSchedule.jsx'
import Activityhours from './Activityhours.jsx'
import { Conversation } from './index.js'
import { Datatable} from './index.js'
import { Datafiles} from './index.js'

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 ">
        <ProjectStatus className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0 md:col-span-2 sm:col-span-2 lg:col-span-2" />
        <Messages className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0  " />
        <Expenditure className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0 " />
        <MeetingSchedule className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0 " />
        <Activityhours className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0 h-100" />
        <Conversation className="bg-primary-foreground p-4 rounded shadow  md:col-span-2 sm:col-span-2 lg:col-span-2 2xl:col-span-2" />
        <Datatable className="bg-primary-foreground p-4 rounded shadow min-h-screen sm:min-h-0 2xl:col-span-3 lg:col-span-3 md:col-span-2 sm:col-span-2" />
        <div className="bg-white col-span-full lg:col-span-1 min-h-screen sm:min-h-0 md:h-125 lg:h-110 h-300 m-0 p-0">
          <div className = "grid grid-rows-6 md:h-123 ">
            <Datafiles className = "md:row-span-6 shadow-md rounded" >asd</Datafiles>
          </div>
        </div>
</div>

  )
}

export default Homepage
