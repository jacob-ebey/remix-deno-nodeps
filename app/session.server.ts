import { createCookieSessionStorage } from "https://esm.sh/@remix-run/server-runtime?pin=v59";

export let { commitSession, destroySession, getSession } =
  createCookieSessionStorage({
    cookie: {
      path: "/",
      secrets: ["ROFL"],
      httpOnly: true,
    },
  });
