import { supabase } from "@/lib/client";
export async function fetchAPost(postId: string) {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("id", postId);
  return data;
}
