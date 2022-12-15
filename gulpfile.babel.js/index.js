"use strict";

import gulp from "gulp";
import requireDir from "require-dir";

requireDir("./tasks");

gulp.task("prepare", gulp.series("clean", "copy"));

gulp.task("dev", gulp.series("prepare", "sass", "babel:dev", ["watch"]));
gulp.task("build", gulp.series("prepare", "babel:prod", "sass:prod"));

gulp.task("default", gulp.series("dev"));

// gulp.task( 'prepare', sequence( 'clean', 'sass', 'eslint', 'modernizr', 'copy' ) );

// gulp.task( 'build', sequence( 'prepare', 'browserify:prod') );
// gulp.task( 'dev', sequence( 'prepare', 'browserify:dev', [ 'watch' ] ) );

// gulp.task( 'default', [ 'dev' ] );

