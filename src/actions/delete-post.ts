import { supabase } from "@/lib/client";
export async function deletePost(postId: string) {
  const response = await supabase.from("posts").delete().eq("id", postId);
  if (response.error) {
    throw response.error;
  }
}
