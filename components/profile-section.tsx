"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export function ProfileSection() {
  const avatarImage = "/images/avatar1.webp"

  return (
    <div className="space-y-4 animate-fade-in">
      <Card className="overflow-hidden card-hover border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-white/20 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <Avatar className="w-24 h-24 ring-2 ring-white/20 relative transition-all duration-300 ease-in-out hover:scale-105">
                <AvatarImage
                  src={avatarImage || "/placeholder.svg"}
                  alt="Akshit Suthar"
                  className="object-cover"
                />
                <AvatarFallback className="text-lg font-semibold bg-primary/10">AS</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Akshit Suthar
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="secondary" className="text-xs font-medium bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-white">
                  Computer Engineering Student
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enthusiastic Computer Engineering student with a strong interest in web development and modern tech
              stacks. Experienced in building real-world projects with a focus on clean design, functionality, and user
              experience.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>itsmeakshit.005@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Achievements & Certifications</h3>
          <div className="space-y-2">
            <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_JGkYQqpJ4t844xnRW_1745066103476_completion_certificate.pdf?trk=public_profile_see-credential" target="_blank" passHref>
            <Badge variant="secondary" className="w-full mb-2 justify-start hover:bg-muted transition">
              EA Software Engineering Simulation
            </Badge>
            </Link>

            <Link href="https://www.hackerrank.com/certificates/c55bf31636ae?trk=public_profile_see-credential" target="_blank" passHref>
              <Badge
                variant="secondary"
                className="w-full mb-2 justify-start cursor-pointer hover:bg-muted hover:text-primary transition"
              >
                Java Certified - HackerRank
              </Badge>
            </Link>

            <Link href="https://ude.my/UC-671a5401-6c9c-4b4e-84c8-0047ad929ea3?trk=public_profile_see-credential" target="_blank" passHref>
              <Badge
                variant="secondary"
                className="w-full mb-2 justify-start cursor-pointer hover:bg-muted hover:text-primary transition"
              >
                AWS Course - Udemy
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
