module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy('src/css/bundle.css')

    eleventyConfig.addPassthroughCopy('content/assets')


    return {
        dir: {
            input: "content"
          }
        }

}
