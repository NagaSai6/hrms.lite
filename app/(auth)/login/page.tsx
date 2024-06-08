"use client";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ThemeMinimal } from "@supabase/auth-ui-shared";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-11/12 sm:max-w-md bg-white bg-opacity-25 backdrop-blur-lg shadow-2xl p-8 rounded-xl transform perspective-500 rotate-y-10">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "linkedin"]}
          magicLink={true}
          socialLayout="horizontal"
        />
      </div>
    </div>
  );
}
