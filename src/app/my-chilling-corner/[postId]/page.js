"use client";
import { useParams } from "next/navigation";
export default function DetailedPost() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Post {postId}</h1>
    </div>
  );
}
