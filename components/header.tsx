"use client"

import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <header className="border-b border-border/50 bg-transparent backdrop-blur-sm supports-[backdrop-filter]:bg-background/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-font1 font-semibold text-foreground">Akshit Suthar</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Moon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-4">
          <div className="group cursor-pointer">
            <h1 className="text-2xl font-font1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 font-bold hover:opacity-80 transition-opacity">
              Akshit Suthar
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hover:scale-110 hover:bg-primary/10 transition-all duration-300 rounded-full"
          >
            <a href="https://github.com/akshitsutharr" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hover:scale-110 hover:bg-primary/10 transition-all duration-300 rounded-full"
          >
            <a href="https://www.linkedin.com/in/akshit-suthar-312407314" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hover:scale-110 hover:bg-primary/10 transition-all duration-300 rounded-full"
          >
            <a href="mailto:itsmeakshit.005@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <div className="h-4 w-px bg-border/60 mx-1"></div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="hover:scale-110 hover:bg-primary/10 transition-all duration-300 rounded-full"
          >
            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
