import { pb } from "../shared/connection";

/**
 * Request Header에 있는 쿠키(인증 토큰)를 pb 인스턴스에 바인딩
 */
const initPocketBase = async (request: any) => {
  pb.authStore.loadFromCookie(request?.headers?.get("cookie") || "");

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }
};

export { initPocketBase };
