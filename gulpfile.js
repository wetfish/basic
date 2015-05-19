var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var insert = require('gulp-insert');

gulp.task('default', function()
{
    var files =
    [
        './src/_basic.js',      // Load the constructor first
        './src/*.js',           // Then load everything else
    ];
    
    gulp.src(files)
    .pipe(concat('basic.js'))
    .pipe(replace(/\n(.)/g, '\n    $1'))        // Make sure everything is indented nicely
    .pipe(insert.prepend('(function()\n{'))     // Prepend singleton opening
    .pipe(insert.append('})();'))               // Append singleton closing
    .pipe(gulp.dest('./dist'));
});
