'use strict';

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('resize', function () {
    return gulp.src('images/*.*')
        .pipe(imageResize({
            width: 2048,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/fulls'))
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/thumbs'))
        // .pipe(imageResize({
        //     width: 128,
        //     imageMagick: true
        // }))
        // .pipe(gulp.dest('images/lazy'));
});

gulp.task('del', gulp.series('resize'), function () {
    return del(['images/*.*']);
});

// compile scss to css
gulp.task('sass', function () {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ basename: 'main.min' }))
        .pipe(gulp.dest('./assets/css'));
});

// watch changes in scss files and run sass task
gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// minify js
gulp.task('minify-js', function () {
    return gulp.src('./assets/js/main.js')
        .pipe(uglify())
        .pipe(rename({ basename: 'main.min' }))
        .pipe(gulp.dest('./assets/js'));
});

// default task
gulp.task('default', gulp.series('del'));

// scss compile task
// gulp.task('compile-sass', ['sass', 'minify-js']);
gulp.task('compile-sass', gulp.series('sass', 'minify-js'));