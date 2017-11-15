// var pug = require('gulp-pug');

// gulp.task('views', function buildHTML() {
//  return gulp.src('views/*.pug')
//  .pipe(pug({
//    // Your options in here. 
//  }))
// });



var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

/* #### Pug to HTML #### */
gulp.task('pug', function(){
  gulp.src('./src/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function(){
  gulp.src('./src/sass/*.sass')
  .pipe(sass({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.pug', ['pug']);
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/sass/*.sass', ['sass']);
});

gulp.task('default', ['pug', 'sass', 'watch']);