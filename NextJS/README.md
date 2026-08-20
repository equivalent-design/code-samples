# Next.js and SmartSVG:tm:

Install Next.js following the instructions at [nextjs.org](https://nextjs.org/docs/app/getting-started/installation).

``` shell
npx create-next-app@latest smartSVG
cd smartSVG
```

Accept the defaults (App Router, TypeScript) when prompted.

## Adding SmartSVG:tm: as a React-SVG component

As with the [React sample](../React/), we use the [React SVG
component](https://www.npmjs.com/package/react-svg) to inline the SmartSVG:tm:
into the page, so that its embedded `prefers-color-scheme` styling keeps
working.

``` shell
npm install react-svg
```

Either insert your own SmartSVG:tm: file or use the file provided with the code
sample and place it in the `public/` folder as `public/smart.svg`.

`ReactSVG` fetches and injects markup client-side, so mark the page as a
Client Component. Replace `app/page.tsx` with the following.

``` tsx
'use client'

import { ReactSVG } from 'react-svg'

export default function Home() {
  return (
    <main>
      <h1>SmartSVG&#8482; Next.js Sample</h1>
      <ReactSVG src="/smart.svg" />
    </main>
  )
}
```

Now serve the app by running

``` shell
npm run dev
```

If you open your web browser and go to
[`http://localhost:3000/`](http://localhost:3000/) you should see the
SmartSVG:tm: sample. Resize your browser window and observe the change when
the client window is smaller than 480px. Change the settings of your
operating system from light to dark mode and observe the change of the logo.

## SmartSVG:tm: as a Static Export

Next.js can also build the whole app down to plain HTML/CSS/JS with no
Node.js server required, via [static
export](https://nextjs.org/docs/app/guides/static-exports). Add
`output: 'export'` to `next.config.ts`:

``` typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
}

export default nextConfig
```

Then build the site:

``` shell
npm run build
```

This produces a fully static copy of the site in `out/` — everything under
`public/` (including `smart.svg`) is copied over unchanged. Serve it with
any static file server, for example:

``` shell
npx serve out
```

The `page.tsx` from the section above needs no changes at all: `ReactSVG`
does its fetching and DOM injection in the browser at runtime, which is
just client-side JavaScript and doesn't depend on a running Next.js server,
so the SmartSVG:tm: sample keeps working exactly as before once exported.
The one thing to watch for in general is that static export can't serve
routes that require a live server — Server Actions, on-demand ISR, dynamic
`next/image` optimization, and Route Handlers that read the request all
need `output: 'export'` left off — but none of those are used by this
sample.
