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

## WordPress Installation

The default WordPress tool for adding a logo to your navigation (found under "Site Identity") does not support the SVG file type. If you attempt to upload an SVG, the error message reads "Sorry, this file type is not permitted for security reasons." There are several options for solving this issue.

### Method 1: Installing a Plugin

You can install a plugin that allows SVG uploads, such as the [SVG Support](https://wordpress.org/plugins/svg-support/) plugin. With this method, you can upload your SmartSVG:tm: to the "Site Identity" section of the appearance customizer.

### Method 2: Editing Your WordPress Theme

If you have a custom logo uploaded into the appearance editor of your WordPress site, remove it and disable the "Display Site Title & Tagline" checkbox.

1. Connect to your WordPress site using an [SFTP client](https://wordpress.com/support/sftp/) of your choice. By default, WordPress inserts the following into the header area of your page, referencing the file uploaded as your "custom logo" in the WordPress backend:

   ``` php
   <?php if ( has_custom_logo() && ! $show_title ) : ?>
   <div class="site-logo"><?php the_custom_logo(); ?></div>
   <?php endif; ?>
   ```

   This piece of code needs to be replaced with one that displays the SmartSVG:tm:. You can most likely find this code in the `theme -> template-parts -> header -> site-branding.php` file in your theme, though each WordPress theme can have a different file structure so it may be located elsewhere.

2. Upload your SmartSVG:tm: into a directory of your theme (recommended: upload to the `theme -> assets -> images` directory).

3. Replace the above code with the following:

   ``` php
   <img id="NavLogoSmartSVG" src="<?php echo get_template_directory_uri(); ?>/assets/images/[your_smart_svg].svg"/>
   ```

4. Replace the file path above with the file path in which you uploaded your SmartSVG:tm:. You can set the ID of the element to any name you want. Your logo should now be inserted into the page, but it won't be visible because it is displaying at a width of 0px by 0px.

5. To modify the size of your logo and have it responsively resize, go to the "Custom CSS" section of the appearance editor and add CSS that targets the element ID to adjust the size. Add media queries to define breakpoints and resizes.

### Method 3: Full Site Editor Beta

WordPress has a beta feature that allows you to directly edit the header and footer of your page without having to edit the theme. Note that this is only supported by [themes that are compatible with the Full Site Block Editor](https://fullsiteediting.com/themes/). You must also have the Gutenberg plugin installed in WordPress, though the plugin is included by default so you may already have it installed.

1. Go to the sidebar of WordPress and scroll down to the "Appearance" tab. Click the "Site Editor" button. Tick the checkbox to enable the Site Editor beta and save.
2. Go to the sidebar of WordPress and scroll down to the "Appearance" tab and click the "Editor" button.
3. Click into the header and use the "Add Block" button to add a "Custom HTML" block. Paste your SVG code into the custom HTML block.
4. Your SVG may display using the full width of the page. To fix this, add code to the responsive resize media queries in your SVG that targets the ID of the SVG and adds a width value, like so:

   ``` css
   @media screen and (min-width: 1024px) {
     #logo-with-tag {
       visibility: visible;
     }
     #logo-stack,
     #logo-icon {
       visibility: hidden;
     }
     #fluidform {
       width: 200px;
     }
   }

   @media screen and (max-width: 1023px) {
     #logo-icon {
       visibility: visible;
     }
     #logo-with-tag,
     #logo-stack {
       visibility: hidden;
     }
     #fluidform {
       width: 50px;
       aspect-ratio: 108 / 145;
     }
   }
   ```

### Method 4: Elementor

1. In the sidebar of your WordPress admin panel, scroll down to "Pages" and click "All Pages."
2. Then, in the list of pages, click the three dots to the right of a page and click the "Edit" button.
3. In the preview area, click the button that says "Edit with Elementor."
4. In the sidebar of Elementor, click the hamburger menu in the upper left corner. Click "Site Settings" and then click "Site Identity."
5. Under "Site Logo," click the "Upload SVG" button. Upload your SmartSVG:tm:, and save changes.

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
