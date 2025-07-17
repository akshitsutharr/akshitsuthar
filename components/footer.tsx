import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-6 text-center text-sm text-muted-foreground">
      {/* Icons */}
      <div className="mb-3 flex justify-center gap-6">
        <a
          href="https://github.com/akshitsutharr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition hover:text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshit-suthar-312407314"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition hover:text-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:itsmeakshit.005@gmail.com"
          aria-label="Email"
          className="transition hover:text-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Built with */}
      <div className="mb-1">
        Built with <span role="img" aria-label="love">❤️</span> using{" "}
        <span className="font-medium text-foreground">Next.js</span>,{" "}
        <span className="font-medium text-foreground">TypeScript</span> &{" "}
        <span className="font-medium text-foreground">Tailwind CSS</span>
      </div>

      {/* Copyright */}
      <div className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Akshit Suthar. All rights reserved.
      </div>
    </footer>
  );
}
