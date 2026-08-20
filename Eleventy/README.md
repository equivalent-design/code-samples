# Eleventy and SmartSVG:tm:

Install Eleventy following the instructions at [11ty.dev](https://www.11ty.dev/docs/getting-started/).

``` shell
mkdir smartSVG
cd smartSVG
npm init -y
npm install --save-dev @11ty/eleventy
```

## Eleventy and Inline SVG

Eleventy's default Markdown engine (markdown-it) passes raw HTML straight
through, so no extra configuration is required. Simply copy the SmartSVG:tm:
as inline into your markdown file.

``` markdown
---
layout: base.njk
title: In-line in Markdown
---
# SVG as Include in HTML.

<svg
....
</svg>
```

Put the markdown file anywhere in your project (e.g. the project root) and serve the page with

``` shell
npx @11ty/eleventy --serve
```

As an example copy the example file
[equivalent.md](https://github.com/equivalent-design/code-samples/tree/main/Eleventy/equivalent.md)
into your `smartSVG` directory and serve the page. Direct your browser to
[http://localhost:8080/equivalent/] and observe the embedded smart SVG.

Alternatively have a look at the page [here](./equivalent.html).

## SmartSVG:tm: as Asset

