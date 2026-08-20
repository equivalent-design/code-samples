# Jekyll and SmartSVG:tm:

Install Jekyll following the instructions at [jekyllrb.com](https://jekyllrb.com/).

``` shell
gem install jekyll bundler
jekyll new smartSVG
cd smartSVG
```

## Jekyll and Inline SVG

Simply copy the SmartSVG:tm: as inline into your markdown file.

``` markdown
---
layout: default
title: In-line in Markdoown
---
# SVG as Include in HTRML.

{::nomarkdown}
<svg 
....
</svg>

{:/}
```

Put the markdown file into your document structure and serve the page with

``` shell
bundle exec jekyll serve
```

As an example copy the example file
[equivalent.md](https://github.com/equivalent-design/code-samples/tree/main/Jekyll/equivalent.md)
into you `smartSVG` directory and serve the page. Direct your browser to
[http://localhost:4000/equivalent/] and observe the embedded smart SVG.

Alternatively have a look at the page [here](./equivalent.html).

## SmartSVG:tm: as Asset

Rather than inlining the markup, you can also serve the SmartSVG:tm: as a
plain file. Jekyll copies any file it doesn't otherwise process — everything
outside `_`-prefixed directories — straight into `_site`, so place
[`smart.svg`](./smart.svg) in an `assets` folder and reference it with a
normal image tag, using Liquid's `relative_url` filter so the link keeps
working if `baseurl` is set:

``` markdown
![Equivalent]({{ '/assets/smart.svg' | relative_url }})
```

This is much simpler — no `nomarkdown` block required — but note two
differences from the inline version. The `<title>` inside the SVG is no
longer exposed to assistive technology once the browser treats it as an
opaque image, so give the Markdown image its own descriptive text as shown
above. And any `@media (max-width: ...)` breakpoint inside the SVG now
tracks the rendered size of the `<img>` element itself rather than the
page's viewport, since a linked SVG image gets its own independent
viewport. The `prefers-color-scheme` and `forced-colors` handling keep
working exactly as before, since that logic lives entirely inside the SVG
file itself.

