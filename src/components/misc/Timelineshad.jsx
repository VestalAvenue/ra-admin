import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const items = [
    {
    id: 1,
    date: "9:00 AM",
    title: "Project Kickoff",
    description:
      "Frontend Development",
  },
  {
    id: 2,
    date: "11:00 AM",
    title: "Project Kickoff",
    description:
      "Principles of Economics",
  },
  {
    id: 3,
    date: "1:30 PM",
    title: "Design Phase",
    description:
      "Organic Chemistry",
  },
  {
    id: 4,
    date: "3:30 PM",
    title: "Development Sprint",
    description:
      "World History",
  },
  {
    id: 5,
    date: "4:00 PM",
    title: "Testing & Deployment",
    description:
      "Application Software",
  },
]

import {cn} from '@/lib/utils'
export default function Timelineshad({className="" , ...props}) {
  return (
    <Timeline
      defaultValue={3}
      className={cn("h-50 md:h-90 lg:h-65 xl:h-65 overflow-y-auto pr-2 overflow-x-hidden", className)}
    >
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {item.date}
            </TimelineDate>
            
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
