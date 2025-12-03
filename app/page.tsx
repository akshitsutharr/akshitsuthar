import { Header } from "@/components/header"
import { ProfileSection } from "@/components/profile-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-dot-grid">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="space-y-8 animate-fade-in">
                <ProfileSection />
                <ContactSection />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-8 animate-slide-up">
              <SkillsSection />
              <ProjectsSection />
              <EducationSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
