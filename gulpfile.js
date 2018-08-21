var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var babel = require('gulp-babel');

var jsFiles = ['js/menu.js'];

gulp.task('js', function () {
	return gulp.src(jsFiles)
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('static/js'));
});

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/css'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('sass/**/*.scss', ['sass']);
})

gulp.task('js:watch', function () {
	return gulp.watch(jsFiles, ['js']);
})