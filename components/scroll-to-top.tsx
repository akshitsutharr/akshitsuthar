"use client"

import { useLayoutEffect, useEffect } from "react"

export function ScrollToTop() {
  // Use useLayoutEffect to run BEFORE paint
  useLayoutEffect(() => {
    // Disable scroll restoration immediately
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Extra safety measure with useEffect
  useEffect(() => {
    // Reset scroll on mount
    window.scrollTo(0, 0)
    
    // Handle route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return null
}