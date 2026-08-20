# Gatsby and SmartSVG:tm:

Install Gatsby following the instructions at [gatsbyjs.com](https://www.gatsbyjs.com/docs/quick-start/).

``` shell
npx gatsby new smartSVG
cd smartSVG
```

## Adding SmartSVG:tm: as a React-SVG component

As with the [React sample](../React/), we use the [React SVG
component](https://www.npmjs.com/package/react-svg) to inline the SmartSVG:tm:
into the page, so that its embedded `prefers-color-scheme` styling keeps
working.

``` shell
npm install react-svg
```

Either insert your own SmartSVG:tm: file or use the file provided with the code
sample and place it in Gatsby's `static/` folder as `static/smart.svg` —
files there are copied to the site root as-is.

Replace `src/pages/index.js` with the following.

``` jsx
import * as React from 'react'
import { ReactSVG } from 'react-svg'

export default function IndexPage() {
  return (
    <main>
      <h1>SmartSVG&#8482; Gatsby Sample</h1>
      <ReactSVG src="/smart.svg" />
    </main>
  )
}
```

Now serve the app by running

``` shell
gatsby develop
```

If you open your web browser and go to
[`http://localhost:8000/`](http://localhost:8000/) you should see the
SmartSVG:tm: sample. Resize your browser window and observe the change when
the client window is smaller than 480px. Change the settings of your
operating system from light to dark mode and observe the change of the logo.

## SmartSVG:tm: as a Static Asset

If you don't need the SVG's markup inlined into the DOM, you can skip
`react-svg` entirely. [`smart.svg`](./smart.svg) is already in `static/`
from the section above, so just reference it with a plain `img` tag:

``` jsx
export default function IndexPage() {
  return (
    <main>
      <h1>SmartSVG&#8482; Gatsby Sample</h1>
      <img src="/smart.svg" alt="Equivalent" />
    </main>
  )
}
```

This drops the extra dependency, but note two differences from the inlined
version. The `<title>` inside the SVG is no longer exposed to assistive
technology once the browser treats it as an opaque image, so give the
`img` its own `alt` text as shown above. And any `@media (max-width: ...)`
breakpoint inside the SVG now tracks the rendered size of the `img`
element itself rather than the page's viewport, since a linked SVG image
gets its own independent viewport. The `prefers-color-scheme` and
`forced-colors` handling keep working exactly as before, since that logic
lives entirely inside the SVG file itself.
