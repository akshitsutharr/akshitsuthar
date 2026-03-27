import { Header } from "@/components/header"
import { ProfileSection } from "@/components/profile-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { TerminalSection } from "@/components/terminal-section"

export default function Home() {
  return (
    <div className="min-h-screen mesh-bg">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 pt-24 pb-8 md:px-6 md:pt-28 md:pb-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24 md:top-28">
              <div className="space-y-8 animate-fade-in">
                <ProfileSection />
                <ContactSection />
              </div>
            </div>
          </aside>
          <section className="lg:col-span-2 space-y-8">
            <div className="space-y-8 animate-slide-up">
              <SkillsSection />
              <ProjectsSection />
              <TerminalSection />
              <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/55 px-6 py-8 shadow-2xl shadow-black/40 backdrop-blur-sm md:px-10 md:py-10">
                <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl md:h-52 md:w-52" />
                <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-accent/25 blur-3xl md:h-44 md:w-44" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Portfolio</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Building useful, polished digital products with full-stack engineering and design-first thinking.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Explore projects, technical strengths, and an interactive terminal demo designed to reflect both engineering depth and product intuition.
                </p>
              </section>
              {/* <EducationSection /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
