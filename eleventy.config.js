module.exports = function(eleventyConfig) {
  // Copy assets folder to output (CSS, images, etc.)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  return {
    pathPrefix: "/11ty-test/",
    
    // Directory configuration
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    
    // Template formats to process
    templateFormats: ["md", "njk", "html", "liquid"],
    
    // Default template engine for markdown files
    markdownTemplateEngine: "njk",
    
    // Default template engine for HTML files
    htmlTemplateEngine: "njk"
  };
};
