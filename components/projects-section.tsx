"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Zap, QrCode, Bot, Database, Workflow, Folder } from "lucide-react"
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
  SiGoogle
} from "react-icons/si"
import { JSX } from "react"

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
}

const projects: Project[] = [
  {
    "name": "QuickText",
    "description": "QuickText is a blazing-fast, minimalistic text sharing platform that lets you send and receive messages using a simple 5-digit code. It features real-time collaboration and automatic expiration. It is ideal for developers, teams, or anyone needing a secure way to share text snippets.",
    "technologies": ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Vercel"],
    "language": "🚀",
    "repo": "https://github.com/akshitsutharr/quicktext",
    "demo": "https://quicktextt.vercel.app"
  },
  {
    "name": "Writing Studio",
    "description": "A minimalist, distraction-free web-based application designed to help writers, bloggers, and students focus on their writing. It provides a clean and intuitive interface for crafting stories and articles.",
    "technologies": ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    "language": "🚀",
    "repo": "https://github.com/akshitsutharr/writingstudio",
    "demo": "https://writingstudio.vercel.app/"
  },
  {
    "name": "Just Draw",
    "description": "A feature-rich collaborative drawing application built with Next.js and modern web technologies. It allows users to create, edit, and share drawings in real-time with an intuitive interface and powerful drawing tools.",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons", "shadcn/ui"],
    "language": "🚀",
    "repo": "https://github.com/akshitsutharr/justdraw",
    "demo": "https://justdraw-nine.vercel.app"
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
  const commonIconClass = "w-4 h-4" // Consistent size for all icons
  
  switch (tech) {
    case "React":
      return { name: tech, icon: <SiReact className={`text-sky-400 ${commonIconClass}`} aria-label="React" /> }
    case "React.js":
      return { name: tech, icon: <SiReact className={`text-sky-400 ${commonIconClass}`} aria-label="React.js" /> }
    case "Node.js":
      return { name: tech, icon: <SiNodedotjs className={`text-green-500 ${commonIconClass}`} aria-label="Node.js" /> }
    case "Supabase":
      return { name: tech, icon: <SiSupabase className={`text-emerald-500 ${commonIconClass}`} aria-label="Supabase" /> }
    case "Next.js":
      return { name: tech, icon: <SiNextdotjs className={`text-foreground ${commonIconClass}`} aria-label="Next.js" /> }
    case "Next.js 14":
      return { name: tech, icon: <SiNextdotjs className={`text-foreground ${commonIconClass}`} aria-label="Next.js 14" /> }
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
    <Card className="w-full bg-background border">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-8">
          <Folder className="w-8 h-8 text-primary" />
          {/* <h2 className="text-3xl font-bold text-foreground">
            Featured Projects
          </h2> */}
           <div className="text-2xl text-foreground">
            <span>Featured Projects</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border border-border h-fit"
              onClick={() => handleCardClick(project)}
            >
              {/* Status Indicator */}
              <div className="absolute top-3 right-3 z-10">
                {project.demo ? (
                  <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live
                  </div>
                ) : (
                  <div className="flex items-center gap-1 bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs font-medium">
                    <Github className="w-3 h-3" />
                    Code
                  </div>
                )}
              </div>

              <CardHeader className="pb-3 relative">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 pr-16">
                  {project.name}
                  <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-muted-foreground" />
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack with consistent sizing */}
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => {
                      const { name, icon } = getTechIcon(tech)
                      return (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="flex items-center gap-1.5 px-2 py-1 bg-secondary text-secondary-foreground text-xs hover:bg-secondary/80 transition-colors h-6"
                        >
                          {icon}
                          <span className="font-normal text-xs whitespace-nowrap">{name}</span>
                        </Badge>
                      )
                    })}
                    {project.technologies.length > 6 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground h-6 flex items-center">
                        +{project.technologies.length - 6}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Indicator */}
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Click to {project.demo ? 'view live demo' : 'view source code'}</span>
                    <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      {project.demo ? <ExternalLink className="w-3 h-3" /> : <Github className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
