import React, { useState } from "react";
import { icons, initialMeetings } from "../data/dummy.jsx";
import { Reorder } from "framer-motion";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent
} from "../components/ui/card";

function MeetingSchedule() {
  const [meetings, setMeetings] = useState(initialMeetings);

  return (
    <div  >
      <Card className="h-100">
        <CardHeader>
          <CardTitle>Meeting Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Reorder.Group
            axis="y"
            values={meetings}
            onReorder={setMeetings}
            className="flex flex-col gap-4"
          >
            {meetings.slice(0, 4).map((meeting) => (
              <Reorder.Item
                key={meeting.id}
                value={meeting}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 shadow-sm cursor-grab dark:bg-stone-900  "
                whileDrag={{ scale: 1.03, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="flex gap-1">
                  {icons.map((icon, i) => (
                    <img key={i} src={icon} alt={`Icon ${i}`} className="w-6 h-6" />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 truncate dark:text-white">{meeting.name}</p>
                  <p className="text-xs text-gray-500 truncate dark:text-white">{meeting.description}</p>
                </div>
                <p className="text-gray-400 text-sm font-medium dark:text-white">{meeting.time}</p>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </CardContent>
      </Card>
    </div>
  )
}

export default MeetingSchedule;
