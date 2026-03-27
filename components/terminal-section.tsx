"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Minus, Square, X } from "lucide-react"

const quickCommands = ["help", "about", "skills", "projects", "contact", "socials", "time", "clear"]

interface Command {
    command: string
    output: React.ReactNode
}

export function TerminalSection() {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<Command[]>([
        {
            command: "welcome",
            output: (
                <div className="space-y-1 text-slate-200">
                    <p>Welcome to my terminal. Type <span className="text-red-300">help</span> to explore commands.</p>
                    <p className="text-xs text-slate-400">Tip: click a command chip below for quick actions.</p>
                </div>
            )
        }
    ])
    const inputRef = useRef<HTMLInputElement>(null)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [history])

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase()
        let output: React.ReactNode = ""
        const now = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })

        switch (trimmedCmd) {
            case "help":
                output = (
                    <div className="space-y-1 text-orange-300">
                        <p>Available commands:</p>
                        <div className="grid max-w-sm grid-cols-2 gap-x-4 gap-y-1 pl-4 text-sm">
                            <span>about</span><span>- Who am I?</span>
                            <span>skills</span><span>- My tech stack</span>
                            <span>projects</span><span>- View my work</span>
                            <span>contact</span><span>- Get in touch</span>
                            <span>socials</span><span>- Github and LinkedIn</span>
                            <span>time</span><span>- Current local time</span>
                            <span>clear</span><span>- Clear terminal</span>
                        </div>
                    </div>
                )
                break
            case "about":
                output = "I'm Akshit Suthar, a Computer Engineering student focused on full-stack products, great UI, and practical developer tooling."
                break
            case "skills":
                output = (
                    <div className="space-y-1 text-orange-200">
                        <p>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</p>
                        <p>Backend: Node.js, Express.js</p>
                        <p>Databases: MongoDB, MySQL, Supabase, SQL</p>
                        <p>Languages: JavaScript, Java, C++, C, Python</p>
                        <p>Tooling: Git, Postman, Vercel</p>
                    </div>
                )
                break
            case "projects":
                output = "Check out the 'Featured Projects' section above to see my latest work, including BeatShelf and QuickText!"
                break
            case "contact":
                output = "Email: itsmeakshit.005@gmail.com | Location: Mumbai, India"
                break
            case "socials":
                output = (
                    <div className="space-y-1 text-slate-200">
                        <p>GitHub: github.com/akshitsutharr</p>
                        <p>LinkedIn: linkedin.com/in/akshit-suthar-312407314</p>
                    </div>
                )
                break
            case "time":
                output = `Current local time: ${now}`
                break
            case "clear":
                setHistory([])
                return
            case "":
                output = ""
                break
            default:
                output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' to see supported commands.</span>
        }

        setHistory(prev => [...prev, { command: cmd, output }])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleCommand(input)
        setInput("")
    }

    return (
        <section id="terminal" className="w-full space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Terminal className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Interactive Terminal</h2>
            </div>

            <div className="flex flex-wrap gap-2">
                {quickCommands.map((command) => (
                    <button
                        key={command}
                        type="button"
                        onClick={() => handleCommand(command)}
                        className="rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                    >
                        {command}
                    </button>
                ))}
            </div>

            <Card className="section-shell overflow-hidden border-red-500/30 bg-[#090909] font-mono text-sm shadow-2xl md:text-base">
                <div className="flex items-center justify-between border-b border-red-400/25 bg-[#141414] px-4 py-2">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-red-300" />
                        <span className="text-xs text-red-200">Akshit@portfolio:~</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Minus className="w-4 h-4 cursor-pointer text-slate-400 hover:text-white" />
                        <Square className="w-3 h-3 cursor-pointer text-slate-400 hover:text-white" />
                        <X className="w-4 h-4 cursor-pointer text-slate-400 hover:text-red-500" />
                    </div>
                </div>

                <CardContent className="custom-scrollbar h-[340px] overflow-y-auto p-4" onClick={() => inputRef.current?.focus()}>
                    <div className="space-y-2">
                        {history.map((entry, i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="text-orange-300">➜</span>
                                    <span className="text-red-300">~</span>
                                    <span className="text-slate-200">{entry.command}</span>
                                </div>
                                <div className="ml-5 leading-relaxed text-slate-300">
                                    {entry.output}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2 border-t border-red-400/20 pt-3">
                        <span className="text-orange-300">➜</span>
                        <span className="text-red-300">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border-none bg-transparent p-0 text-slate-100 outline-none placeholder:text-slate-500 focus:ring-0"
                            placeholder="Type a command..."
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </form>
                    <div ref={bottomRef} />
                </CardContent>
            </Card>
        </section>
    )
}
