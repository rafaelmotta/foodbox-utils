var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');


var templatesSources = ['./src/templates/*.html']
var sources = ["./src/foodboox-utils.js", "./src/**/*.js"];

gulp.task('templates', function () {
  gulp.src(templatesSources)
     .pipe(ngHtml2Js({
        moduleName: "foodbox.utils.templates",
        prefix: "/partials/"
      }))
     .pipe(gulp.dest("./src/compiled-templates"));
});

gulp.task('babel', function () {
  gulp.src(sources)
    .pipe(babel())
    .pipe(concat('foodbox-utils.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});



gulp.task('watch', function() {
  return gulp.watch(sources, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
gulp.task('template', ['templates']);