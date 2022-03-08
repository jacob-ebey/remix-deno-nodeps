import * as React from "https://esm.sh/react?pin=v59";
import { json } from "https://esm.sh/@remix-run/server-runtime?pin=v59";

import {
  commitSession,
  destroySession,
  getSession,
} from "../session.server.ts";

export let loader = async ({ request }: any) => {
  let session = await getSession(request.headers.get("Cookie"));
  console.log({ existing: session.get("ROFL") });
  session.set("ROFL", "COPTER");
  return json(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function Index() {
  let [state, setState] = React.useState("first");
  React.useEffect(() => {
    setState("second");
  }, []);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix {state}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
