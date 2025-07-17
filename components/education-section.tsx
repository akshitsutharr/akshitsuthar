import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      institution: "MCT Rajiv Gandhi Institute of Technology, Mumbai",
      period: "2023 - 2027",
      grade: "8.0 CGPA (First Year)",
      status: "current",
    },
    {
      degree: "Senior Secondary Education",
      field: "Science Stream",
      institution: "Emmanuel Mission Senior Secondary School",
      period: "2021 - 2023",
      grade: "82%",
      board: "CBSE Board",
    },
    {
      degree: "Secondary Education",
      field: "General",
      institution: "Emmanuel Mission Senior Secondary School",
      period: "2019 - 2021",
      grade: "80%",
      board: "CBSE Board",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🎓</span>
          <span>Education</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  {edu.field && <p className="text-muted-foreground">{edu.field}</p>}
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.status === "current" && (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Current
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{edu.grade}</Badge>
                  {edu.board && <Badge variant="outline">{edu.board}</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
