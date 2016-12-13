var gulp = require( 'gulp' ),
  concat = require( 'gulp-concat' ),
  sourcemaps = require( 'gulp-sourcemaps' ),
  concat_css = require( 'gulp-concat-css' ),
  minify = require( 'gulp-minify' ),
  shell = require( 'gulp-shell' ),
  imagemin = require( 'gulp-imagemin' ),
  cleanCSS = require( 'gulp-clean-css' );

gulp.task( 'javascript', function () {
  return gulp.src( [ './src/js/config.js', './src/js/clients/*.js', './src/js/items/*.js', './src/js/barber/*.js', './src/js/canvas/*.js', './src/js/index.js' ] )
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

gulp.task( 'minify-css', function () {
  return gulp.src( 'dist/css/bundle.css' )
    .pipe( cleanCSS( {
      debug: true
    }, function ( details ) {
      console.log( details.name + ': ' + details.stats.originalSize );
      console.log( details.name + ': ' + details.stats.minifiedSize );
    } ) )
    .pipe( gulp.dest( 'dist/css/' ) );
} );

gulp.task( 'compress:img', function () {
  return gulp.src( [ 'src/img/*.svg', 'src/img/*.png' ] )
    .pipe( imagemin() )
    .pipe( gulp.dest( 'dist/img' ) )
} );

gulp.task( 'build', function () {
  return gulp.src( 'package.json', {
      read: false
    } )
    .pipe( shell( [
      'npm run build'
    ] ) )
} )

gulp.task( 'default', function () {
  gulp.watch( [ './src/js/*.js', './src/js/**/*.js', './src/css/*.css', './index.html' ], [ 'build' ] );
} )
