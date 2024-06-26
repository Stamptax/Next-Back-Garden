"use server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/client";
export async function createPost(title: string, content: string) {
  const { error } = await supabase.from("posts").insert({ title, content });
  if (error) {
    console.error("Create post error:", error.message);
    return false;
  }
  revalidatePath("/my-chilling-corner");
  return true;
}
