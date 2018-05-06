var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');

gulp.task('watch', function() {
  watch('less/*.less', function() {
    gulp.start('less');
    });
 });

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['watch']);