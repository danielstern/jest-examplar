"use strict";

var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let server;

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

gulp.task('serve',['bundle'],()=>{
  var serverPath = './server/server.js';

  if (server){
    server.close();
    delete require.cache[require.resolve(serverPath)];
  }

  server = require(serverPath);
  gulp.watch(['app/**/*.*','server/**/*.*'],['serve']);
})
