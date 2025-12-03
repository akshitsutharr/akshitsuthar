"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Zap, QrCode, Bot, Database, Workflow, Folder, Star, Globe } from "lucide-react"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiVercel,
  SiPrisma,
  SiClerk,
  SiRadixui,
  SiGoogle,
  SiSpotify
} from "react-icons/si"
import { JSX } from "react"
import { Button } from "@/components/ui/button"

interface Technology {
  name: string
  icon: JSX.Element | null
}

interface Project {
  name: string
  description: string
  language?: "🔗" | "🚀"
  technologies: string[]
  repo: string
  demo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: "BeatShelf",
    description: "A full-stack music discovery and review platform built with Next.js 14, Supabase, and the Spotify Web API. Users can explore millions of songs, write detailed reviews, give ratings, and curate personalized collections. Features advanced search, user profiles, favorites, rich-text reviews, and real-time updates.",
    technologies: ["Next.js 14", "Supabase", "Spotify API", "Tailwind CSS", "Radix UI", "shadcn/ui"],
    language: "🚀",
    repo: "https://github.com/akshitsutharr/beatshelf/tree/main",
    demo: "https://beatshelf.vercel.app/",
    featured: true
  },
  {
    name: "QuickText",
    description: "QuickText is a blazing-fast, minimalistic text sharing platform that lets you send and receive messages using a simple 5-digit code. It features real-time collaboration and automatic expiration. It is ideal for developers, teams, or anyone needing a secure way to share text snippets.",
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    language: "🚀",
    repo: "https://github.com/akshitsutharr/quicktext",
    demo: "https://quicktextt.vercel.app"
  },
  {
    name: "Writing Studio",
    description: "A minimalist, distraction-free web-based application designed to help writers, bloggers, and students focus on their writing. It provides a clean and intuitive interface for crafting stories and articles.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    language: "🚀",
    repo: "https://github.com/akshitsutharr/writingstudio",
    demo: "https://writingstudio.vercel.app/"
  },
  {
    name: "Just Draw",
    description: "A feature-rich collaborative drawing application built with Next.js and modern web technologies. It allows users to create, edit, and share drawings in real-time with an intuitive interface and powerful drawing tools.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons", "shadcn/ui"],
    language: "🚀",
    repo: "https://github.com/akshitsutharr/justdraw",
    demo: "https://justdraw-nine.vercel.app"
  },
  {
    name: "URL Shortener",
    description: "Full-stack application using React, Node.js, and Supabase that allows users to shorten URLs, generate and scan custom QR codes, and view link analytics including device, location, and click data. Includes secure user authentication and a real-time dashboard.",
    technologies: ["React", "Node.js", "Supabase", "QR Codes"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/Url-Shortner",
    demo: "https://trimrr-tau.vercel.app/"
  },
  {
    name: "AI Career Coach",
    description: "Full-stack web application that offers personalized career guidance using AI. Built with Next.js, Tailwind CSS, Shadcn UI, Prisma, Clerk, and Inngest. Features resume tips, mock interviews, and career advice with conversational AI responses.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Clerk", "AI"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/sensai",
    demo: "https://sensai-umber.vercel.app/"
  },
  {
    name: "AI-Powered Code Reviewer",
    description: "Intelligent code review platform with React, Node.js, and Gemini API that analyzes user-submitted code, detects bugs, and offers AI-generated corrections and explanations. Designed for clean UI/UX and developer productivity.",
    technologies: ["React", "Node.js", "Gemini API", "AI"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/AI-Code-Reviewer"
  },
  {
    name: "Online Examination Portal",
    description: "Comprehensive examination system with user authentication, timed tests, and result analytics.",
    technologies: ["React", "Node.js", "MongoDB"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/Online-Examination-Portal"
  },
  {
    name: "MyBlog",
    description: "Personal blogging platform with content management and user engagement features.",
    technologies: ["React", "Express.js", "MongoDB"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/MyBlog"
  },
  {
    name: "Netflix Clone",
    description: "Streaming platform clone with user authentication and video playback functionality.",
    technologies: ["React", "Firebase", "TMDB API"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/netflix-clone"
  }
]

const getTechIcon = (tech: string): Technology => {
  const commonIconClass = "w-3.5 h-3.5" // Consistent size for all icons

  switch (tech) {
    case "React":
    case "React.js":
      return { name: tech, icon: <SiReact className={`text-sky-400 ${commonIconClass}`} aria-label="React" /> }
    case "Node.js":
      return { name: tech, icon: <SiNodedotjs className={`text-green-500 ${commonIconClass}`} aria-label="Node.js" /> }
    case "Supabase":
      return { name: tech, icon: <SiSupabase className={`text-emerald-500 ${commonIconClass}`} aria-label="Supabase" /> }
    case "Next.js":
    case "Next.js 14":
      return { name: tech, icon: <SiNextdotjs className={`text-foreground ${commonIconClass}`} aria-label="Next.js" /> }
    case "MongoDB":
      return { name: tech, icon: <SiMongodb className={`text-green-500 ${commonIconClass}`} aria-label="MongoDB" /> }
    case "Express.js":
      return { name: tech, icon: <SiExpress className={`text-muted-foreground ${commonIconClass}`} aria-label="Express.js" /> }
    case "Firebase":
      return { name: tech, icon: <SiFirebase className={`text-amber-500 ${commonIconClass}`} aria-label="Firebase" /> }
    case "TypeScript":
      return { name: tech, icon: <SiTypescript className={`text-blue-500 ${commonIconClass}`} aria-label="TypeScript" /> }
    case "JavaScript":
      return { name: tech, icon: <SiJavascript className={`text-yellow-400 ${commonIconClass}`} aria-label="JavaScript" /> }
    case "Tailwind CSS":
      return { name: tech, icon: <SiTailwindcss className={`text-teal-400 ${commonIconClass}`} aria-label="Tailwind CSS" /> }
    case "Vercel":
      return { name: tech, icon: <SiVercel className={`text-foreground ${commonIconClass}`} aria-label="Vercel" /> }
    case "Prisma":
      return { name: tech, icon: <SiPrisma className={`text-slate-600 dark:text-slate-400 ${commonIconClass}`} aria-label="Prisma" /> }
    case "Clerk":
      return { name: tech, icon: <SiClerk className={`text-purple-500 ${commonIconClass}`} aria-label="Clerk" /> }
    case "Radix UI":
      return { name: tech, icon: <SiRadixui className={`text-muted-foreground ${commonIconClass}`} aria-label="Radix UI" /> }
    case "shadcn/ui":
      return { name: tech, icon: <Code2 className={`text-muted-foreground ${commonIconClass}`} aria-label="shadcn/ui" /> }
    case "Lucide Icons":
      return { name: tech, icon: <Zap className={`text-orange-500 ${commonIconClass}`} aria-label="Lucide Icons" /> }
    case "QR Codes":
      return { name: tech, icon: <QrCode className={`text-muted-foreground ${commonIconClass}`} aria-label="QR Codes" /> }
    case "AI":
      return { name: tech, icon: <Bot className={`text-blue-600 ${commonIconClass}`} aria-label="AI" /> }
    case "Gemini API":
      return { name: tech, icon: <SiGoogle className={`text-blue-500 ${commonIconClass}`} aria-label="Gemini API" /> }
    case "TMDB API":
      return { name: tech, icon: <Database className={`text-yellow-500 ${commonIconClass}`} aria-label="TMDB API" /> }
    case "Inngest":
      return { name: tech, icon: <Workflow className={`text-indigo-500 ${commonIconClass}`} aria-label="Inngest" /> }
    case "Spotify API":
      return { name: tech, icon: <SiSpotify className={`text-green-500 ${commonIconClass}`} aria-label="Spotify API" /> }
    default:
      return { name: tech, icon: null }
  }
}

export function ProjectsSection() {
  const handleCardClick = (project: Project) => {
    const url = project.demo || project.repo
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="w-full space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Folder className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group flex flex-col h-full bg-card/50 backdrop-blur-sm border-muted/60 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${project.featured ? 'md:col-span-2 xl:col-span-2 border-primary/20 bg-primary/5' : ''}`}
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.name}
                    {project.featured && (
                      <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30 border-none text-[10px] px-2 py-0.5 h-5">
                        FEATURED
                      </Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {project.demo ? (
                      <span className="flex items-center gap-1.5 text-green-500 font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live Demo
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" />
                        Source Code
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && (
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary" onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}>
                      <Globe className="w-4 h-4" />
                    </Button>
                  )}
                  <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary" onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.repo, '_blank');
                  }}>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow space-y-4 pb-4">
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>
            </CardContent>

            <CardFooter className="pt-0 mt-auto">
              <div className="flex flex-wrap gap-1.5 w-full">
                {project.technologies.slice(0, project.featured ? 10 : 6).map((tech, techIndex) => {
                  const { name, icon } = getTechIcon(tech)
                  return (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/50 hover:bg-secondary text-secondary-foreground/90 text-xs transition-colors border-transparent hover:border-border"
                    >
                      {icon}
                      <span className="font-medium">{name}</span>
                    </Badge>
                  )
                })}
                {project.technologies.length > (project.featured ? 10 : 6) && (
                  <Badge variant="outline" className="text-xs text-muted-foreground hover:bg-muted/50">
                    +{project.technologies.length - (project.featured ? 10 : 6)}
                  </Badge>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
