# OpenClaw Card Taste

These are hard taste constraints for OpenClaw cards.

## Core Principle

The whole trick is refusing to improvise. If the task is "make an OpenClaw card", do not invent a new visual language.

## Palette

For the `Technology / Engineering` theme, use only:

- Background: `#F5F7FA`
- Accent: `#3D5A80`

Neutral text and utility rules may use shades derived from this pair, but the card should still read as part of the same palette system.

## Template Semantics

### `p.dropcap`

Use this for the opening paragraph. It sets the entry into the piece and must work visually with a large first letter.

Requirements:

- Do not make it too long.
- Avoid starting with quotation marks, dashes, digits, or awkward abbreviations when possible.
- The first letter should feel visually strong.

### `div.item > p.label`

This is the base list pattern.

Requirements:

- Each `item` should contain one idea.
- `label` should stay short, usually `01`, `02`, `03`, `04`.
- Keep the item copy dense. No nested subheads inside the item text.

### `p.highlight`

This is not just a quote. It is the anchor insight of the card.

Requirements:

- It must be strong enough to stand on its own.
- It uses the accent vertical rule on the left.
- Do not turn analytical source material into marketing copy.

## Composition

- Air matters more than decoration.
- Hierarchy comes from typography, spacing, and a single accent rule.
- Do not add icons, pills, badges, buttons, or illustrations unless the user explicitly asks for them.

## Rendering

The original rendering flow is:

- `capture.js`
- viewport: `1080x800`
- `fullPage: true`

Do not change those parameters unless the user explicitly asks for it.
