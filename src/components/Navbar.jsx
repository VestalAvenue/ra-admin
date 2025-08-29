import React from 'react'
import {Moon} from "lucide-react"
import { Link } from "react-router-dom"
import { Sun } from "lucide-react"
import {Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from '@radix-ui/react-avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"

import {useTheme} from "./ThemeProvider"
import Samantha from "../data/Samantha.png"
import { ThemeProvider } from './ThemeProvider';
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
    const {setTheme} = useTheme()
  return (
    <div className="p-4 flex items-center justify-between">
      <SidebarTrigger/>
    <div className = "flex items-center gap-4">
        <Link to="/">Dashboard</Link>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
  

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src = {Samantha} />
                    <AvatarFallback>S</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile Details</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Hide Settings</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        
    </div>
    </div>
  )
}

export default Navbar
