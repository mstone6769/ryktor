const Metalsmith   = require('metalsmith');
const sass         = require('metalsmith-sass');
const htmlMinifier = require("metalsmith-html-minifier");

module.exports = Metalsmith(__dirname)
  .metadata({
    title: "Ryktor",
    description: "Be Heard",
    generator: "Metalsmith",
    url: "https://www.ryktor.com/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(sass())
  .use(htmlMinifier())
  .use((()=> {
    if (process.env.NODE_ENV === 'production') {
      return (files, metalsmith, done) => done();
    }
    const browserSync = require('metalsmith-browser-sync');
    return browserSync({
      files  : ['src/**/*', 'src/*']
    })
  })())
  .build(function(err, files) {
    if (err) { throw err; }
  })