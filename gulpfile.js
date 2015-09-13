var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');

gulp.task('bundle',function(){
	return browserify({
		entries:'app/main.jsx',
		debug:true,
	})
	.transform(babelify.configure({
		stage:0,
		sourceMaps:true
	}))
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));
});
