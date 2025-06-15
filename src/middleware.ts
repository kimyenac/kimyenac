import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 포트폴리오 작업 마무리 전까지 메인 페이지 로드 시 tech 페이지로 리다이렉트
 * */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return undefined;

  return NextResponse.redirect(new URL("/tech", request.url));
}
