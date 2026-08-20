# Nuxt and SmartSVG:tm:

Install Nuxt following the instructions at [nuxt.com](https://nuxt.com/docs/getting-started/installation).

``` shell
npx nuxi@latest init smartSVG
cd smartSVG
npm install
```

Run the dev server:

``` shell
npm run dev
```

Now navigate to [`http://localhost:3000`](http://localhost:3000) in your
browser and see the default Nuxt landing page.

## Adding SmartSVG:tm: as a Vue Component via vite

As with the [Vue sample](../Vue/), Nuxt is built on Vite, so we can use the
[Vite SVG Loader](https://www.npmjs.com/package/vite-svg-loader) to import the
SmartSVG:tm: as a component.

``` shell
npm install vite-svg-loader
```

Register the plugin in `nuxt.config.ts`:

``` typescript
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  vite: {
    plugins: [svgLoader({ svgo: false })],
  },
})
```

Place your SmartSVG:tm: file at `assets/smart.svg`. The loader strips out
`<style>` elements, so cut the `<style>` block out of the SVG and keep it
separately — we will re-add it as a scoped style on the wrapping component.

Replace `app.vue` with the following.

``` vue
<script setup lang="ts">
import SmartIcon from '~/assets/smart.svg?component'
</script>

<template>
  <main>
    <h1>SmartSVG&#8482; Nuxt Sample</h1>
    <SmartIcon />
  </main>
</template>

<style>
/* paste the <style> block that was removed from smart.svg here */
</style>
```

Reload [`http://localhost:3000`](http://localhost:3000) in your browser and
you should see the SmartSVG:tm: sample. Resize your browser window and
observe the change when the client window is smaller than 480px. Change the
settings of your operating system from light to dark mode and observe the
change of the logo.

## SmartSVG:tm: as a Static Asset

