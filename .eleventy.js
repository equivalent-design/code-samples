module.exports = function (eleventyConfig) {
  // Every framework folder ships its own smart.svg (Angular's and Vue's live
  // a bit deeper, inside their scaffolded projects) — mirror exactly the
  // files the READMEs link to, rather than a recursive glob that would also
  // sweep up unrelated scratch/node_modules SVGs elsewhere in the repo.
  for (const svg of [
    "Astro/smart.svg",
    "Eleventy/smart.svg",
    "Gatsby/smart.svg",
    "Hugo/smart.svg",
    "Jekyll/smart.svg",
    "Nuxt/smart.svg",
    "React/smart.svg",
    "React/www/smart.svg",
    "Svelte/smart.svg",
    "Zola/smart.svg",
    "Angular/smartSVG/src/assets/svg/smart.svg",
    "Vue/smartsvg-project/public/smart.svg",
    "Vue/smartsvg-project/src/assets/smart.svg",
  ]) {
    eleventyConfig.addPassthroughCopy(svg);
  }
  eleventyConfig.addPassthroughCopy("assets/css/style.css");
  eleventyConfig.addPassthroughCopy("assets/images");

  // All content is plain README.md / equivalent.md with no front matter of
  // its own, so give every page the same layout by default.
  eleventyConfig.addGlobalData("layout", "base.njk");

  eleventyConfig.addGlobalData("eleventyComputed", {
    // Fall back to the containing folder name ("React", "Hugo", ...) when a
    // page doesn't set its own title; the root README becomes the homepage.
    title: (data) => {
      if (data.title) return data.title;
      const stem = data.page.filePathStem;
      if (stem === "/README") return "Code Samples for SmartSVG";
      return stem.split("/").filter(Boolean)[0];
    },
    // Every README.md becomes that folder's index page (so "./React/"-style
    // links in the source content resolve), everything else (equivalent.md)
    // keeps its own name as a flat *.html file, matching the "./equivalent.html"
    // links already written in the tutorials.
    permalink: (data) => {
      const stem = data.page.filePathStem;
      if (data.page.fileSlug === "README") {
        const dir = stem.slice(0, stem.length - "/README".length);
        return `${dir}/index.html`;
      }
      return `${stem}.html`;
    },
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_layouts",
      layouts: "_layouts",
    },
    templateFormats: ["md", "njk"],
    // Content is raw README/tutorial markdown full of literal `{ }` (CSS in
    // inline SVG) and even literal `{{ }}` Liquid/Tera examples in code
    // fences — never run it through the Nunjucks engine, only the layout.
    markdownTemplateEngine: false,
    // GitHub Pages serves a project repo (as opposed to a <user>.github.io
    // repo) from /<repo-name>/, not /. Every absolute link built with the
    // `url` filter in _layouts/base.njk picks this up automatically.
    pathPrefix: "/code-samples/",
  };
};
