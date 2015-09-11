var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');


var destination, source;
source = "./src/**/*.js";

gulp.task('templates', function () {
  gulp.src('src/templates/*.html')
     .pipe(ngHtml2Js({
        moduleName: "foodbox.utils.templates",
        prefix: "/partials/"
      }))
     .pipe(gulp.dest("./src/compiled-templates"));
});

gulp.task('babel', function () {
  gulp.src('src/*/*.js')
    .pipe(babel())
    .pipe(concat('foodbox-utils.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});



gulp.task('watch', function() {
  return gulp.watch(source, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
gulp.task('template', ['templates']);