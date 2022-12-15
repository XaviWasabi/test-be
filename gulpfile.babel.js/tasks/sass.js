'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';

var sass = require('gulp-sass')(require('sass'))

const config = require('rc')('app');

gulp.task('sass:styles', function () {
  return gulp.src([config.srcDir + '/styles/*.scss', config.srcDir + '/styles/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.distDir))
    .pipe(livereload());
});

gulp.task('sass:prod', function () {
  return gulp.src([config.srcDir + '/styles/*.scss', config.srcDir + '/styles/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.distDir));
});

gulp.task('sass', gulp.series('sass:styles'));
