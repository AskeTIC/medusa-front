'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var nib = require('nib');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var historyApiFallback = require('connect-history-api-fallback');

//server web desarrollo
gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 3031,
		livereload: true,
		middleware: function(){
			return [ historyApiFallback ];
		}
	
	});
});

//Busca errores en el js y los muestra por pantalla
gulp.task('jshint', function(){
	return gulp.src('./app/scripts/**/*.js')
		.pipe(jshint('jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

//Livereload
gulp.task('html', function(){
	gulp.src('./partials/*.html')
                .src('./*.html')
                .pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(['./js/app/.js', './Gulpfile.js'], ['jshint'])
	gulp.watch(['./*.html', './partials/*.html', './views/*.html']);
});

gulp.task('default', ['server', 'watch']);
