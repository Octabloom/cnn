"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  alt: string;
  aspectRatio?: "9/16" | "16/9" | "4/3";
  className?: string;
  label?: string;
}

export function VideoPlayer({
  src,
  poster,
  alt,
  aspectRatio = "9/16",
  className = "",
  label,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const aspectClass =
    aspectRatio === "9/16"
      ? "aspect-[9/16] max-h-[420px] sm:max-h-[440px]"
      : aspectRatio === "16/9"
      ? "aspect-video"
      : "aspect-[4/3]";

  return (
    <div className="relative group/player mx-auto flex justify-center">
      {/* Ambient Outer Halo */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#F6C915]/25 to-[#13277A]/15 rounded-[36px] blur-xl opacity-60 group-hover/player:opacity-90 transition-opacity duration-500 -z-10" />

      {/* Physical Luxury Museum Frame Chassis */}
      <div
        className={`relative rounded-[30px] overflow-hidden bg-[#071245] border-[3px] border-white shadow-[0_20px_50px_-10px_rgba(11,26,90,0.4),0_0_0_1.5px_rgba(246,201,21,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)] ${aspectClass} ${className}`}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls={hasStarted}
          playsInline
          preload="metadata"
          onEnded={handleVideoEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-cover"
        />

        {/* Play Overlay if not actively playing */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={`Play video: ${alt}`}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/25 backdrop-blur-[1.5px] transition-all duration-300 hover:bg-black/15 cursor-pointer z-10"
          >
            {/* Poster fallback under overlay when paused */}
            {!hasStarted && (
              <div className="absolute inset-0 -z-10">
                <Image
                  src={poster}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071245]/80 via-transparent to-black/20" />
              </div>
            )}

            {/* Glowing 3D Tactile Play Medallion */}
            <div className="relative flex items-center justify-center w-18 h-18 rounded-full bg-gradient-to-b from-[#FFE685] via-[#F6C915] to-[#D4A017] text-[#071245] shadow-[0_0_0_8px_rgba(246,201,21,0.35),0_12px_28px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-2px_0_rgba(168,120,15,0.6)] border border-[#FFF0A8] transition-transform duration-300 group-hover/player:scale-110">
              <Play className="w-8 h-8 fill-[#071245] ml-1 drop-shadow-sm" />
            </div>

            {/* Bottom Glassmorphic Label Badge */}
            {label && (
              <div className="absolute bottom-4 inset-x-4 text-center px-3 py-1.5 rounded-xl bg-[#071245]/90 text-white text-[11px] font-black tracking-wide backdrop-blur-md border border-[#F6C915]/50 shadow-md">
                <span className="gold-foil-text">{label}</span>
              </div>
            )}
          </button>
        )}

        {/* Floating Pause Button when playing */}
        {isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Pause video"
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/player:opacity-100 transition-opacity backdrop-blur-md border border-white/20 hover:bg-black/80"
          >
            <Pause className="w-4 h-4 fill-white" />
          </button>
        )}
      </div>
    </div>
  );
}
