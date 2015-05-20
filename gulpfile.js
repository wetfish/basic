var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var minimist = require('minimist');
var extend = require('util')._extend;

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

gulp.task('build', function()
{
    var defaults = { files: '*' };
    var options = extend(defaults, minimist(process.argv.slice(2)));
    var files = options.files.split(',');

    // Loop through all requested files
    for(var i = 0, l = files.length; i < l; i++)
    {
        // Fill in the file path
        files[i] = './src/' + files[i].trim() + '.js';
    }

    // Prepend required files
    files.unshift('./src/_basic.js', './src/_export.js');

    // Generate output with requested files
    gulp.src(files)
    .pipe(concat('basic.generated.js'))
    .pipe(replace(/\n(.)/g, '\n    $1'))        // Make sure everything is indented nicely
    .pipe(insert.prepend('(function()\n{'))     // Prepend singleton opening
    .pipe(insert.append('})();'))               // Append singleton closing
    .pipe(gulp.dest('./dist'));
});
