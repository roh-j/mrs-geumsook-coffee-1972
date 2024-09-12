import { externalPB } from "../shared/connection";

const bindCookieToPocketBase = async (request: any) => {
  externalPB.authStore.loadFromCookie(request?.headers?.get("cookie") || "");

  try {
    externalPB.authStore.isValid &&
      (await externalPB.collection("users").authRefresh());
  } catch (_) {
    externalPB.authStore.clear();
  }
};

export { bindCookieToPocketBase };
