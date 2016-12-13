var gulp = require( 'gulp' ),
  concat = require( 'gulp-concat' ),
  sourcemaps = require( 'gulp-sourcemaps' ),
  concat_css = require( 'gulp-concat-css' ),
  minify = require( 'gulp-minify' );

gulp.task( 'javascript', function () {
  return gulp.src( [ './src/js/clients/*.js', './src/js/items/*.js', './src/js/barber/*.js','./src/js/canvas/*.js', './src/js/*.js' ] )
    .pipe( sourcemaps.init() )
    .pipe( concat( 'js/src.js' ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'compress:js', function () {
  gulp.src( 'dist/js/src.js' )
    .pipe( minify() )
    .pipe( gulp.dest( 'dist/js' ) )
} );

gulp.task( 'css', function () {
  return gulp.src( [ './src/css/reset.css', './src/css/style.css' ] )
    .pipe( concat_css( "css/bundle.css" ) )
    .pipe( gulp.dest( 'dist' ) );
} );
