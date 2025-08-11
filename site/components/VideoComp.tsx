"use client"

import { on } from "events"
import { Play } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

interface VideoProps {
  title: string
  description: string
  videoPlaceholder: string
  YTVideoID?: string
}

export const Video = ({
  title,
  description,
  videoPlaceholder,
  YTVideoID = "bHQqvYy5KYo" // Default video ID, 2011 Google I/O Keynote for iFrame
}: VideoProps) => {
  const iframeRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  const [isPlaying, setIsPlaying] = useState(false)

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && isPlaying) return

    handleIframeLoad()
  }, [])

  function handleIframeLoad() {

    if (!isPlaying) {
      console.log(isPlaying)
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
    }
  }

  // Create player after API is ready
  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: YTVideoID,
        playerVars: {
          'controls': 0,
          'rel': 0,
          'cc_load_policy': 1
        },
        events: {
          onReady: () => { },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true)
            } else {
              setIsPlaying(false)
            }
          },
        },
      })
    }
    // If API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady()
    }
  }, [])

  const handlePlay = () => {
    if (playerRef.current != null && playerRef.current.playVideo) {
      console.log(playerRef.current)
      playerRef.current.playVideo()
      setIsPlaying(true)
    }
  }



  return (

    <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
      <Image
        src={videoPlaceholder || "/placeholder.svg"}
        alt="Video thumbnail"
        fill
        style={{ objectFit: "cover" }}
        className="opacity-80"
      />
      {/* YouTube iframe container */}
      <div
        id="yt-player"
        ref={iframeRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      />
      {/* Play Button Overlay */}
      {/* disappears when video is playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        onClick={handlePlay}
      >
        <button
          className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg"
          type="button"
        >
          <Play className="h-12 w-12 ml-1" fill="currentColor" />
        </button>
      </div>
      {/* Video Info Overlay */}
      {/* disappears when video is playing */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-30 transition-opacity duration-300 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`} onClick={handlePlay}>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}