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

Alternatively have a look at the page [here](./equivalent.html).

## SmartSVG:tm: as Asset

