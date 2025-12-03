"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Zap, QrCode, Bot, Database, Workflow, Folder, Globe, Layout, PenTool, MessageSquare, Terminal, Layers, Cpu } from "lucide-react"
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
  SiSpotify,
  SiOpenai,
  SiShadcnui
} from "react-icons/si"
import { JSX } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Technology {
  name: string
  icon: JSX.Element | null
}

interface Project {
  name: string
  tagline: string
  description: string
  technologies: string[]
  repo: string
  demo?: string
  features?: string[]
  icon?: JSX.Element
  featured?: boolean
}

const projects: Project[] = [
  {
    name: "BeatShelf",
    tagline: "Full-Stack Music Discovery Platform",
    description: "A comprehensive music discovery and review platform built with Next.js 14, Supabase, and the Spotify Web API. It empowers users to explore millions of songs, write detailed rich-text reviews, rate tracks, and curate personalized collections.",
    features: [
      "Advanced search & filtering with Spotify API",
      "Rich-text reviews & rating system",
      "User profiles & personalized collections",
      "Real-time updates with Supabase"
    ],
    technologies: ["Next.js 14", "Supabase", "Spotify API", "Tailwind CSS", "Radix UI", "shadcn/ui"],
    repo: "https://github.com/akshitsutharr/beatshelf/tree/main",
    demo: "https://beatshelf.vercel.app/",
    icon: <SiSpotify className="w-6 h-6 md:w-8 md:h-8 text-green-500" />,
    featured: true
  },
  {
    name: "QuickText",
    tagline: "Instant Secure Text Sharing",
    description: "A lightweight, blazing-fast text-sharing application designed for speed and security. Users can instantly share sensitive text snippets using a simple 5-digit code system.",
    features: [
      "5-digit code system for instant access",
      "Real-time text synchronization",
      "Automatic message expiration",
      "Secure & anonymous sharing"
    ],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    repo: "https://github.com/akshitsutharr/quicktext",
    demo: "https://quicktextt.vercel.app",
    icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
  },
  {
    name: "AI Career Coach",
    tagline: "AI-Powered Career Guidance",
    description: "An intelligent career coaching platform that leverages Large Language Models (Gemini/OpenAI) to provide personalized career advice, resume analysis, and mock interviews.",
    features: [
      "Real-time conversational AI coaching",
      "Resume analysis & optimization tips",
      "Mock interview simulations",
      "Background task processing with Inngest"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Clerk", "Inngest", "Gemini API", "OpenAI"],
    repo: "https://github.com/akshitsutharr/sensai",
    demo: "https://sensai-umber.vercel.app/",
    icon: <Bot className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
  },
  {
    name: "URL Shortener & Analytics",
    tagline: "Link Management & QR Dashboard",
    description: "A robust full-stack application for managing URLs and tracking engagement. It allows users to shorten links, generate custom QR codes, and view detailed analytics.",
    features: [
      "Custom URL shortening",
      "QR code generation & scanning",
      "Detailed analytics (Device, Location)",
      "Secure user authentication"
    ],
    technologies: ["React", "Node.js", "Supabase", "QR Codes", "Recharts"],
    repo: "https://github.com/akshitsutharr/Url-Shortner",
    demo: "https://trimrr-tau.vercel.app/",
    icon: <QrCode className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
  },
  {
    name: "AI Code Reviewer",
    tagline: "Intelligent Code Analysis",
    description: "An automated code review platform that uses the Gemini API to analyze submitted code. It detects bugs, potential vulnerabilities, and performance issues.",
    features: [
      "Automated bug detection",
      "AI-generated code corrections",
      "Performance optimization suggestions",
      "Clean, developer-focused UI"
    ],
    technologies: ["React", "Node.js", "Gemini API", "AI", "Highlight.js"],
    repo: "https://github.com/akshitsutharr/AI-Code-Reviewer",
    icon: <Terminal className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
  },
  {
    name: "JustDraw",
    tagline: "Collaborative Whiteboard",
    description: "A real-time collaborative drawing application inspired by Excalidraw. It provides a shared whiteboard where multiple users can draw and brainstorm ideas together.",
    features: [
      "Real-time multi-user collaboration",
      "Freehand drawing & shape tools",
      "Text annotation support",
      "Export to image"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons"],
    repo: "https://github.com/akshitsutharr/justdraw",
    demo: "https://justdraw-nine.vercel.app",
    icon: <PenTool className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
  },
  {
    name: "WritingBoard",
    tagline: "Distraction-Free Online Notepad",
    description: "A minimalist web-based notepad designed for focus and simplicity. It allows users to save text, links, and notes in a distraction-free environment.",
    features: [
      "Distraction-free writing interface",
      "Auto-save functionality",
      "Customizable themes",
      "Link & note management"
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/akshitsutharr/writingstudio",
    demo: "https://writingstudio.vercel.app/",
    icon: <Layout className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
  }
]

const getTechIcon = (tech: string): Technology => {
  const commonIconClass = "w-4 h-4 md:w-5 md:h-5"

  switch (tech) {
    case "React":
    case "React.js":
      return { name: tech, icon: <SiReact className={`text-sky-400 ${commonIconClass}`} /> }
    case "Node.js":
      return { name: tech, icon: <SiNodedotjs className={`text-green-500 ${commonIconClass}`} /> }
    case "Supabase":
      return { name: tech, icon: <SiSupabase className={`text-emerald-500 ${commonIconClass}`} /> }
    case "Next.js":
    case "Next.js 14":
      return { name: tech, icon: <SiNextdotjs className={`text-foreground ${commonIconClass}`} /> }
    case "MongoDB":
      return { name: tech, icon: <SiMongodb className={`text-green-500 ${commonIconClass}`} /> }
    case "Express.js":
      return { name: tech, icon: <SiExpress className={`text-muted-foreground ${commonIconClass}`} /> }
    case "Firebase":
      return { name: tech, icon: <SiFirebase className={`text-amber-500 ${commonIconClass}`} /> }
    case "TypeScript":
      return { name: tech, icon: <SiTypescript className={`text-blue-500 ${commonIconClass}`} /> }
    case "JavaScript":
      return { name: tech, icon: <SiJavascript className={`text-yellow-400 ${commonIconClass}`} /> }
    case "Tailwind CSS":
      return { name: tech, icon: <SiTailwindcss className={`text-teal-400 ${commonIconClass}`} /> }
    case "Vercel":
      return { name: tech, icon: <SiVercel className={`text-foreground ${commonIconClass}`} /> }
    case "Prisma":
      return { name: tech, icon: <SiPrisma className={`text-slate-600 dark:text-slate-400 ${commonIconClass}`} /> }
    case "Clerk":
      return { name: tech, icon: <SiClerk className={`text-purple-500 ${commonIconClass}`} /> }
    case "Radix UI":
      return { name: tech, icon: <SiRadixui className={`text-muted-foreground ${commonIconClass}`} /> }
    case "shadcn/ui":
      return { name: tech, icon: <SiShadcnui className={`text-muted-foreground ${commonIconClass}`} /> }
    case "Lucide Icons":
      return { name: tech, icon: <Zap className={`text-orange-500 ${commonIconClass}`} /> }
    case "QR Codes":
      return { name: tech, icon: <QrCode className={`text-muted-foreground ${commonIconClass}`} /> }
    case "AI":
      return { name: tech, icon: <Bot className={`text-blue-600 ${commonIconClass}`} /> }
    case "Gemini API":
      return { name: tech, icon: <SiGoogle className={`text-blue-500 ${commonIconClass}`} /> }
    case "OpenAI":
      return { name: tech, icon: <SiOpenai className={`text-green-600 ${commonIconClass}`} /> }
    case "TMDB API":
      return { name: tech, icon: <Database className={`text-yellow-500 ${commonIconClass}`} /> }
    case "Inngest":
      return { name: tech, icon: <Workflow className={`text-indigo-500 ${commonIconClass}`} /> }
    case "Spotify API":
      return { name: tech, icon: <SiSpotify className={`text-green-500 ${commonIconClass}`} /> }
    case "Recharts":
      return { name: tech, icon: <Layers className={`text-pink-500 ${commonIconClass}`} /> }
    case "Highlight.js":
      return { name: tech, icon: <Code2 className={`text-yellow-600 ${commonIconClass}`} /> }
    default:
      return { name: tech, icon: <Cpu className={`text-muted-foreground ${commonIconClass}`} /> }
  }
}

export function ProjectsSection() {
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Folder className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          A showcase of my full-stack development journey, featuring applications built with modern technologies like Next.js, TypeScript, and AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-muted/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <CardHeader className="p-4 md:p-6 pb-2 md:pb-4 relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 md:p-3 bg-secondary rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shadow-sm shrink-0">
                    {project.icon || <Code2 className="w-6 h-6 md:w-8 md:h-8" />}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm md:text-base font-medium text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start">
                  {project.demo ? (
                    <div className="flex items-center gap-2 text-green-500 text-xs md:text-sm font-medium bg-green-500/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="hidden md:inline">Live Deployment</span>
                      <span className="md:hidden">Live</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm font-medium bg-muted px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-border">
                      <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="hidden md:inline">Source Available</span>
                      <span className="md:hidden">Code</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4 md:p-6 pt-2 md:pt-0 space-y-4 md:space-y-6 flex-grow relative z-10">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg max-w-4xl line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              {project.features && (
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>

            <CardFooter className="p-4 md:p-6 pt-0 flex flex-col lg:flex-row gap-4 md:gap-6 lg:items-center justify-between border-t border-border/50 mt-auto bg-muted/20 relative z-10">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech, techIndex) => {
                  const { name, icon } = getTechIcon(tech)
                  return (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-background hover:bg-secondary text-secondary-foreground/90 transition-colors border border-border/50 hover:border-primary/30 shadow-sm"
                    >
                      {icon}
                      <span className="font-medium text-xs md:text-sm">{name}</span>
                    </Badge>
                  )
                })}
                {project.technologies.length > 6 && (
                  <Badge variant="outline" className="text-xs md:text-sm">+{project.technologies.length - 6}</Badge>
                )}
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0">
                {project.demo && (
                  <Button
                    asChild
                    className="flex-1 lg:flex-none group/btn h-9 md:h-10 text-sm md:text-base cursor-pointer relative z-20"
                  >
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2 group-hover/btn:animate-spin-slow" />
                      View Live
                      <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 lg:flex-none hover:bg-secondary/50 h-9 md:h-10 text-sm md:text-base cursor-pointer relative z-20"
                >
                  <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
