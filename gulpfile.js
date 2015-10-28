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

/*
For this assignment you will add a gulpfile and a package.json file to your previous assignment.

The package.json file should include all the dependencies and dev dependencies for the project.

The gulpfile should contain a task to run the mocha/chai test as well as run jshint on all of your code. This should include your tests and your gulpfile.

Submit as a pull request to your own repo that contains just the code for this assignment (gulpfile, package.json and jshint config file if applicable).



Bonus:
For an extra point, set up a watch task that reruns your tests/jshint on changes to any of your files (minus package.json)

For another bonus point move the jshint options (node and globals) into a jshintrc file that you can transfer between projects.
*/
