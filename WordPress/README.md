---
title: WordPress Installation
---
# WordPress Installation

This page covers steps specific to WordPress. For the general accessible SVG
techniques (in-line vs. `<img>`), favicon installation, and the universal
light/dark mode CSS, see the [Installation Guide](../Installation/).

The default WordPress tool for adding a logo to your navigation (found under "Site Identity") does not support the SVG file type. If you attempt to upload an SVG, the error message reads "Sorry, this file type is not permitted for security reasons." There are several options for solving this issue.

## Method 1: Installing a Plugin

You can install a plugin that allows SVG uploads, such as the [SVG Support](https://wordpress.org/plugins/svg-support/) plugin. With this method, you can upload your SmartSVG:tm: to the "Site Identity" section of the appearance customizer.

## Method 2: Editing Your WordPress Theme

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

## Method 3: Full Site Editor Beta

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

## Method 4: Elementor

1. In the sidebar of your WordPress admin panel, scroll down to "Pages" and click "All Pages."
2. Then, in the list of pages, click the three dots to the right of a page and click the "Edit" button.
3. In the preview area, click the button that says "Edit with Elementor."
4. In the sidebar of Elementor, click the hamburger menu in the upper left corner. Click "Site Settings" and then click "Site Identity."
5. Under "Site Logo," click the "Upload SVG" button. Upload your SmartSVG:tm:, and save changes.
