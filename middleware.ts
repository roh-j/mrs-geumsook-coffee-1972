import { bindCookieToPocketBase } from "./app/lib/backend";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  // Request Header 정보에 있는 Cookie (인증 토큰)를  PocketBase에 바인딩
  bindCookieToPocketBase(request);

  return response;
};
