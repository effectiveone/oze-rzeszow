# OZE Rzeszów

**Bold News Portal** — głęboki granat + pomarańcz, agresywny layout newsowy.

Portal o odnawialnych źródłach energii w Rzeszowie i na Podkarpaciu.

## Stack

- Gatsby 5
- React 18
- gatsby-transformer-remark (Markdown)
- gatsby-plugin-react-helmet

## Uruchomienie

```bash
npm install
npm run develop
```

## Deploy (Cloudflare Pages)

- Build command: `gatsby build`
- Output: `public/`
- Node: 18

## Struktura treści

Artykuły Markdown umieszczaj w `content/blog/` z frontmatterem:

```yaml
---
title: "Tytuł artykułu"
date: "2024-01-15"
description: "Krótki opis"
author: "Autor"
tags: ["fotowoltaika", "rzeszów"]
---
```

## Partner

[ecoaudyt.app](https://ecoaudyt.app) — audyty energetyczne
