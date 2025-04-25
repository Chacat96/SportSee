import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';

const sassCompile = gulpSass(sass);

gulp.task('sass', () => {
  return gulp.src('src/styles/scss/**/*.scss')  
    .pipe(sassCompile().on('error', sassCompile.logError)) 
    .pipe(gulp.dest('src/styles/css'));  
});

gulp.task('watch', () => {
  gulp.watch('src/styles/scss/**/*.scss', gulp.series('sass'));  
});

gulp.task('default', gulp.series('sass', 'watch'));  
