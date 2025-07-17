"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiSupabase, SiNextdotjs, SiMongodb, SiExpress, SiFirebase } from "react-icons/si"
import { JSX } from "react"

interface Technology {
  name: string
  icon: JSX.Element | null
}

interface Project {
  name: string
  description: string
  language?: "🔗" | "⚙️"
  technologies: string[]
  repo: string
  demo?: string
}

const projects: Project[] = [
  {
    name: "URL Shortener",
    description: "Full-stack application using React, Node.js, and Supabase that allows users to shorten URLs, generate and scan custom QR codes, and view link analytics including device, location, and click data. Includes secure user authentication and a real-time dashboard.",
    technologies: ["React", "Node.js", "Supabase", "QR Codes"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/Url-Shortner",
    demo: "https://trimrr-tau.vercel.app/"
  },
  {
    name: "AI-Powered Code Reviewer",
    description: "Intelligent code review platform with React, Node.js, and Gemini API that analyzes user-submitted code, detects bugs, and offers AI-generated corrections and explanations. Designed for clean UI/UX and developer productivity.",
    technologies: ["React", "Node.js", "Gemini API", "AI"],
    language: "🔗",
    repo: "https://github.com/akshitsutharr/AI-Code-Reviewer"
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

const getLanguageIcon = (language: Project["language"]): JSX.Element | null => {
  switch (language) {
    default:
      return null
  }
}

const getTechIcon = (tech: string): Technology => {
  switch (tech) {
    case "React":
      return { name: tech, icon: <SiReact className="text-sky-400" aria-label="React" /> }
    case "Node.js":
      return { name: tech, icon: <SiNodedotjs className="text-green-500" aria-label="Node.js" /> }
    case "Supabase":
      return { name: tech, icon: <SiSupabase className="text-emerald-500" aria-label="Supabase" /> }
    case "Next.js":
      return { name: tech, icon: <SiNextdotjs className="text-white" aria-label="Next.js" /> }
    case "MongoDB":
      return { name: tech, icon: <SiMongodb className="text-green-500" aria-label="MongoDB" /> }
    case "Express.js":
      return { name: tech, icon: <SiExpress className="text-gray-500" aria-label="Express.js" /> }
    case "Firebase":
      return { name: tech, icon: <SiFirebase className="text-amber-500" aria-label="Firebase" /> }
    default:
      return { name: tech, icon: null }
  }
}

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title">
      <Card>
        <CardHeader>
          <CardTitle 
            id="projects-title"
            className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"
          >
            <span role="img" aria-label="Projects folder icon">📁</span>
            <span>Featured Projects</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {getLanguageIcon(project.language)}
                          <span className="ml-1">{project.language}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1">
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} source code on GitHub`}
                        >
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-primary">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                        {project.demo ? (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View ${project.name} live demo`}
                          >
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-primary">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0 hover:text-primary"
                                aria-label="Demo not available"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Demo Not Available</DialogTitle>
                                <DialogDescription>
                                  The live demo for this project is not available at the moment. Please check out the GitHub repository for more information.
                                </DialogDescription>
                              </DialogHeader>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const { name, icon } = getTechIcon(tech)
                        return (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs flex items-center gap-1"
                          >
                            {icon}
                            <span>{name}</span>
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
