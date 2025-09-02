import React from 'react'
import { Calendar, Home, Inbox, LayoutDashboardIcon, Search, Settings   } from "lucide-react"
import logo from '../data/ra-admin.png'
import { useSidebar } from './ui/sidebar'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,

} from "./ui/sidebar"

import { Link} from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible"
import { ChevronRight  } from "lucide-react"

const dashboard = [
  {
    title: "Ecommerce",
    url: "/ecommerce",
    icon: Home,
  },
  {
    title: "Project",
    url: "/project",
    icon: Inbox,
  },
  {
    title: "Crypto",
    url: "/crypto",
    icon: Calendar,
  },
  {
    title: "Education",
    url: "/education",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]




const SidebarComponent = () => {
  const { state } = useSidebar()
  const [openMenus, setOpenMenus] = React.useState({})

  function toggleMenu(key) {
    setOpenMenus((prevMenus) => {
      // Copy the previous state
      const updatedMenus = { ...prevMenus };
      // Toggle the value for the given key
      updatedMenus[key] = !prevMenus[key];
      // Return the new state object
      return updatedMenus;
    });
  }

  return (
    <Sidebar collapsible="icon" collapsedWidth="10rem">
      <SidebarHeader className={`"p-4 mt-2 ml-2  items-center " ${state === "collapsed" ? " justify-center" : " flex flex-row"}`}>
        <Link to="/" className={`flex ${state === "collapsed" ? "h-6 w-6 pt-1 mr-1" : ""}`}>
        <div className="w-10 h-10">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <span
          className={`text-[30px] font-nunito text-[#48BECE] transition-opacity duration-150 ${
            state === "collapsed" ? "hidden" : "opacity-100"
          }`}
        >
          ra-admin
        </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className = "bg-gray-200 text-cyan-400 px-3 py-1 rounded-md max-w-25">DASHBOARD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-3" >
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem className= "border-0">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className={`my-2 mx-2 active:bg-blue-500 flex items-center gap-2 ${state === "collapsed" ? "" : ""}`}>
                            {/* Left Icon */}
                            <LayoutDashboardIcon className={`${state === "collapsed" ? "" : ""  }`} />

                            {/* Label */}
                            <span className="flex-1 text-left">Dashboard</span>

                            {/* Right Chevron */}
                            <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub className={`border-0 p-0 mr-1 ${state === "collapsed" ? "" : ""}`}>
                        {dashboard.map((item, index) => (
                          <SidebarMenuSubItem key={index}>
                            <Link to={item.url} className="flex items-center gap-2 w-full">
                              <SidebarMenuButton className="w-full justify-start">
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.title}
                              </SidebarMenuButton>
                            </Link>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>

       
      </SidebarContent>
    </Sidebar>
  )
}

export default SidebarComponent

