import { supabase } from "@/lib/client";
import NavBar from "@/component/NavBar";
import { Separator } from "@/components/ui/separator";
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
    <div className="flex flex-col items-center bg-lime-50 min-h-dvh gap-10">
      <NavBar />
      <div className="text-wrap w-2/3 max-w-screen-lg flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl font-extrabold">{thePost.title}</h1>
        <div className="flex items-end justify-between ">
          <span className="text-emerald-700">{thePost.author}</span>
          <span className="text-gray-500">{thePost.posted_at}</span>
        </div>
        <Separator className="bg-[#d7e3bc]" />
      </div>
      <article className="text-wrap w-2/3 max-w-screen-lg">
        <p className="text-gray-700 ">{thePost.content}</p>
      </article>
    </div>
  );
}
