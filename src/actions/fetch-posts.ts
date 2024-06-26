"use server";
import { supabase } from "@/lib/client";
export async function fetchPosts() {
  const { data, error } = await supabase.from("posts").select();
  if (data) {
    return data;
  }
  if (error) {
    console.error("error", error);
    return;
  }
}
