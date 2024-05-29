import { pb } from "../shared/connection";

const bindCookieToPocketBase = async (request: any) => {
  pb.authStore.loadFromCookie(request?.headers?.get("cookie") || "");

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }
};

export { bindCookieToPocketBase };
