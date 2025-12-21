import { NextResponse } from "next/server";

// Frontend-only: Auth callback disabled (backend removed)
export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  // Redirect to home page since auth is disabled
  return NextResponse.redirect(`${origin}/`);
}
