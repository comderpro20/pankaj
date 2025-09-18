// src/app/signup/page.tsx

import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">VidStream</h1>
            <p className="text-muted-foreground">The best place to share and watch videos.</p>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}