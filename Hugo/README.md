# Hugo and SmartSVG:tm:

Install Hugo following the instructions at [gohugo.io](https://gohugo.io/installation/).

``` shell
hugo new site smartSVG
cd smartSVG
```

## Hugo and Inline SVG

Hugo's default Markdown renderer (Goldmark) strips raw HTML for security
reasons, so you first need to allow it to pass through untouched. Add the
following to your `hugo.toml`:

``` toml
[markup.goldmark.renderer]
  unsafe = true
```

Simply copy the SmartSVG:tm: as inline into your content file.

``` markdown
---
title: "In-line in Markdown"
---
# SVG as Include in HTML.

<svg
....
</svg>
```

Put the content file into your `content` directory and serve the site with

``` shell
hugo server
```

As an example copy the example file
[equivalent.md](https://github.com/equivalent-design/code-samples/tree/main/Hugo/equivalent.md)
into your `smartSVG/content` directory and serve the page. Direct your browser to
[http://localhost:1313/equivalent/] and observe the embedded smart SVG.

Alternatively have a look at the page [here](./equivalent.html).

## SmartSVG:tm: as Asset

Rather than inlining the markup, you can also serve the SmartSVG:tm: as a
plain file. Place [`smart.svg`](./smart.svg) in Hugo's `static/` folder —
everything there is copied to the site root unchanged — and reference it
with standard Markdown image syntax:

``` markdown
![Equivalent](/smart.svg)
```

Note that this doesn't need the `unsafe = true` Goldmark setting from
above, since Markdown's own image syntax (rather than raw HTML) is enough
here. It's also simpler, but note two differences from the inline version.
The `<title>` inside the SVG is no longer exposed to assistive technology
once the browser treats it as an opaque image, so give the Markdown image
its own descriptive text as shown above. And any `@media (max-width: ...)`
breakpoint inside the SVG now tracks the rendered size of the `<img>`
element itself rather than the page's viewport, since a linked SVG image
gets its own independent viewport. The `prefers-color-scheme` and
`forced-colors` handling keep working exactly as before, since that logic
lives entirely inside the SVG file itself.
