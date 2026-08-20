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

``` svelte
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

