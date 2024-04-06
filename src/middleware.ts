import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 포트폴리오 작업 전까진 메인 페이지 로드 시 blog 로 리다이렉트
 * */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return undefined;

  return NextResponse.redirect(new URL("/blog", request.url));
}
