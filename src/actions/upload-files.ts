"use client";
import { supabase } from "@/lib/client";
export async function uploadFiles(files: File[]) {
  const uploadedUrls: string[] = [];
  for (const file of files) {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from("post_files")
      .upload(`public/${fileName}`, file);

    if (error) {
      console.error("Upload error:", error);
      continue;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("post_files").getPublicUrl(`public/${fileName}`);

    uploadedUrls.push(publicUrl);
  }

  return uploadedUrls;
}
