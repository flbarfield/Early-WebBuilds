//////////REQUIRED////////////////
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	rename = require('gulp-rename');
	

//////////SCRIPTS TASK/////////////

//name of task, function

gulp.task('scripts', function () {
	'use strict';
	// Globs are a way to specify sets of filenames
	//with wildcard characters. css/*.css  would 
	//mean everything ending in .css in the css 
	//directory. css/**/*.css would be everything 
	//in the directory AND child directories. !css/style.css
	//would exclude the style.css file. *.+(js|css) would
	//match all files in the root directory ending in .js or
	//css.
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		//dest, destination
		.pipe(gulp.dest('app/js'));
	//code for default task
});

//////////COMPASS & SASS TASK/////////////
//Compresses your CSS
gulp.task('compass', function () {
	'use strict';
	gulp.src('app/scss/style.css')
		.pipe(compass({
			config_file: './config.rb',
			css: 'app/css',
			sass: 'app/scss',
			require: ['susy']
		}))
		.pipe(gulp.dest('app/css/'));
});

//////////WATCH TASK/////////////
//makes it so gulp doesn't have to be typed
// to see changes. Autoupdates.
gulp.task('watch', function () {
	'use strict';
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['compass']);
});


//////////DEFAULT TASK/////////////
//the task that starts the call for all
//the other tasks

gulp.task('default', ['scripts', 'compass', 'watch']);

// Extra notes: "pipe it out" moving things from one location to another.
// Think mario! It also uglifies and renames, however. But it could fit
// into the change-state theme.