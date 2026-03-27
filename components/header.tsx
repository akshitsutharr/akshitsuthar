import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-fade-in pb-2 backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
      <div className="container mx-auto max-w-7xl px-3 py-3 md:px-4 md:py-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl px-4 py-2.5 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.95)] md:px-6 md:py-3">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="group cursor-pointer">
              <p className="font-font1 text-sm leading-none text-accent md:text-base">Portfolio</p>
              <h1 className="font-font1 text-xl leading-tight text-foreground transition-opacity hover:opacity-85 md:text-3xl">
                Akshit Suthar
              </h1>
            </div>
            <nav className="hidden items-center gap-1.5 rounded-full border border-border/65 bg-card/70 p-1 shadow-sm md:flex">
              <a href="#skills" className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Skills</a>
              <a href="#projects" className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Projects</a>
              <a href="#terminal" className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Terminal</a>
            </nav>
          </div>
          <div className="flex items-center rounded-full border border-border/60 bg-card/65 px-1 py-1 shadow-sm">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 rounded-full border border-transparent hover:scale-105 hover:border-border hover:bg-secondary/70 md:h-9 md:w-9"
            >
              <a href="https://github.com/akshitsutharr" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 rounded-full border border-transparent hover:scale-105 hover:border-border hover:bg-secondary/70 md:h-9 md:w-9"
            >
              <a href="https://www.linkedin.com/in/akshit-suthar-312407314" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 rounded-full border border-transparent hover:scale-105 hover:border-border hover:bg-secondary/70 md:h-9 md:w-9"
            >
              <a href="mailto:itsmeakshit.005@gmail.com">
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
