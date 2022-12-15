"use strict";

import gulp from "gulp";
import livereload from "gulp-livereload";

const config = require("rc")("app");

gulp.task("copy:root", function () {
  return gulp
    .src([config.srcDir + "root/**/*"])
    .pipe(gulp.dest(config.distDir))
    .pipe(livereload());
});

gulp.task("copy:images", function () {
  return gulp
    .src([config.srcDir + "images/**/*"])
    .pipe(gulp.dest(config.distDir + "images"))
    .pipe(livereload());
});

gulp.task("copy:fonts", function () {
  return gulp
    .src([config.srcDir + "fonts/**/*"])
    .pipe(gulp.dest(config.distDir + "fonts"));
});

gulp.task("copy:resources", function () {
  return gulp
    .src([config.srcDir + "resources/**/*"])
    .pipe(gulp.dest(config.distDir + "resources"))
    .pipe(livereload());
});

gulp.task("copy:acf", function () {
  return gulp
    .src([config.srcDir + "acf-json/**/*"])
    .pipe(gulp.dest(config.distDir + "acf-json"))
    .pipe(livereload());
});

gulp.task(
  "copy",
  gulp.series("copy:root", "copy:images", "copy:fonts", "copy:resources", "copy:acf")
);
