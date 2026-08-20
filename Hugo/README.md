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

