---
title: Squarespace Installation
---
# Squarespace Installation

This page covers steps specific to Squarespace. For the general accessible SVG
techniques (in-line vs. `<img>`), favicon installation, and the universal
light/dark mode CSS, see the [Installation Guide](../Installation/).

The steps below assume Squarespace 7.1, the current default for new sites;
menu labels are similar on 7.0 but may be organized differently, so check
against your own site if something doesn't match.

## A Note on SVG Sanitization

Squarespace's built-in image and logo uploaders run every SVG you upload
through a sanitizer that strips `<style>` and `<script>` elements. Since
SmartSVG:tm:'s light/dark and forced-colors behavior lives entirely inside a
`<style>` block, uploading it through the standard image or logo panel will
silence that behavior — the file will still display, but as a flat, static
image. The two methods below place the SmartSVG:tm: markup directly on the
page through a Code Block or Code Injection instead, which Squarespace does
not sanitize.

## Method 1: Code Block (In-line)

1. Edit the page or section where your logo should appear. In the Site
   Header, click into the header to edit it and use the block picker to add
   a Code Block (on templates where the header doesn't support blocks
   directly, add the Code Block to the page content instead, positioned
   where you want the logo).
2. Paste your SmartSVG:tm: markup directly into the Code Block, the same way
   you would for the in-line method described in the
   [Installation Guide](../Installation/) for a hand-written page.
3. Save. Because a Code Block renders raw HTML unchanged, the `<style>`
   block inside your SmartSVG:tm: is preserved, so light/dark mode and
   forced-colors switching keep working.

## Method 2: Code Injection (Favicon & Universal CSS)

Code Injection lets you add markup to every page on your site without
editing a template. It's available under **Settings → Advanced → Code
Injection**, and requires a Business plan or higher (it isn't available on
the Personal plan).

* For the SmartSVG:tm: favicon files (see the "SmartSVG Favicon Installation"
  section of the [Installation Guide](../Installation/)), upload them under
  **Settings → Advanced → Assets Library** (or any File Storage panel your
  plan provides) to get a hosted URL for each file, then paste the `<link>`
  tags from the favicon guide into the **Header** field of Code Injection,
  pointing at those URLs. Squarespace's own favicon uploader only accepts a
  single square image, so it can't drive the full multi-format smart
  favicon setup on its own.
* For the universal light/dark mode and forced-colors CSS (see the
  "Universal CSS" section of the [Installation Guide](../Installation/)),
  the simplest path is Squarespace's native CSS editor at **Design → Custom
  CSS** — paste the CSS there directly, without the surrounding `<style>`
  tags. Code Injection's **Header** field also works if you prefer to keep
  everything in one place; in that case wrap the CSS in a `<style>` tag.
