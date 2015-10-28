var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function(){
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('errorTest', function(){
  return gulp.src('./*.js')
    .pipe(mocha())
    .pipe(mocha({reporter: 'list'}));
});

//for the watch task
gulp.task('watch', function() {
  gulp.watch('./*.js', ['lint', 'errorTest']);
});

gulp.task('default', ['lint', 'errorTest', 'watch']);



// may refactor this later to move the jshint options (node and globals) into a jshintrc file that you can transfer between projects.
