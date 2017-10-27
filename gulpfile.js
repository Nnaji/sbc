var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		sourceMaps = require('gulp-sourcemaps'),
		handlebars = require('gulp-compile-handlebars'),
		imagemin = require('gulp-imagemin'),
		newer = require('gulp-newer'),
		clean = require('del'),
		less = require('gulp-less'),
		autoprefixer = require('gulp-autoprefixer'),
		minifyCss = require('gulp-minify-css');

var srcPath = 'src/',
			distPath = 'dist/',
			rootPath = './',
			images = {
				in: srcPath + 'img/*.*',
				out: distPath + 'img'
			},
			styles = {
				in: srcPath + 'styles/**/*.less',
				out: distPath + 'styles'
			},
			scripts = {
				in: srcPath + 'scripts/**/*.js',
				out: distPath + 'scripts'
			},
			sbcTemplates = {
				in: srcPath + 'sbcTemplates/**/*.hbs',
				out: rootPath
			};

gulp.task('images', function () {
	gulp.src(images.in)
	.pipe(newer(images.out))
	.pipe(imagemin())
	.pipe(gulp.dest(images.out));
});

/* Task to clean the dist Folder */
gulp.task('clean', function (){
	clean([distPath + '*']);
});

gulp.task('styles', function () {
	gulp.src([styles.in])
		.pipe(sourceMaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(rename('main.min.css'))
		.pipe(minifyCss())
		.pipe(sourceMaps.write(rootPath + 'maps'))
		.pipe(gulp.dest(styles.out))
		.pipe(browserSync.stream());
	console.log('CSS file or files minified');
});

gulp.task('scripts', function () {
	gulp.src([scripts.in])
		.pipe(sourceMaps.init())
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest(scripts.out))
		.pipe(browserSync.stream());
	console.log('JavaScript file or files uglified');
});

gulp.task('sbcTemplates', function(){
	return gulp.src([sbcTemplates.in])
		.pipe(handlebars())
		.pipe(rename(function(path){
			path.extname = '.html';
		}))
		.pipe(gulp.dest(sbcTemplates.out));
});

gulp.task('default',['styles', 'scripts', 'sbcTemplates'], function () {
	console.log('Running default Task');
	browserSync.init({
		server: './',
	});

	gulp.watch(['src/**/*', '*.html', '*.less'], browserSync.reload);
	gulp.watch(scripts.in, ['scripts']);
	gulp.watch(styles.in, ['styles']);
	gulp.watch(sbcTemplates.in, ['sbcTemplates']);


	//	gulp.watch('*.html', browserSync.)
});
