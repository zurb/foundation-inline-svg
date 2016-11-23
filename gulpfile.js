var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var sass      = require('gulp-sass');
var webserver = require('gulp-webserver');
var opn       = require('opn');
var babel     = require('gulp-babel');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



var sourcePaths = {
  styles: ['scss/**/*.scss'],
  es6: ['js/**/*.js']
};

var distPaths = {
  styles: 'dist',
  js: 'dist'
};

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('sass', function () {
  gulp.src( sourcePaths.styles )
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       false,
      directoryListing: false
    }));
});

gulp.task('es6', function () {
	return gulp.src(sourcePaths.es6)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(distPaths.js));
});

gulp.task('standalone', ['es6'], function() {
  var b = browserify({
    entries: 'dist/foundation.inline-svg.js',
    paths: ['./node-modules'],
    debug: false
  });

  return b.bundle()
    .pipe(source('dist/foundation.inline-svg.js'))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(rename(function (path) {
      path.dirname += "/standalone";
    }))
    .pipe(gulp.dest('./'));
});



gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port + '/example/index.html' );
});

gulp.task('watch', function(){
  gulp.watch(sourcePaths.styles, ['sass']);
  gulp.watch(sourcePaths.es6, ['es6', 'standalone']);
});

gulp.task('build', ['sass', 'es6', 'standalone']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);
