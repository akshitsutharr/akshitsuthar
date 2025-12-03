"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Minus, Square, X, ChevronRight } from "lucide-react"

interface Command {
    command: string
    output: React.ReactNode
}

export function TerminalSection() {
    const [input, setInput] = useState("")
    const [history, setHistory] = useState<Command[]>([
        {
            command: "welcome",
            output: "Welcome to the interactive terminal! Type 'help' to see available commands."
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

        switch (trimmedCmd) {
            case "help":
                output = (
                    <div className="space-y-1 text-emerald-400">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-2 gap-2 max-w-xs ml-4">
                            <span>about</span><span>- Who am I?</span>
                            <span>skills</span><span>- My tech stack</span>
                            <span>projects</span><span>- View my work</span>
                            <span>contact</span><span>- Get in touch</span>
                            <span>clear</span><span>- Clear terminal</span>
                        </div>
                    </div>
                )
                break
            case "about":
                output = "I'm Akshit Suthar, a Computer Engineering student passionate about building full-stack applications that solve real-world problems."
                break
            case "skills":
                output = (
                    <div className="text-yellow-300">
                        <p>Frontend Development :- HTML, CSS, Tailwindcss, JavaScript, React.js, Next.js</p>
                        <p>Backend Development :- Node.js, Express.js</p>
                        <p>Databases :- MongoDB, MySQL, Supabase, SQL</p>
                        <p>Programming Language :- JavaScript, Java, C++, C, Python</p>
                        <p>Tools and Platforms :- Git, Postman</p>
                    </div>
                )
                break
            case "projects":
                output = "Check out the 'Featured Projects' section above to see my latest work, including BeatShelf and QuickText!"
                break
            case "contact":
                output = "Email: itsmeakshit.005@gmail.com | Location: Mumbai, India"
                break
            case "clear":
                setHistory([])
                return
            case "":
                output = ""
                break
            default:
                output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for a list of commands.</span>
        }

        setHistory(prev => [...prev, { command: cmd, output }])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleCommand(input)
        setInput("")
    }

    return (
        <section className="w-full space-y-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Terminal className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Interactive Terminal</h2>
            </div>

            <Card className="bg-[#1e1e1e] border-slate-800 overflow-hidden shadow-2xl font-mono text-sm md:text-base">
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400 text-xs">Akshit@portfolio:~</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Minus className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                        <Square className="w-3 h-3 text-slate-400 hover:text-white cursor-pointer" />
                        <X className="w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer" />
                    </div>
                </div>

                <CardContent className="p-4 h-[300px] overflow-y-auto custom-scrollbar" onClick={() => inputRef.current?.focus()}>
                    <div className="space-y-2">
                        {history.map((entry, i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="text-green-400">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span>{entry.command}</span>
                                </div>
                                <div className="ml-5 text-slate-200 leading-relaxed">
                                    {entry.output}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
                        <span className="text-green-400">➜</span>
                        <span className="text-blue-400">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-none outline-none text-slate-100 flex-1 focus:ring-0 p-0"
                            autoFocus
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
