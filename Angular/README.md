# Angular and SmartSVG:tm:

## The Standard Sample

First we install a minimalist Angular environment

``` shell
npm install @angular/cli
```

Then init a minimal Angular project

``` shell
npx ng new
```

You will be asked a number of questions. The first is for the directory where
you want to host your Angular applicatoin; answer `smartSVG`. For the other
questions you can just use the default settings by pressing return.

After the inital setup is complete enter the `smartSVG` folder and serve the basic app.

``` shell
cd smartSVG
npx ng serve
```

This will compile the standard Angular app and serve it at
[`http://localhost:4200/`](http://localhost:4200/). Open you browser with this
URL and you should see the Angular welcome screen.


## Adding SmartSVG:tm: to our Angular App

The Angular welcome screen already contains a number of SVG images.
Unfortunately, none of the is smart yet. Thus,in a next step, we will replace
the Angular logo with the Equivalent Design SmartSVG:tm: logo.

### SmartSVG:tm: as Inline SVG in Angular

As a first exercise we replace the Angular rocket with our Equivalent Design
logo. While inside the `smartSVG` folder open the file
`src/app/app.component.html`, find the line commented `<!-- Highlight Card -->`.

``` xml
  <!-- Highlight Card -->
  <div class="card highlight-card card-small">

    <svg id="rocket" xmlns="http://www.w3.org/2000/svg" width="101.678" height="101.678" viewBox="0 0 101.678 101.678">
      <title>Rocket Ship</title>
  ...
    </svg>
 </div>
```

Replace the `svg` element with the content of the [`smart.svg`](./smartSVG/src/assets/svg/smart.svg)
file and inspect the result in the browser. Zoom or resize your browser window
and observe the change when the client window is smaller than 480px.  Change the
settings of your operating system from light to dark mode and observe the change
of the logo.


### SmartSVG:tm: as Angular Component

Next we define an Angular component that contains a SmartSVG:tm:.

``` shell
npx ng generate component smartSVG
```

This will create a new component in the `smart-svg` subfolder and add it to your
Angular app. Open the file `smart-svg/smart-svg.component.html` and replace the
single line `<p>smart-svg works!</p>` with the content of the
[`smart.svg`](./smartSVG/src/assets/svg/smart.svg) file.

Next, while inside the `smartSVG` folder open the file
`src/app/app.component.html`, find the line commented `<!-- Highlight Card -->`
and add the `app-smart-svg` component.

``` XML
  <!-- Highlight Card -->
  <app-smart-svg />
  <div class="card highlight-card card-small">
```

Inspect the result in the browser at
[`http://localhost:4200/`](http://localhost:4200/). Zoom or resize your browser
window and observe the change when the client window is smaller than 480px.
Change the settings of your operating system from light to dark mode and observe
the change of the logo.

### SmartSVG:tm: as Angular Component

This technique is similar to previous one, with the exception that we use the
SVG file directly as a template from the assets directory. First create the
smartSVG component

``` shell
npx ng generate component smartSVG
```

Ensure that the `smart.svg` file is at in the `src/assets/svg/` folder.  Then
open the `smart-svg/smarg-svg.component.ts` file and edit the `templateUrl` as
follows

``` JavaScript
  templateUrl: '../../assets/svg/smart.svg',
```

Now add the `app-smart-svg` component as in the previous section and observe the
changes.
