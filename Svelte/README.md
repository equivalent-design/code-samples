# Svelte and SmartSVG:tm:

Start a new Svelte project using Vite, following the instructions at
[svelte.dev](https://svelte.dev/docs/svelte/getting-started).

``` shell
npm create vite@latest smartSVG -- --template svelte-ts
cd smartSVG
npm install
npm run dev
```

Now navigate to [`http://localhost:5173`](http://localhost:5173) in your
browser and see the default Svelte landing page.

## Adding SmartSVG:tm: as Inline SVG in Svelte

Unlike Vue, Svelte does not require a special loader to inline an SVG —
markup pasted directly into the component's template is compiled as-is.
The only wrinkle is that Svelte treats any `<style>` tag as the component's
single top-level style block, so cut the `<style>` element out of the
SmartSVG:tm: markup and move it to the bottom of the file as the component's
own `<style>` block; the selectors keep matching since they target the same
ids and classes used in the markup above.

Replace `src/App.svelte` with the following.

``` html
<h1>SmartSVG&#8482; Svelte Sample</h1>
<svg id="DemoSVG" ...>
....
</svg>

<style>
  /* paste the <style> block that was removed from the SVG above here */
</style>
```

Reload [`http://localhost:5173`](http://localhost:5173) in your browser and
you should see the SmartSVG:tm: sample. Resize your browser window and
observe the change when the client window is smaller than 480px. Change the
settings of your operating system from light to dark mode and observe the
change of the logo.

## SmartSVG:tm: as a Static Asset

If you don't need the SVG's markup inlined into the DOM, you can skip the
style-extraction step entirely and serve it as a plain file instead. Place
[`smart.svg`](./smart.svg) in the project's `public/` folder — Vite copies
anything in `public/` to the output root unchanged, so `public/smart.svg`
is served at `/smart.svg`.

``` html
<h1>SmartSVG&#8482; Svelte Sample</h1>
<img src="/smart.svg" alt="Equivalent" />
```

This is the simplest option, but note two differences from the inline
version. First, the internal `<title>` is no longer exposed to assistive
technology because the browser treats the file as an opaque image, so supply
your own `alt` text as shown above. Second, any `@media (max-width: ...)`
breakpoint inside the SVG now tracks the rendered size of the `<img>`
element itself rather than the page's viewport, since a linked SVG image
gets its own independent viewport — which is actually convenient here, since
it makes the logo responsive to its own box instead of the whole page. The
`prefers-color-scheme` and `forced-colors` handling keep working exactly as
before, since that logic lives entirely inside the SVG file itself.
