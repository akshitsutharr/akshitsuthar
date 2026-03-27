import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/70 bg-background/70 py-8 text-center text-sm text-muted-foreground backdrop-blur">
      <div className="mb-4 flex justify-center gap-3">
        <a
          href="https://github.com/akshitsutharr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="rounded-full border border-border/70 bg-card/60 p-2.5 transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshit-suthar-312407314"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border border-border/70 bg-card/60 p-2.5 transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:itsmeakshit.005@gmail.com"
          aria-label="Email"
          className="rounded-full border border-border/70 bg-card/60 p-2.5 transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="mb-2 text-sm">
        Built with care using{" "}
        <span className="font-medium text-foreground">Next.js</span>,{" "}
        <span className="font-medium text-foreground">TypeScript</span> &{" "}
        <span className="font-medium text-foreground">Tailwind CSS</span>
      </div>

      <div className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Akshit Suthar. All rights reserved.
      </div>
    </footer>
  );
}
