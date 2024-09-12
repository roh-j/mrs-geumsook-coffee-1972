import { internalPB } from "../shared/connection";

const bindCookieToPocketBase = async (request: any) => {
  internalPB.authStore.loadFromCookie(request?.headers?.get("cookie") || "");

  try {
    internalPB.authStore.isValid &&
      (await internalPB.collection("users").authRefresh());
  } catch (_) {
    internalPB.authStore.clear();
  }
};

export { bindCookieToPocketBase };
