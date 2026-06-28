"use client";

import { useState } from "react";

export default function Video({ src, poster }: { src?: string; poster?: string }) {
  const [error, setError] = useState(false);

  if (!src) return null;
  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-500 text-sm font-mono">
        Video unavailable
      </div>
    );
  }

  return (
    <video
      className="h-full w-full object-cover shadow-lg rounded-lg"
      controls
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      onError={() => setError(true)}
    >
      <source src={src} type="video/webm" />
    </video>
  );
}