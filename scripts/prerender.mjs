import puppeteer from "puppeteer";
import { preview } from "vite";
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const routes = [
  "/",
  "/agents-ia",
  "/developpement",
  "/ingenierie-technique",
  "/realisations",
  "/blog",
  "/blog/agents-ia-entreprise",
  "/blog/automatiser-reponse-appels-offres-ia",
  "/blog/rag-metier-documentation-technique",
  "/blog/ia-btp-2026",
  "/blog/ia-generique-secteurs-reglementes",
];

async function prerender() {
  const server = await preview({ preview: { port: 4173, host: "localhost" } });
  const port = 4173;

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${port}${route}`;
    console.log(`Prerendering ${route}...`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });

    // Wait for lazy-loaded page and Helmet to fully render
    await page.waitForSelector("h1, article, section", { timeout: 10000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 2000));

    // Clean up Helmet's head: use puppeteer to keep only the last
    // occurrence of duplicate tags (Helmet appends the correct ones last)
    let html = await page.evaluate(() => {
      const head = document.head;
      // For each tag type, keep only the last one
      const dedup = (selector) => {
        const els = [...head.querySelectorAll(selector)];
        if (els.length > 1) els.slice(0, -1).forEach((el) => el.remove());
      };
      // Force the <title> to match document.title (Helmet sets this correctly)
      const correctTitle = document.title;
      dedup("title");
      const titleEl = head.querySelector("title");
      if (titleEl && correctTitle) titleEl.textContent = correctTitle;
      dedup('link[rel="canonical"]');
      dedup('meta[name="description"]');
      dedup('meta[property="og:type"]');
      dedup('meta[property="og:title"]');
      dedup('meta[property="og:description"]');
      dedup('meta[property="og:url"]');
      dedup('meta[property="og:site_name"]');
      dedup('meta[property="og:image"]');
      dedup('meta[property="og:locale"]');
      dedup('meta[name="twitter:card"]');
      dedup('meta[name="twitter:title"]');
      dedup('meta[name="twitter:description"]');
      dedup('meta[name="twitter:image"]');
      return document.documentElement.outerHTML;
    });
    html = "<!DOCTYPE html>\n" + html;

    // Write to dist/[route]/index.html
    const outPath = route === "/"
      ? join(distDir, "index.html")
      : join(distDir, route, "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
    console.log(`  -> ${outPath.replace(distDir, "dist")}`);
  }

  await browser.close();
  server.httpServer.close();
  console.log(`\nPrerendered ${routes.length} routes.`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
