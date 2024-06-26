import { supabase } from "@/lib/client";
export default async function DetailedPost({ params }) {
  const { postId } = params;
  async function fetchThePost(postId) {
    const { data, error } = await supabase
      .from("posts")
      .select()
      .eq("id", postId)
      .single();
    if (error) {
      console.error("Error fetching post:", error);
      return null;
    }
    return data;
  }
  const response = await fetchThePost(postId);
  const thePost = {
    ...response,
    posted_at: new Date(response.created_at).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  };
  if (!response) {
    return <div>Post not found or error occurred</div>;
  }
  return (
    <div>
      <h1>{thePost.title}</h1>
      <span>{thePost.author}</span>
      <span>{thePost.posted_at}</span>
      <p>{thePost.content}</p>
    </div>
  );
}
