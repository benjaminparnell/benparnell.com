var gulp = require('gulp')
var browserify = require('browserify')
var watchify = require('watchify')
var fs = require('fs')
var watch

gulp.task('watchJs', function () {
  watch = true
  browserifyJs()
})

gulp.task('js', function () {
  watch = false
  browserifyJs()
})

function browserifyJs () {
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  })

  if (watch) {
    b = watchify(b)
    b.on('update', function () {
      bundleJs(b)
    })
  }

  b.add('./js/index.js')
  bundleJs(b)
}

function bundleJs (b) {
  b.bundle()
    .pipe(fs.createWriteStream('public/js/main.js'))
}

gulp.task('watch', [ 'watchJs' ])

gulp.task('build', [ 'js' ])

