"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Contact, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!email || !message) {
      alert('Please fill in both email and message.');
      return;
    }

    const mailtoLink = `mailto:itsmeakshit.005@gmail.com?subject=New Message from ${encodeURIComponent(
      email
    )}&body=Email: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="space-y-8">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center justify-center space-x-2 text-2xl font-bold">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Contact className="w-6 h-6 text-primary" />
            </div>
            <span>Contact Me</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="flex h-11 w-full rounded-lg border border-input/50 bg-secondary/20 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/30"
                  placeholder="your.email@example.com"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="flex min-h-[140px] w-full rounded-lg border border-input/50 bg-secondary/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/30 resize-none"
                  placeholder="Hi! I'd love to discuss a project opportunity with you..."
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                onClick={handleSend}
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5 mt-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                I typically respond within 24 hours ⚡
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
