# Vue.js and SmartSVG:tm:

## The Standard Sample

Start a new `vue.js` project.

``` shell
npm create vue@latest
```

Here are our selected settings:

```shell
✔ Project name: … smartsvg-project
✔ Add TypeScript? … Yes
✔ Add JSX Support? …  Yes
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No

```

Install and run the dev server:

``` shell
  cd smartsvg-project
  npm install
  npm run dev
```

Now navigate to [`http://localhost:5173`](http://localhost:5173) in your browser and see the default
Vue.js landing page.

## Adding SmartSVG:tm: to our Angular App

Vue's philosophy is to enforce a strict separation of script, template and style
elements on its components makes it slightly less straightforward to include
SmartSVGs:tm: than in [React](../React) or [Angular](../Angular). Nevertheless
there are several ways to integrate your SmartSVG:tm: into your Vue.js app with
minimal additional work.

Inspect the result in your browser at
[`http://localhost:5173`](http://localhost:5173). Zoom or resize your browser
window and observe the change when the client window is smaller than 480px.
Change the settings of your operating system from light to dark mode and observe
the change of the logo.

### SmartSVG:tm: as Inline SVG in Vue

Vue.js can use SmartSVG:tm: files as inline SVGs. For example replace the `img`
tag in the `App.vue` file with the content of the `smart.svg` file in the
`public` folder. This will initially lead to an error, as Vue ignores tags with
side effect, such as `<script>` or `<style>` in clien components. Consequently
they we need to move the `<style>` element from our SVG into before the
`<template>` component. The SmartSVG:tm: then works as expected.




### SmartSVG:tm: as a Vue Component

Rename `smart.svg` to `smart.vue`. Add 

``` xml
<script setup lang="ts">
</script>

<template>
    <svg>
        ...
    </svg>
</template>
```

Move the Style out to the end of the file as:

``` xml

<style scoped> 
   ...
</style>
```

#### Load as icon

A special technique is to load the SmartSVG:tm: icons as a dedicated components
after changing the `.svg` extension to `.vue`.

``` JavaScript
import smartUrl from './components/icons/IconSmart.vue'
```


### Adding SmartSVG:tm: as a Vue Component via vite

When using the [Vite SVG Loader](https://www.npmjs.com/package/vite-svg-loader)
to integrate SmartSVG:tm: as a component into our app.

to integrate
SmartSVG:tm: as a component into our app.

``` shell
npm install vite-svg-loader
```

Add to `vite.config.ts`:

``` javascript
import svgLoader from 'vite-svg-loader'


svgLoader({
  svgo: false
}),

```

Add to 

``` javascript
import IconComponent from './assets/smart.svg?component'

``` tsx
    <SmartComponent />
```

Again make sure to add the `<style>` element separately before the `<template>`
as the loader will remove it!

For a similar integration using other bundlers or frameworks like `webpack` or
`nuxt.js` use the [Vue SVG Loader](https://www.npmjs.com/package/vue-svg-loader) with 

``` shell
npm install vue-svg-loader@beta
```

and see the documentation on its [github
page](https://github.com/damianstasik/vue-svg-loader) for details.
