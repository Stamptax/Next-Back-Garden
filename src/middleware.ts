import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const verify = request.cookies.get("Gardener");
  const url = request.url;
  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("https://next-back-garden.vercel.app/");
  }
}
