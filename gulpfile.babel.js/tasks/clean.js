"use strict";

import gulp from "gulp";
import del from "del";

const config = require("rc")("app");

const clean = function() {
  return del([config.distDir]);
}

gulp.task("clean", clean);
