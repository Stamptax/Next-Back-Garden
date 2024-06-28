"use client";
import { Button } from "@/components/ui/button";
import { fetchPosts } from "@/actions";
import { fetchAPost } from "@/actions";
import { deletePost } from "@/actions/delete-post";
import { deleteFiles } from "@/actions/delete-files";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function PostManagement() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetchPosts();
      const formattedPosts = response.map((post) => ({
        ...post,
        created_at: new Date(post.created_at).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
      }));
      setPosts(formattedPosts);
    }
    loadPosts();
  }, []);

  const handleDeletePost = async (id) => {
    const post = await fetchAPost(id);
    if (post[0].file_url) {
      await deleteFiles(post[0].file_url);
    }
    await deletePost(id);
    router.refresh();
    setPosts(posts.filter((post) => post.id !== id));
  };
  return (
    <div className="bg-white rounded-lg lg:w-[800px] md:min-w-[750px] min-w-[350px] shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">All Posts</h2>
      <div className=" overflow-y-scroll max-h-[350px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Content</th>
              <th className="py-2 px-4 text-right">Operations</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="py-2 px-4">{post.title}</td>
                <td className="py-2 px-4">{post.content}</td>
                <td className="py-2 px-4 flex flex-col md:flex-row text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FilePenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
