"use strict";

var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
let nodemon = require('gulp-nodemon');
let server;

gulp.task('bundle',function(){
	return browserify({
		entries:'app/main.js',
		debug:true,
	})
	.transform(babelify.configure({
		
		sourceMaps:true
	}))
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));
});

gulp.task('serve',['start-server'],()=>{
  gulp.watch(['app/**/*.*','server/**/*.*'],['start-server']);
});

gulp.task('start-server',['bundle'],()=>{
  var serverPath = './server/server.js';

  if (server){
    server.close();
    delete require.cache[require.resolve(serverPath)];
  }

  server = require(serverPath);
});
