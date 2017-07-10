require('./check-versions')()
var path = require('path')

var utils = require('./utils')
var config = require('../config')

var rollup = require('rollup')
var json =  require('rollup-plugin-json')
var vue = require('rollup-plugin-vue')
var babel = require('rollup-plugin-babel')
var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var uglify = require('rollup-plugin-uglify')
var replace = require('rollup-plugin-replace')
// var ora = require('ora')
// var rm = require('rimraf')
// var path = require('path')
// var chalk = require('chalk')
// var webpack = require('webpack')
// var config = require('../config')
// var webpackConfig = require('./webpack.prod.conf')

// var spinner = ora('building for production...')
// spinner.start()

// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
//   if (err) throw err
//   webpack(webpackConfig, function (err, stats) {
//     spinner.stop()
//     if (err) throw err
//     process.stdout.write(stats.toString({
//       colors: true,
//       modules: false,
//       children: false,
//       chunks: false,
//       chunkModules: false
//     }) + '\n\n')

//     console.log(chalk.cyan('  Build complete.\n'))
//     console.log(chalk.yellow(
//       '  Tip: built files are meant to be served over an HTTP server.\n' +
//       '  Opening index.html over file:// won\'t work.\n'
//     ))
//   })
// })


// const plugins = [
//   alias({
//     vue$: 'vue/dist/vue.common.js'
//   }),
//   vue({
//     css: './public/assets/css/app.css'
//   }),
//   buble({
//     objectAssign: 'Object.assign'
//   }),
//   nodeResolve({
//     jsnext: true,
//     main: true,
//     browser: true
//   }),
//   commonjs(),
//   nodeGlobals()
// ]




// const config = {
//   entry: './src/app.js',
//   dest: './public/assets/js/app.js',
//   format: 'es',
//   sourceMap: true,
//   plugins: plugins
// }

// if (isProduction) {
//   config.sourceMap = false
//   config.plugins.push(butternut)
//   config.plugins.push(uglify())
// }

process.env.NODE_ENV = config.build.env

module.exports = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: '{{ name }}',
  globals: {vue: 'Vue'},
  plugins: [
    json(),
    resolve(),
    vue({compileTemplate: true ,css: true }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
      presets: ["es2015-rollup"]
    }),
    commonjs(),
    replace({ 
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }), 
    uglify()
  ],
  dest: path.resolve(config.build.assetsRoot, utils.assetsPath('js/{{ name }}.js')),
  sourceMap: false
}
