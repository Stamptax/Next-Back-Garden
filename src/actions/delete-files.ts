import { supabase } from "@/lib/client";

export async function deleteFiles(fileUrls: string | string[]) {
  const urls = Array.isArray(fileUrls) ? fileUrls : [fileUrls];

  const filePaths = urls.map((url) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
  });
  const targetPaths = filePaths.map((url) => "public/" + url);
  console.log("Extracted filePaths:", targetPaths);
  const { data, error } = await supabase.storage
    .from("post_files")
    .remove(targetPaths);

  if (error) {
    console.error("Error deleting files:", error);
    throw error;
  }

  return data;
}
