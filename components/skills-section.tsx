"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const techStack = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Neon Database", icon: "https://avatars.githubusercontent.com/u/77690634?s=200&v=4" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://img.icons8.com/color/480/c-programming.png" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg" },
  { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
  { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "XAMPP", icon: "https://www.svgrepo.com/show/354575/xampp.svg" }
]

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-24">
      <Card className="section-shell overflow-hidden rounded-2xl border-border/60">
        <CardHeader className="pb-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">Core Capabilities</p>
          <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
            <Sparkles className="h-6 w-6 text-primary" />
            <span>Tech Stack</span>
          </CardTitle>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            A practical toolkit across frontend, backend, data, and AI experimentation for building production-ready web applications.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-xl border border-border/60 bg-card/55 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative w-12 h-12 mb-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{ filter: 'var(--icon-filter)' }}
                  />
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
