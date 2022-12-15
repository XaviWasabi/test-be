var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
const minify = require("gulp-babel-minify");

const config = require('rc')('app');

gulp.task("babel:dev", function () {
  return gulp.src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("scripts.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.distDir + "/js"));
});

gulp.task("babel:prod", function () {
  return gulp.src("src/js/*.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest(config.distDir + "/js"));
});