import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
export default function Post({
  title,
  author,
  content,
  file_url = null,
  posted_at,
}) {
  const maxLength = 100;

  const truncateFunction = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const truncatedContent = truncateFunction(content, maxLength);
  return (
    <div className="bg-white shadow-md md:min-w-[600px] xl:min-w-[820px]  min-w-[300px] rounded-lg w-full flex items-center flex-col">
      <div className="text-wrap w-full flex flex-col gap-5 p-12">
        <div className="flex justify-between items-center gap-10 overflow-scroll">
          <div className="flex flex-col ">
            <h1 className="text-xl font-semibold text-wrap">{title}</h1>
            <p className="text-gray-500">{author}</p>
          </div>
          <p className="text-sm text-gray-500 self-end">{posted_at}</p>
        </div>
        <Separator className="w-full my-4 bg-gray-300" />
        <p className="text-gray-600">{truncatedContent}</p>
      </div>
      {file_url && file_url.length > 0
        ? file_url.map((url, index) => (
            <Image
              key={index}
              className="overflow-hidden bg-grey w-full object-contain pb-12 px-12"
              src={url}
              height={200}
              width={200}
              quality={100}
            />
          ))
        : null}
    </div>
  );
}
