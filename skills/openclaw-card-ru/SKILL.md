---
name: openclaw-card-ru
description: Generate OpenClaw-style visual cards in Russian using the same fixed HTML template, LJG taste constraints, IT palette, and deterministic capture flow as openclaw-card. Use when the card copy itself should be in Russian.
---

# OpenClaw Card RU

Делай русскоязычные карточки в стиле OpenClaw. Визуальные правила те же, что и у основного навыка `openclaw-card`: никакой самодеятельности, только шаблон и taste-ограничения.

## Что использовать

Используй общие ресурсы основного skill:

- `../openclaw-card/assets/card-template.html`
- `../openclaw-card/references/taste.md`
- `../openclaw-card/scripts/capture.js`

Если skill установлен как отдельный репозиторий, соответствующие пути от корня репозитория:

- `skills/openclaw-card/assets/card-template.html`
- `skills/openclaw-card/references/taste.md`
- `skills/openclaw-card/scripts/capture.js`

## Что меняется относительно базового skill

- Весь текст карточки должен быть на русском.
- `title`, `dropcap`, `items`, `highlight`, `footer` пиши на русском.
- Соблюдай ту же структуру, палитру и правила рендера.

## Рабочий процесс

1. Выдели короткий русский заголовок, лид-абзац, 2-4 пункта и один сильный инсайт.
2. Заполни HTML-шаблон.
3. Сохрани HTML рядом с артефактами результата.
4. Запусти рендер:

```bash
node skills/openclaw-card/scripts/capture.js /absolute/path/to/card.html /absolute/path/to/card.png
```

## Формат финального ответа

Если PNG успешно создан, верни:

```text
MEDIA:${HOME}/.openclaw/workspace/media/{name}.png
```

Перед возвратом ответа сохрани PNG именно в `${HOME}/.openclaw/workspace/media/{name}.png`.
