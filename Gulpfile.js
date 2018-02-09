const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
// const runSequence = require('run-sequence');
// const browserSync = require('browser-sync');

const glp = gulpLoadPlugins();

const sources = {
  sassSnapCss: ['src/css/snapcss.scss']
};

console.log(glp.sassLint);
gulp.task('styles', () => {
  return gulp.src(sources.sassSnapCss)
    .pipe(glp.sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(glp.sassLint.format())
    .pipe(glp.sassLint.failOnError())
    .pipe(glp.sass()) // Comment this out, you'll error, but you won't get an error from events.js
});

gulp.task('default', ['styles'], () => {
  gulp.watch('src/css/**/*.scss', ['styles']);
});
