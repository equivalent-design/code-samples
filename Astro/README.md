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

``` astro
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

