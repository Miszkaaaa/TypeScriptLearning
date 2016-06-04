// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

var tsProject = ts.createProject('./tsconfig.json');
gulp.task('typescript', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./public/scripts'));
});

gulp.task('default', function() {
  gulp.start('less');
  gulp.start('typescript');
});