'use strict';

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('sass', () => {
    gulp.src('assets/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'})) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {
    gulp.src(['assets/js/jquery/*.js', 'assets/js/bootstrap/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});
 
gulp.task('watch', () => {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['js']);
});