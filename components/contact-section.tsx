"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail,Contact } from "lucide-react";
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
      <Card className="border-border/85">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
            <Mail className="h-6 w-6" />
            <Contact className="w-5 h-5 text-primary mr-1" />
            <span>Contact Me </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="your.email@example.com"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Hi! I'd love to discuss a project opportunity with you..."
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleSend}
              >
                Send Message 🚀
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                I typically respond within 24 hours ⚡
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
