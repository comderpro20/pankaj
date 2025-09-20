// src/app/page.tsx

import AuthStatus from "@/components/AuthStatus";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight">VidStream</h1>
        <p className="text-muted-foreground mt-2">The best place to share and watch videos.</p>
      </div>
      
      <AuthStatus />

    </main>
  );
}