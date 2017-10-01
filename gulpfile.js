const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  return gulp
    .src('./images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('default', ['imagemin']);