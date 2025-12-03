"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Zap, QrCode, Bot, Database, Workflow, Folder, Star, Globe, Layout, PenTool, MessageSquare, Terminal, Layers, Cpu } from "lucide-react"
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
  SiShadcnui,
  SiPostgresql,
  SiHtml5,
  SiCss3
} from "react-icons/si"
import { JSX } from "react"
import { Button } from "@/components/ui/button"

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
    description: "A comprehensive music discovery and review platform built with Next.js 14, Supabase, and the Spotify Web API. It empowers users to explore millions of songs, write detailed rich-text reviews, rate tracks, and curate personalized collections. The platform fosters a community-driven space for tracking musical journeys and sharing opinions.",
    features: [
      "Advanced search & filtering with Spotify API",
      "Rich-text reviews & rating system",
      "User profiles & personalized collections",
      "Real-time updates with Supabase"
    ],
    technologies: ["Next.js 14", "Supabase", "Spotify API", "Tailwind CSS", "Radix UI", "shadcn/ui"],
    repo: "https://github.com/akshitsutharr/beatshelf/tree/main",
    demo: "https://beatshelf.vercel.app/",
    icon: <SiSpotify className="w-8 h-8 text-green-500" />,
    featured: true
  },
  {
    name: "QuickText",
    tagline: "Instant Secure Text Sharing",
    description: "A lightweight, blazing-fast text-sharing application designed for speed and security. Users can instantly share sensitive text snippets using a simple 5-digit code system. The platform features real-time collaboration and automatic expiration, making it ideal for developers and teams needing a quick, secure communication channel.",
    features: [
      "5-digit code system for instant access",
      "Real-time text synchronization",
      "Automatic message expiration",
      "Secure & anonymous sharing"
    ],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    repo: "https://github.com/akshitsutharr/quicktext",
    demo: "https://quicktextt.vercel.app",
    icon: <MessageSquare className="w-8 h-8 text-blue-500" />
  },
  {
    name: "AI Career Coach",
    tagline: "AI-Powered Career Guidance",
    description: "An intelligent career coaching platform that leverages Large Language Models (Gemini/OpenAI) to provide personalized career advice. The application offers features like resume analysis, mock interviews, and real-time conversational coaching to help users advance their careers.",
    features: [
      "Real-time conversational AI coaching",
      "Resume analysis & optimization tips",
      "Mock interview simulations",
      "Background task processing with Inngest"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Clerk", "Inngest", "Gemini API", "OpenAI"],
    repo: "https://github.com/akshitsutharr/sensai",
    demo: "https://sensai-umber.vercel.app/",
    icon: <Bot className="w-8 h-8 text-purple-500" />
  },
  {
    name: "URL Shortener & Analytics",
    tagline: "Link Management & QR Dashboard",
    description: "A robust full-stack application for managing URLs and tracking engagement. It allows users to shorten links, generate custom QR codes, and view detailed analytics including click counts, device types, and geographic location data through a real-time dashboard.",
    features: [
      "Custom URL shortening",
      "QR code generation & scanning",
      "Detailed analytics (Device, Location)",
      "Secure user authentication"
    ],
    technologies: ["React", "Node.js", "Supabase", "QR Codes", "Recharts"],
    repo: "https://github.com/akshitsutharr/Url-Shortner",
    demo: "https://trimrr-tau.vercel.app/",
    icon: <QrCode className="w-8 h-8 text-orange-500" />
  },
  {
    name: "AI Code Reviewer",
    tagline: "Intelligent Code Analysis",
    description: "An automated code review platform that uses the Gemini API to analyze submitted code. It detects bugs, potential vulnerabilities, and performance issues, offering AI-generated corrections and detailed explanations to help developers write cleaner, more efficient code.",
    features: [
      "Automated bug detection",
      "AI-generated code corrections",
      "Performance optimization suggestions",
      "Clean, developer-focused UI"
    ],
    technologies: ["React", "Node.js", "Gemini API", "AI", "Highlight.js"],
    repo: "https://github.com/akshitsutharr/AI-Code-Reviewer",
    icon: <Terminal className="w-8 h-8 text-yellow-500" />
  },
  {
    name: "JustDraw",
    tagline: "Collaborative Whiteboard",
    description: "A real-time collaborative drawing application inspired by Excalidraw. It provides a shared whiteboard where multiple users can draw, write text, and brainstorm ideas together in real-time, featuring an intuitive interface and powerful drawing tools.",
    features: [
      "Real-time multi-user collaboration",
      "Freehand drawing & shape tools",
      "Text annotation support",
      "Export to image"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons"],
    repo: "https://github.com/akshitsutharr/justdraw",
    demo: "https://justdraw-nine.vercel.app",
    icon: <PenTool className="w-8 h-8 text-pink-500" />
  },
  {
    name: "WritingBoard",
    tagline: "Distraction-Free Online Notepad",
    description: "A minimalist web-based notepad designed for focus and simplicity. It allows users to save text, links, and notes in a distraction-free environment, with customization features to manage personal content effectively.",
    features: [
      "Distraction-free writing interface",
      "Auto-save functionality",
      "Customizable themes",
      "Link & note management"
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/akshitsutharr/writingstudio",
    demo: "https://writingstudio.vercel.app/",
    icon: <Layout className="w-8 h-8 text-indigo-500" />
  }
]

const getTechIcon = (tech: string): Technology => {
  const commonIconClass = "w-5 h-5" // Increased icon size

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
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="w-full space-y-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Folder className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          A showcase of my full-stack development journey, featuring applications built with modern technologies like Next.js, TypeScript, and AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-muted/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="p-6 lg:p-8 pb-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shadow-sm">
                    {project.icon || <Code2 className="w-8 h-8" />}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <p className="text-base font-medium text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start">
                  {project.demo ? (
                    <div className="flex items-center gap-2 text-green-500 text-sm font-medium bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Live Deployment
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-muted px-3 py-1.5 rounded-full border border-border">
                      <Github className="w-4 h-4" />
                      Source Available
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 lg:p-8 pt-0 space-y-6 flex-grow">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-4xl">
                {project.description}
              </p>

              {project.features && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>

            <CardFooter className="p-6 lg:p-8 pt-0 flex flex-col lg:flex-row gap-6 lg:items-center justify-between border-t border-border/50 mt-auto bg-muted/20">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => {
                  const { name, icon } = getTechIcon(tech)
                  return (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-1.5 bg-background hover:bg-secondary text-secondary-foreground/90 transition-colors border border-border/50 hover:border-primary/30 shadow-sm"
                    >
                      {icon}
                      <span className="font-medium text-sm">{name}</span>
                    </Badge>
                  )
                })}
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto">
                {project.demo && (
                  <Button
                    className="flex-1 lg:flex-none group/btn"
                    onClick={() => handleCardClick(project.demo!)}
                  >
                    <Globe className="w-4 h-4 mr-2 group-hover/btn:animate-spin-slow" />
                    View Live
                    <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex-1 lg:flex-none hover:bg-secondary/50"
                  onClick={() => handleCardClick(project.repo)}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
