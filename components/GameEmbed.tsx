'use client'

import { useRef, useState, useEffect } from 'react'
import { Html5Game } from '@/lib/html5-games'

interface GameEmbedProps {
  game: Html5Game
}

export default function GameEmbed({ game }: GameEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    if (!iframeRef.current) return
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  return (
    <div className="relative w-full">
      {/* Game Container */}
      <div className="relative aspect-video bg-void rounded-xl overflow-hidden border border-border shadow-2xl">
        <iframe
          ref={iframeRef}
          src={game.gameUrl}
          className="w-full h-full"
          allow="fullscreen; gamepad; pointer-lock; webxr"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
          loading="lazy"
          title={`Play ${game.name} - Free Online HTML5 ${game.category} Game`}
        />
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-3 text-sm text-text-muted">
          {game.controls && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="font-mono text-xs hidden sm:inline">{game.controls}</span>
            </span>
          )}
        </div>

        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-2 px-3 py-1.5 bg-surface hover:bg-border border border-border rounded-lg text-sm text-text-primary transition-colors"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
              Exit
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Fullscreen
            </>
          )}
        </button>
      </div>
    </div>
  )
}
