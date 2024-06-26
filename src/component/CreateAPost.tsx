"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPost } from "@/actions";
import { Spinner } from "@nextui-org/react";
export default function CreateAPost() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function handleCreatePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const posted = await createPost(title, content);
    if (posted) {
      setIsLoading(false);
      setTitle("");
      setContent("");
      router.push("/my-chilling-corner");
    } else {
      alert("Failed to create post");
      setIsLoading(false);
    }
  }
  return (
    <div className="bg-white rounded-lg lg:w-[800px] md:min-w-[750px] min-w-[350px] shadow-md mb-24 p-6">
      <h2 className="text-xl font-bold mb-4">New Post</h2>
      <form onSubmit={handleCreatePost}>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <Button
            className="flex items-center justify-center gap-1"
            type="submit"
            variant="customSubmit"
          >
            {isLoading ? <Spinner size="sm" /> : null}
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
