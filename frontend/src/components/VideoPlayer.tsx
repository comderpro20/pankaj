"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  youtubeVideoId: string;
}

export default function VideoPlayer({ youtubeVideoId }: VideoPlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        className="w-full h-full rounded-md"
        src={embedUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}