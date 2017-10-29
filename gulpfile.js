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
// var dataFile = require(srcPath + 'scripts/main.js');
var srcPath = 'src/',
			distPath = 'dist/',
			rootPath = './',
			images = {
				in: srcPath + 'img/*.*',
				out: distPath + 'img'
			},
			styles = {
				in: srcPath + 'styles/*.less',
				out: distPath + 'styles/'
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
		.pipe(sourceMaps.write(rootPath + 'maps'))
		.pipe(gulp.dest(scripts.out))
		.pipe(browserSync.stream());
	console.log('JavaScript file or files uglified');
});

gulp.task('sbcTemplates', function(){
	var templateData = {
		companyName: 'Summer Beauty Cosmetic',
		address:	'Werdstrasse 40, 2.Stock',
		postCode: '8004 ',
		city: 'Zürich, ',
		country: 'Switzerland',
		phoneNumber: '+41 (0)79 336 20 66',
		email: 'info@summerbeautycosmetic.com'
	};
	var options = {
		batch: [srcPath + 'sbcTemplates/hbspatials']
	};
console.log(templateData.name);
	return gulp.src([sbcTemplates.in, !sbcTemplates + 'hbspatials/**/*.hbs'])
		.pipe(handlebars(templateData, options))
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
	gulp.watch(['src/**/*', '*.html', srcPath +'styles/**/*.less'], browserSync.reload);
	gulp.watch(scripts.in, ['scripts']);
	gulp.watch(srcPath +'styles/**/*.less', ['styles']);
	gulp.watch(sbcTemplates.in, ['sbcTemplates']);


	//	gulp.watch('*.html', browserSync.)
});
