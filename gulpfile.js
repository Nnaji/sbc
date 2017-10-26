var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sourceMaps = require('gulp-sourcemaps'),
	handlebars = require('gulp-compile-handlebars'),
	minifyCss = require('gulp-minify-css');

gulp.task('styles', function () {
	gulp.src(['src/styles/**/*.css'])
		.pipe(sourceMaps.init())
		.pipe(rename('main.min.css'))
		.pipe(minifyCss())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
	console.log('CSS file or files minified');
});

gulp.task('scripts', function () {
	gulp.src(['src/scripts/**/*.js'])
		.pipe(sourceMaps.init())
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browserSync.stream());
	console.log('JavaScript file or files uglified');
});

gulp.task('sbcTemplates', function(){
	return gulp.src(['src/sbcTemplates/**/*.hbs'])
		.pipe(handlebars())
		.pipe(rename(function(path){
			path.extname = '.html';
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default',['styles', 'scripts', 'sbcTemplates'], function () {
	console.log('Running default Task');
	browserSync.init({
		server: './'
	});

	gulp.watch(['src/**/*', '*.html'], browserSync.reload);
	gulp.watch('src/scripts/**/*.js', ['scripts']);
	gulp.watch('src/styles/**/*.css', ['styles']);
	gulp.watch('src/sbcTemplates/**/*.hbs', ['sbcTemplates']);


	//	gulp.watch('*.html', browserSync.)
});
