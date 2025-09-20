"use client"; // This is a Client Component. Its only job is to display things.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ThumbsUp } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

// We define a type for the video data for safety
type Video = {
  _id: string;
  youtubeVideoId: string;
  title: string;
  description: string;
  category: string;
  views: number;
  likes: number;
  createdAt: string;
};

// This component receives the fully-loaded video data as a prop
export default function VideoPageClient({ video }: { video: Video }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <VideoPlayer youtubeVideoId={video.youtubeVideoId} />
      
      <div className="space-y-4 mt-6">
        <h1 className="text-3xl font-bold">{video.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          {video.category && <Badge>{video.category}</Badge>}
          <div className="flex items-center gap-2"><Eye className="w-5 h-5" /><span>{(video.views).toLocaleString()} views</span></div>
          <div className="flex items-center gap-2"><ThumbsUp className="w-5 h-5" /><span>{(video.likes).toLocaleString()} likes</span></div>
          {video.createdAt && <span>{new Date(video.createdAt).toLocaleDateString()}</span>}
        </div>
        
        <Card>
          <CardHeader><CardTitle>Description</CardTitle></CardHeader>
          <CardContent><p className="whitespace-pre-wrap">{video.description}</p></CardContent>
        </Card>
      </div>
    </div>
  );
}