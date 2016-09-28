const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('lib'));
});

let watch = gulp.task('watch', () => {
	gulp.watch('src/**/*.js', ['default']);
});

watch.on('error', function () {
	console.log('Something went wrong...')
});
