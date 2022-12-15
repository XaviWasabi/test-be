"use strict";

import gulp from "gulp";
import batch from "gulp-batch";
import livereload from "gulp-livereload";

const config = require("rc")("app");

import requireDir from "require-dir";

requireDir("./");

gulp.task("watch", function () {
  livereload.listen({
    quiet: false,
  });

  // CSS
  gulp.watch(
    config.srcDir + "styles/**/!(*print).scss",
    batch(function (events, cb) {
      events.on("data", gulp.series("sass:styles")).on("end", cb);
    })
  );

  // JS
  // gulp.watch(
  //   config.srcDir + 'js/**/*.@(js|jsx)',
  //   batch(function (events, cb) {
  //     events.on("data", gulp.series("eslint:js")).on("end", cb);
  //   })
  // );

  // IMAGES
  gulp.watch(
    config.srcDir + 'images/**/*',
    batch(function (events, cb) {
      events.on("data", gulp.series("copy:images")).on("end", cb);
    })
  );

  // PHP
  gulp.watch(
    config.srcDir + 'root/**/*',
    batch(function (events, cb) {
      events.on("data", gulp.series("copy:root")).on("end", cb);
    })
  );
});
