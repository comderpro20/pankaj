// src/app/video/[videoId]/page.tsx

import VideoPageClient from "@/components/VideoPageClient";

// This is a Server Component. Its only job is to fetch data.
const VideoPage = async ({ params }: { params: { videoId: string } }) => {
  
  try {
    // THE FIX: We use params.videoId directly in the fetch call
    // This simple change will satisfy the buggy Next.js analyzer.
    const { videoId } = await params; 
    const res = await fetch(`http://localhost:8000/api/v1/videos/${videoId}`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error("Failed to fetch video from API");
    }

    const video = await res.json();

    // If fetching succeeds, we render our Client Component with the data
    return <VideoPageClient video={video} />;

  } catch (error) {
    console.error("Fetch error on page:", error);
    // If fetching fails for any reason, we show an error message
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Could Not Load Video</h1>
        <p className="text-muted-foreground">The video may not exist, or a server error occurred.</p>
      </div>
    );
  }
};

export default VideoPage;