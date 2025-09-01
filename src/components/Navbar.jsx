import React, { useState } from 'react'
import { Moon } from "lucide-react"
import { Link } from "react-router-dom"
import { Sun } from "lucide-react"
import { Button } from "./ui/button"
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

import { useTheme } from "./ThemeProvider"
import Samantha from "../data/Samantha.png"
import { ThemeProvider } from './ThemeProvider'
import { SidebarTrigger } from './ui/sidebar'
import { Dropdown } from 'antd'
import { Notification } from './misc/Notification'
import { Bell, X, ShoppingBasket } from "lucide-react"
import { Shoppingcart } from './misc/Shoppingcart'
import  {initialItems}  from "@/data/dummy.jsx"


const Navbar = () => {
  const { setTheme } = useTheme()
  const [notifOpen, setNotifOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [messages, setMessages] = useState(false)
  const [cartItems, setCartItems] = useState(initialItems);

  return (
    <div className="p-4 flex items-center justify-between">
      <SidebarTrigger />

      <div className="flex items-center gap-4">
        <DropdownMenu open={cartOpen} onOpenChange={setCartOpen} >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingBasket className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="min-w-100">
            {/* Header row */}
            <Shoppingcart setOpen={setCartOpen} items={cartItems} setItems={setCartItems} />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu open={notifOpen} onOpenChange={setNotifOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="min-w-100">
            {/* Header row */}
            <Notification setOpen={notifOpen} />
          </DropdownMenuContent>
        </DropdownMenu>

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
              <AvatarImage src={Samantha} />
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
