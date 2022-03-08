import { serve } from "https://deno.land/std/http/server.ts";
import { installGlobals } from "https://esm.sh/@remix-run/deno/globals";

import { createRequestHandlerWithStaticFiles } from "./remix-deno.ts";
// @ts-ignore: provided by the build
import * as build from "@remix-run/dev/server-build";

installGlobals();

const remixHandler = createRequestHandlerWithStaticFiles({
  build,
  // @ts-expect-error: process.env.NODE_ENV is provided by Remix at compile time
  mode: process.env.NODE_ENV,
  getLoadContext: () => ({})
});

const port = Deno.env.get("PORT") || "8000";
console.log(`Listening on http://localhost:${port}`);
serve(remixHandler, { addr: `:${port}` });
