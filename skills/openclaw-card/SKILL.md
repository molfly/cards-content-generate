---
name: openclaw-card
description: Generate OpenClaw-style visual cards from source text using a fixed HTML template, LJG taste constraints, the IT palette (#F5F7FA background, #3D5A80 accent), and a deterministic screenshot flow via capture.js at 1080x800 fullpage. Use when the user wants to create, render, or update these cards instead of freeform designing.
---

# OpenClaw Card

Create cards in the OpenClaw style. The main rule is simple: no improvisation. Follow the template and taste constraints instead of inventing a new design.

## What To Do

Do exactly four things:

1. Extract a short title, a lead paragraph, 2-4 items, and one strong highlight from the source material.
2. Fill the HTML template from `assets/card-template.html`.
3. Save the final HTML next to the output artifacts.
4. Run `scripts/capture.js` to render the PNG.

## Required Constraints

Read [references/taste.md](references/taste.md) before generating anything. It is not optional background material. It is the specification.

Do not break these rules:

- The IT/Engineering palette is fixed: `#F5F7FA` background and `#3D5A80` accent.
- Template semantics are fixed:
  - `p.dropcap` for the opening paragraph.
  - `div.item > p.label` for list blocks.
  - `p.highlight` for the insight or quote with the accent rule on the left.
- Capture the screenshot through `capture.js` with viewport `1080x800` and `fullPage`.
- Do not change composition, typographic rhythm, or CSS structure unless the user explicitly asks for it.

## Workflow

### 1. Prepare The Content

Compress the source into these blocks:

- `title`: 4-10 words.
- `dropcap`: 2-4 sentences. The opening paragraph must work well with a drop cap.
- `items`: 2-4 short idea blocks.
- `highlight`: one sentence or paragraph strong enough to stand alone.
- `footer`: optional source, tag, or short note.

If the source has no good quote, do not invent one. Use the strongest conclusion as `highlight`.

### 2. Build The HTML

Copy `assets/card-template.html` into a new HTML file and replace the placeholders. If the skill is installed as a standalone repository, resolve paths from the repo root: `skills/openclaw-card/assets/card-template.html`, `skills/openclaw-card/references/taste.md`, `skills/openclaw-card/scripts/capture.js`.

- `{{TITLE}}`
- `{{DROPCAP}}`
- `{{ITEMS}}`
- `{{HIGHLIGHT}}`
- `{{FOOTER}}`

`{{ITEMS}}` must expand into repeated blocks like this:

```html
<div class="item">
  <p class="label">01</p>
  <p>Short, dense, editorial copy without filler.</p>
</div>
```

Use two-digit numbering: `01`, `02`, `03`, `04`.

### 3. Render The PNG

Run:

```bash
node skills/openclaw-card/scripts/capture.js /absolute/path/to/card.html /absolute/path/to/card.png
```

If `node` or the headless browser dependency is missing, state that clearly. Do not replace rendering with a rough textual approximation.

## Quality Bar

- The card should read like an editorial summary, not a landing page.
- Do not allow long walls of text inside the card.
- `highlight` must reinforce the idea instead of repeating the `dropcap`.
- Item blocks should feel balanced in density.
- If the material does not compress cleanly into this structure, say so and recommend shortening the source instead of breaking the template.

## Artifacts

Expected result:

- card HTML
- card PNG

## Final Response Format

The final response must be very short.

If the PNG was created successfully, return a line in exactly this format:

```text
MEDIA:${HOME}/.openclaw/workspace/media/{name}.png
```

`{name}` is the file name without the extension.

Before returning, save the PNG to `${HOME}/.openclaw/workspace/media/{name}.png`.

If the user explicitly asked to keep the HTML artifact, you may put its path on a second line after `MEDIA:...`. Otherwise the default is to return only the `MEDIA:` path.
