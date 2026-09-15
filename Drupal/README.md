---
title: Drupal Installation
---
# Drupal Installation

This page covers steps specific to Drupal. For the general accessible SVG
techniques (in-line vs. `<img>`), favicon installation, and the universal
light/dark mode CSS, see the [Installation Guide](../Installation/).

If you try to upload your SmartSVG:tm: through the "Upload logo image"
field on a theme's settings page (`admin/appearance/settings/[theme]`),
Drupal rejects it. That field validates uploads with `file_validate_is_image()`,
which only recognizes raster formats (GIF, PNG, JPEG), so an SVG fails
validation and the upload is silently dropped. There are several options
for solving this issue.

## Method 1: Using the Theme's Default Logo

Most Drupal themes (including core's Olivero and Bartik) already expect
their default logo to be an SVG file, so this is the most native option.

1. Copy your SmartSVG:tm: into your custom theme's root directory as
   `logo.svg` (e.g. `themes/custom/mytheme/logo.svg`).
2. Open your theme's `mytheme.info.yml` and add (or confirm) the `logo` key:

   ``` yaml
   logo: logo.svg
   ```

3. Go to "Appearance" -> "Settings" for your theme and make sure "Use the
   theme's default logo" is checked (this is the default), then save.

Drupal core now renders your SmartSVG:tm: through the standard `{{ logo }}`
Twig variable, wrapped as an `<img>` tag. As with any linked SVG image, the
`<title>` element is no longer exposed to assistive technology, so add
appropriate alt text where `{{ logo }}` is printed in your theme, and note
that any `@media (max-width: ...)` breakpoint inside the file now tracks
the rendered size of the `<img>` element rather than the page's viewport.

## Method 2: Installing a Module

If you'd rather manage the logo as a regular uploaded asset (for example
through the Media Library, alongside the rest of your site's images), install
a module that extends Drupal's image validators to accept SVG, such as the
[SVG Image](https://www.drupal.org/project/svg_image) module. Once enabled,
you can create or reuse an image field that accepts SVG uploads, attach it
to the "Site branding" block via a custom block template, and upload your
SmartSVG:tm: through the normal Drupal admin UI.

## Method 3: Editing the Site Branding Block Template

For full control over the markup (and to embed the SVG in-line rather than
as an `<img>`), override the "Site branding" block template in your theme.

1. Copy `block--system-branding-block.html.twig` from Drupal core's `system`
   module (or from a core theme like Olivero) into your theme's
   `templates/block/` directory.
2. Since Twig can't read files directly, load the SVG markup in a preprocess
   function in your theme's `.theme` file:

   ``` php
   function mytheme_preprocess_block__system_branding_block(&$variables) {
     $theme_path = \Drupal::theme()->getActiveTheme()->getPath();
     $variables['smart_svg'] = file_get_contents($theme_path . '/logo.svg');
   }
   ```

3. In the Twig template, replace the `<img>` markup for the logo with the
   in-line SVG:

   ``` twig
   {% if smart_svg %}
     <div class="site-logo">{{ smart_svg|raw }}</div>
   {% endif %}
   ```

4. Clear the cache (`drush cache:rebuild`, or `drush cr`) for the template
   override to take effect.

## Method 4: Block Layout with a Custom HTML Block

If you don't want to touch theme code at all, you can place your
SmartSVG:tm: through Drupal's block UI, similar to a page builder's custom
HTML block.

1. Go to "Structure" -> "Block layout", find the header/branding region, and
   click "Place block."
2. Choose "Custom block library", then "Add custom block" and pick the
   "Basic block" type. Set the text format to "Full HTML" (the default
   "Basic HTML" format strips `<svg>` markup) and paste your SmartSVG:tm:
   into the body field.
3. Save and place the block into your header region. If you don't want the
   logo to appear twice, disable or remove the default "Site branding"
   block from that region.
