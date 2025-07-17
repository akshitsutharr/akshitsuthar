"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Eye, Heart, MessageCircle, Rss } from "lucide-react"

// Define the structure of a blog post object from the dev.to API
interface DevToArticle {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  // page_views_count is not always returned by the API for public articles
  page_views_count?: number;
  reading_time_minutes: number;
  tag_list: string[];
}

// Main component for the Blog Section, exported as a named function
export function BlogSection() {
  const [blogs, setBlogs] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Using `tags` (plural) for multiple tags.
        const response = await fetch(
          "https://dev.to/api/articles?tags=ai,fullstack,react,python&per_page=4"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }
        const data: DevToArticle[] = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const renderBlogContent = () => {
    if (loading) {
      return <p className="text-center text-muted-foreground py-8">Fetching latest posts...</p>;
    }
    if (error) {
      return <p className="text-center text-destructive py-8">Error: {error}</p>;
    }
    if (blogs.length === 0) {
      return <p className="text-center text-muted-foreground py-8">No recent posts found matching the tags.</p>;
    }
    return (
      <div className="space-y-6">
        {blogs.map((blog) => (
          <a key={blog.id} href={blog.url} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.readable_publish_date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{blog.reading_time_minutes} min read</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{blog.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tag_list.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1" title="Views">
                          <Eye className="h-3 w-3" />
                          {/* FIX: Provide a fallback of 0 to prevent error on undefined */}
                          <span>{(blog.page_views_count || 0).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1" title="Likes">
                          <Heart className="h-3 w-3" />
                          {/* FIX: Provide a fallback of 0 */}
                          <span>{blog.public_reactions_count || 0}</span>
                        </div>
                        <div className="flex items-center space-x-1" title="Comments">
                          <MessageCircle className="h-3 w-3" />
                          {/* FIX: Provide a fallback of 0 */}
                          <span>{blog.comments_count || 0}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Rss />
          <span>Latest Blog Posts</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {renderBlogContent()}
        <div className="mt-8 text-center">
          <Button variant="outline" className="bg-transparent" onClick={() => window.open("https://dev.to/", "_blank")}>
            Explore More on dev.to
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
