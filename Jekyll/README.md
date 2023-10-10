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

## SmartSVG:tm: as Asset


