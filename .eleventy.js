require('dotenv').config();
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Input Directory : src Output directory: _site
    eleventyConfig.addGlobalData('env', process.env);
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    eleventyConfig.addPassthroughCopy('src/css/style.css');
    eleventyConfig.addPassthroughCopy('src/assets/*')
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        templateFormats: ['md', 'njk', 'html', '11ty.js'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passtroughFileCopy: true,

        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            layouts: '_layouts',
            data: "_data"
        },
    }
};