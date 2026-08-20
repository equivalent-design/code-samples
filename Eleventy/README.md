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

Rather than inlining the markup, you can also serve the SmartSVG:tm: as a
plain file. Unlike Hugo or Zola, Eleventy doesn't copy arbitrary files to
the output by default — only recognized templates get processed — so add a
passthrough copy for [`smart.svg`](./smart.svg) in `.eleventy.js`:

``` javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("smart.svg");
};
```

Then reference it with standard Markdown image syntax:

``` markdown
![Equivalent](/smart.svg)
```

This is simpler than the inline version, but note two differences. The
`<title>` inside the SVG is no longer exposed to assistive technology once
the browser treats it as an opaque image, so give the Markdown image its
own descriptive text as shown above. And any `@media (max-width: ...)`
breakpoint inside the SVG now tracks the rendered size of the `<img>`
element itself rather than the page's viewport, since a linked SVG image
gets its own independent viewport. The `prefers-color-scheme` and
`forced-colors` handling keep working exactly as before, since that logic
lives entirely inside the SVG file itself.
