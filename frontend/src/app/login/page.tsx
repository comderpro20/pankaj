// src/app/login/page.tsx

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">VidStream</h1>
            <p className="text-muted-foreground">Log in to continue.</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}