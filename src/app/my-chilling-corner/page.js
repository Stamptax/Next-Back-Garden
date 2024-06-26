import NavBar from "../../component/NavBar";
import Post from "../../component/Post";
import { fetchPosts } from "@/actions";
import dynamic from "next/dynamic";
import Link from "next/link";
const SakanaWidget = dynamic(() => import("@/component/Sakana"), {
  ssr: false,
});
import { revalidatePath } from "next/cache";
export default async function MyChillingCorner() {
  const response = await fetchPosts();
  const posts = response.map((post) => ({
    ...post,
    posted_at: new Date(post.created_at).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  }));
  setInterval(() => {
    revalidatePath("/my-chilling-corner");
  }, 10000);
  return (
    <div className="flex flex-col items-center bg-lime-50 min-h-lvh relative">
      <NavBar />
      <div className="md:mt-[60px] mt-[30px] w-1/2 max-w-screen-xl items-center flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            className="pb-12"
            key={post.id}
            href={`my-chilling-corner/${post.id}`}
          >
            <Post
              key={post.id}
              author={post.author}
              title={post.title}
              content={post.content}
              file_url={post.file_url}
              posted_at={post.posted_at}
            />
          </Link>
        ))}
      </div>
      <SakanaWidget />
    </div>
  );
}
