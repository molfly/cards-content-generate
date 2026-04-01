#!/usr/bin/env node

const path = require("path");
const { pathToFileURL } = require("url");

async function main() {
  const [, , inputHtml, outputPng] = process.argv;

  if (!inputHtml || !outputPng) {
    console.error("Usage: node scripts/capture.js /abs/path/to/card.html /abs/path/to/card.png");
    process.exit(1);
  }

  let playwright;
  try {
    playwright = require("playwright");
  } catch (error) {
    console.error("Missing dependency: playwright");
    console.error("Install it with: npm install playwright");
    process.exit(1);
  }

  const browser = await playwright.chromium.launch({ headless: true });

  try {
    const page = await browser.newPage({
      viewport: { width: 1080, height: 800 },
      deviceScaleFactor: 1,
    });

    const inputUrl = pathToFileURL(path.resolve(inputHtml)).href;
    await page.goto(inputUrl, { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.resolve(outputPng),
      fullPage: true,
      type: "png",
    });
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
