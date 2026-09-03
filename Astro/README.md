# Astro and SmartSVG:tm:

Install Astro following the instructions at [astro.build](https://docs.astro.build/en/install-and-setup/).

``` shell
npm create astro@latest -- smartSVG
cd smartSVG
```

Accept the defaults (empty template, TypeScript strict, install dependencies) when prompted.

## Astro and Inline SVG

Astro ships zero JavaScript by default and `.astro` component templates
accept raw HTML directly, so no library is required — simply paste the
SmartSVG:tm: markup straight into the template.

```html
---
---
<html lang="en">
  <body>
    <h1>SmartSVG&#8482; Astro Sample</h1>
    <svg
    ....
    </svg>
  </body>
</html>
```

Put the component into your `src/pages` directory and serve the site with

``` shell
npm run dev
```

As an example copy the example file
[index.astro](https://github.com/equivalent-design/code-samples/tree/main/Astro/index.astro)
into your `smartSVG/src/pages` directory, replacing the generated one, and serve the page.
Direct your browser to [http://localhost:4321/] and observe the embedded smart SVG.

Alternatively have a look at the page [here](./equivalent.html).

## SmartSVG:tm: as Asset

Rather than inlining the markup, you can also serve the SmartSVG:tm: as a
plain file. Place [`smart.svg`](./smart.svg) in the `public/` folder —
everything there is copied to the site root unchanged — and reference it
with a plain `img` tag in the template:

``` html
<img src="/smart.svg" alt="Equivalent" />
```

This is simpler than the inline version, and needs no build-time
processing (unlike Astro's `astro:assets` `Image` component, which is
meant for raster images, not for preserving hand-authored SVG markup). But
note two differences from inlining. The `<title>` inside the SVG is no
longer exposed to assistive technology once the browser treats it as an
opaque image, so give the `img` its own `alt` text as shown above. And any
`@media (max-width: ...)` breakpoint inside the SVG now tracks the
rendered size of the `img` element itself rather than the page's viewport,
since a linked SVG image gets its own independent viewport. The
`prefers-color-scheme` and `forced-colors` handling keep working exactly
as before, since that logic lives entirely inside the SVG file itself.
