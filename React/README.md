# React and SmartSVG:tm:

This is a simple example how to integrate a SmartSVG:tm: into a React front-end
application. While there are multiple ways to integrate SVG into React
applications, we will use the [React SVG
component](https://www.npmjs.com/package/react-svg) library.

The code sample can be found at
[github.com/equivalent-design/code-samples/React](https://github.com/equivalent-design/code-samples/React).

## The `hello world` Sample

While there are many frameworks that will generate directory structure and
boilerplate for a React app, we simply start with a minimalist App from
scratch. Create a `React` folder and in that folder install a very basic react
framework:

``` shell
npm install esbuild react react-dom @types/react @types/react-dom
```

Then create a file `app.tsx`, containing the traditional `hello world` app.

``` tsx
import * as React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return <h1>hello world</h1>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

Next create a folder `www` and in that folder create a simple landing page that serves our
`hello world` app in a file named `index.html`.

``` html
<!DOCTYPE html>
<html>
  <body>
    <div id="root" />
    <script src="js/app.js"></script>
  </body>
</html>
```

Now we serve the app by running 

``` shell
npx esbuild app.tsx --bundle --servedir=www/ --outdir=www/js
```

If you open your web browser and go to URL `localhost:8000` you should see the
`hello world` message on the page.

## Adding SmartSVG:tm: as a React-SVG component

We are using the [React SVG component](https://www.npmjs.com/package/react-svg)
to display SVG images.


``` shell
npm install react-svg
```

We have rewrite the original `hello world` app to include a SmartSVG:tm: via the
`ReactSVG` component. Note, that since we are serving the app in the `www`
folder, your SmartSVG:tm: file is expected to reside in the same folder.

``` tsx

function Heading({sample}) {
  return (
    <h1>SmartSVG&#8482; {sample} Sample</h1>
  );
}

function App() {
  return (
    <main style={{backgroundColor: '#d3d3d3'}}>
      <Heading sample='React'/>
      <ReactSVG src='./smart.svg' />
    </main>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

Either insert your own SmartSVG:tm: file or use the file provided with the code
sample that can be found at
[github.com/equivalent-design/smartsvg-code-samples/React](https://github.com/equivalent-design/smartsvg-code-samples/React). It
contains the Equivalent Logo as a SmartSVG:tm: in the `www` folder.

Now serve the app again by running

``` shell
npx esbuild app.tsx --bundle --servedir=www/ --outdir=www/js
```

If you reload URL `localhost:8000` in your web browser you should see the
SmartSVG:tm: sample. Resize your browser window and observe the change when the
client window is smaller than 480px.  Change the settings of your operating
system from light to dark mode and observe the change of the logo.
