import { NextRequest, NextResponse } from "next/server";
import { initPocketBase } from "./app/lib/backend";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  initPocketBase(request);

  return response;
};
