"use server";
import { supabase } from "@/lib/client";
export async function login(formData: FormData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
  if (error) {
    console.error("Login error:", error.message);
    return { error: error.message };
  }
  return data;
}
