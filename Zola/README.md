# Zola and SmartSVG:tm:

Install Zola following the instructions at [getzola.org](https://www.getzola.org/documentation/getting-started/installation/).

``` shell
zola init smartSVG
cd smartSVG
```

Answer the setup prompts with the defaults (base URL, sass compilation,
syntax highlighting, search index all off is fine for this sample).

## Zola and Inline SVG

Zola's Markdown renderer (pulldown-cmark) passes raw HTML straight through,
so no extra configuration is required. Simply copy the SmartSVG:tm: as inline
into your content file.

``` markdown
+++
title = "In-line in Markdown"
+++
# SVG as Include in HTML.

<svg
....
</svg>
```

Zola requires a template for every page. Add a minimal one at
`templates/page.html`:

``` html
<!DOCTYPE html>
<html>
  <body>
    <h1>{{ page.title }}</h1>
    {{ page.content | safe }}
  </body>
</html>
```

Put the content file into your `content` directory and serve the site with

``` shell
zola serve
```

As an example copy the example file
[equivalent.md](https://github.com/equivalent-design/code-samples/tree/main/Zola/equivalent.md)
into your `smartSVG/content` directory and serve the page. Direct your browser to
[http://127.0.0.1:1111/equivalent/] and observe the embedded smart SVG.

## SmartSVG:tm: as Asset

Rather than inlining the markup, you can also serve the SmartSVG:tm: as a
plain file. Place [`smart.svg`](./smart.svg) in a `static/` folder at the
project root, alongside `content/` — Zola copies it to the site root
unchanged — and reference it with standard Markdown image syntax:

``` markdown
![Equivalent](/smart.svg)
```

This is simpler than the inline version, and doesn't need the
`templates/page.html` change above either since it's the same page
template either way. But note two differences from inlining. The `<title>`
inside the SVG is no longer exposed to assistive technology once the
browser treats it as an opaque image, so give the Markdown image its own
descriptive text as shown above. And any `@media (max-width: ...)`
breakpoint inside the SVG now tracks the rendered size of the `<img>`
element itself rather than the page's viewport, since a linked SVG image
gets its own independent viewport. The `prefers-color-scheme` and
`forced-colors` handling keep working exactly as before, since that logic
lives entirely inside the SVG file itself.
