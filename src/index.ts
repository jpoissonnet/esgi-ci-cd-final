import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { appTemplate } from "./appTemplate";

const app = new Hono();

app.use(trimTrailingSlash());

app.get("/api/:delay?", async (c) => {
  const delay = c.req.param("delay") ?? "0";
  await new Promise((resolve) => setTimeout(resolve, +delay));

  return c.text("Blazingly fast!");
});

app.get("/:delay?", (c) => {
  const delay = c.req.param("delay") ?? "";
  return c.html(appTemplate(delay));
});

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server running at http://localhost:3000");