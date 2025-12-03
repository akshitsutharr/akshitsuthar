"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Layers, Code2, Database, Layout } from "lucide-react"
import Link from "next/link"

export function ProfileSection() {
  const avatarImage = "/images/avatar1.webp"

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="overflow-hidden card-hover border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <Avatar className="w-32 h-32 ring-4 ring-background relative transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
                <AvatarImage
                  src={avatarImage || "/placeholder.svg"}
                  alt="Akshit Suthar"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold bg-primary/10">AS</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-3 w-full">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                Akshit Suthar
              </h2>

              <div className="flex flex-col items-center gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors rounded-full border border-border/50 w-full justify-center max-w-[280px]">
                  Computer Engineering Student
                </Badge>

                {/* Full Stack Developer Badge */}
                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-semibold shadow-sm w-full max-w-[280px]">
                  <Layers className="w-4 h-4" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              Enthusiastic Computer Engineering student with a strong interest in web development and modern tech
              stacks. Experienced in building real-world projects with a focus on clean design, functionality, and user
              experience.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
            <Layout className="w-5 h-5 text-primary" />
            <span>Achievements & Certifications</span>
          </h3>
          <div className="space-y-3">
            <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_JGkYQqpJ4t844xnRW_1745066103476_completion_certificate.pdf?trk=public_profile_see-credential" target="_blank" className="block group">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all border border-transparent hover:border-border/50">
                <div className="p-2 bg-background rounded-md shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Code2 className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">EA Software Engineering Simulation</span>
              </div>
            </Link>

            <Link href="https://www.hackerrank.com/certificates/c55bf31636ae?trk=public_profile_see-credential" target="_blank" className="block group">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all border border-transparent hover:border-border/50">
                <div className="p-2 bg-background rounded-md shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Database className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">Java Certified - HackerRank</span>
              </div>
            </Link>

            <Link href="https://ude.my/UC-671a5401-6c9c-4b4e-84c8-0047ad929ea3?trk=public_profile_see-credential" target="_blank" className="block group">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/60 transition-all border border-transparent hover:border-border/50">
                <div className="p-2 bg-background rounded-md shadow-sm group-hover:scale-110 transition-transform shrink-0">
                  <Layers className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">AWS Course - Udemy</span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
            <Mail className="w-5 h-5 text-primary" />
            <span>Contact Information</span>
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm p-3 rounded-lg bg-secondary/20 hover:bg-secondary/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-muted-foreground hover:text-foreground transition-colors break-all">itsmeakshit.005@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm p-3 rounded-lg bg-secondary/20 hover:bg-secondary/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-muted-foreground hover:text-foreground transition-colors">Mumbai, India</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
