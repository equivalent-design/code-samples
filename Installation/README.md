# SmartSVG:tm: Installation Instructions

* Important: Never open your SVG files in Adobe Illustrator and save the file, as this will overwrite your smart behavior code.
* Ensure that your SVG is defaulting to the correct mode (light vs. dark) for the installation environment.
* Be sure to install a dark theme on your website before adding our SmartSVG:tm: files. If you don't have a dark theme, please select "no inversion" to keep your design from changing.

## Basic Methods

There are many ways of implementing SVGs on the web, however, only some methods are accessible. For example, embedding an SVG using an `<object>` tag, using an `<iframe>`, or using a CSS background are not accessible implementations. The two accessible implementations are either in-line or using `<img>` tags. These two methods each have their own advantages and disadvantages.

### Method 1: In-line

The in-line method places the actual SVG markup directly into the HTML of the site. Copy and paste the markup from the attached files where you would normally place an `<img>` tag. The SVG is internally programmed to fill the width of its containing `<div>`, so no additional CSS is required.

| Advantages | Disadvantages |
| --- | --- |
| Best cross-browser compatibility | The image can't be cached by the browser and is redrawn every time the page is loaded. Can be weighty, as it adds to the overall size of the page markup. |

### Method 2: HTML `<img>` Element

SVGs can be linked to with a regular HTML `<img>` tag, just like any other image file type.

1. Upload the file to your server and place the markup below in your site code where you want the logo to appear.
2. Place the logo's file path in the quotes for `src="  "`.

##### Example

``` html
<img id="mysvg" src="images/my-logo.svg" alt="My SVG." />
```

##### Associated CSS for `<img>` tag implementation (place in your site CSS)

``` css
img#mysvg {
  display: block;
  width: 100%;
  max-width: /* input desired width here */;
  height: auto;
}
```

| Advantages | Disadvantages |
| --- | --- |
| The image is linked to, just like any other image, and is cacheable for faster subsequent load times. | Internal CSS media queries in the SVG file are ignored by Safari on Mac. The CSS required for full Safari support removes the fluid nature of the file in dark mode. |

## SmartSVG:tm: Favicon Installation

Installing a SmartSVG:tm: favicon that responds to light and dark mode as well as Windows contrast themes is a bit involved, but worth the effort. It requires the SVG favicon, an ICO favicon, three PNG fallback favicons, some link elements that get placed in your website's header, and a JSON web app manifest.

This is a list of the files, their names and dimensions (note: names need to be as shown):

* `favicon.svg`: 600x600
* `favicon.ico`: 32x32px
* `apple-touch-icon.png`: 180x180px
* `android-chrome-192x192.png`: 192x192px
* `android-chrome-512x512.png`: 512x512px

The web app manifest is fairly simple and is only for the "android-chrome" PNGs:

``` json
{
  "icons": [
    {
      "src": "/s/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/s/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

The manifest file should be named `site.webmanifest` (we use `site.webmanifest`).

The following set of links should be placed in the header of the website's index page (note "file path..." should be updated with the file's actual path):

``` html
<link rel="manifest" href="file path…/site.webmanifest">
<link rel="icon" href="file path…/favicon.ico" sizes="32x32">
<link rel="icon" href="file path…/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="file path…/apple-touch-icon.png">
```

#### Best practices

* The `.ico` file type, while still used, isn't supported by many graphics applications without the aid of additional plugins. There are also quite a few web-based apps that can convert a `.png` into an `.ico` as well.
* For the apple-touch-icon it is recommended to add 40px of extra space, i.e. 20px on each side of your favicon, to prevent it from being cropped.

## Universal CSS for Light/Dark Mode and Forced Colors

Place the CSS below into the site's master CSS file. It is likely that your site already has styles for the `body` element. The below can be added to those styles.

### Dark Mode

The style below tells the browser that the site can have its appearance adjusted by the user switching to dark mode:

``` css
body {
  color-scheme: light dark;
}
```

The media query below is where dark-theme-specific site styles are defined.

``` css
@media (prefers-color-scheme: dark) {
  body {
    /* dark-theme styles go here */
  }
}
```

### Forced Colors / High Contrast / Custom Contrast Mode

The media query below sets the text and background color of the site to user-specified colors when using high-contrast mode on a PC. The header logo SVG has similar code to change colors to match the user's `CanvasText` setting.

``` css
@media (forced-colors: active) {
  p, h1, h2, h3, h4, h5 {
    fill: CanvasText;
  }

  body {
    background-color: Canvas;
  }
}
```
