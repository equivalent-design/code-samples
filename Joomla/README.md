---
title: Joomla Installation
---
# Joomla Installation

This page covers steps specific to Joomla. For the general accessible SVG
techniques (in-line vs. `<img>`), favicon installation, and the universal
light/dark mode CSS, see the [Installation Guide](../Installation/).

If you try to upload your SmartSVG:tm: through the Media Manager or a
template's "Logo" field, Joomla rejects it by default. Out of the box,
"Legal Image Extensions (File Types)" under Global Configuration only lists
`bmp,gif,jpg,png,webp`, so SVG uploads fail with a "type not supported"
error. There are several options for solving this issue.

## Method 1: Enabling SVG Uploads Globally

1. Go to "System" -> "Global Configuration" and open the "Media" tab.
2. Under "Legal Image Extensions (File Types)", add `svg` to the
   comma-separated list.
3. If "Check MIME Types" is enabled, also add `image/svg+xml` to "Legal
   MIME Types Names" (and, on older Joomla versions, to "Legal MIME Types"
   if that field is separate).
4. Save. You can now upload your SmartSVG:tm: through the Media Manager and
   select it from your template's Logo field ("System" -> "Site
   Templates" -> your template -> "Options" tab, e.g. "Cassiopeia").

Note that this changes upload rules site-wide, which may not be desirable
on shared or managed hosting where you don't control what other users
upload through the Media Manager.

## Method 2: Installing an Extension

If you'd rather not loosen the global media restrictions, install an
extension from the [Joomla Extensions
Directory](https://extensions.joomla.org/) that adds dedicated SVG support,
such as a "SVG Image Field" or "SVG Support" plugin. These typically add
their own upload field type that accepts SVG independently of the Global
Configuration media settings, and can be used in template options or
custom fields.

## Method 3: Editing the Template

For full control over the markup (and to embed the SVG in-line rather than
as an `<img>`), override your template's logo layout.

1. In your template's folder (e.g. `templates/cassiopeia`), find the layout
   that renders the logo, typically `html/layouts/joomla/system/logo.php`.
2. Copy it into a template override so template updates don't overwrite
   your change (Joomla convention: keep the same relative path under your
   template's `html/` folder).
3. Replace the `<img>` output with the raw contents of your SmartSVG:tm:,
   for example:

   ``` php
   <div class="site-logo">
     <?php echo file_get_contents(JPATH_THEMES . '/cassiopeia/images/smart.svg'); ?>
   </div>
   ```

4. Clear the Joomla cache ("System" -> "Maintenance" -> "Clear Cache") so
   the override is picked up.

## Method 4: Custom HTML Module in the Logo Position

If you don't want to touch template code, place your SmartSVG:tm: through a
module instead.

1. Go to "Content" -> "Site Modules" -> "New" and choose "Custom".
2. In the module's content area, switch the editor to "None (Text/Code
   editor)" first (the default WYSIWYG editor tends to strip `<svg>` tags),
   then paste your SmartSVG:tm: markup.
3. Under "Position", assign the module to your template's logo/header
   position (e.g. `logo`), and set "Status" to "Published" with menu
   assignment "On all pages."
4. In your template's Logo options, remove or clear the existing logo file
   so it isn't rendered twice alongside the new module.
