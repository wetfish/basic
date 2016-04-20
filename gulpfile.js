var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var minimist = require('minimist');
var extend = require('util')._extend;
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var qunit = require('gulp-qunit');

// Helper object for compiling scripts
var scripts =
{
    // Function for compiling src scripts into single dist file
    compile: function(input, output)
    {
        // When there are no input files defined, use these as the defaults
        if(!input || !Array.isArray(input))
        {
            input =
            [
                './src/_basic.js',      // Load the constructor first
                './src/deps/*.js',      // Followed by dependencies
                './src/*.js',           // Then load everything else
            ];
        }

        // Default output filename
        if(!output)
        {
            output = 'basic.js';
        }

        // Generate the source file
        gulp.src(input)
        .pipe(concat(output))
        .pipe(replace(/\n(.)/g, '\n    $1'))        // Make sure everything is indented nicely
        .pipe(insert.prepend('(function()\n{'))     // Prepend singleton opening
        .pipe(insert.append('})();'))               // Append singleton closing
        .pipe(gulp.dest('./dist'));

        // Now generate a minified version
        gulp.src('./dist/' + output)
        .pipe(rename(output.replace(/.js$/, '.min.js')))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));

        // Now run tests
        scripts.test();
    },

    watch: function()
    {
        watch('src/**/*.js', function ()
        {
            scripts.compile();
        });
    },

    build: function()
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
        scripts.compile(files, 'basic.generated.js');
    },

    test: function()
    {
        gulp.src('./test/test-page.html').pipe(qunit());
    },
}

gulp.task('default', ['compile', 'watch']);
gulp.task('compile', scripts.compile);
gulp.task('watch', scripts.watch);
gulp.task('build', scripts.build);
gulp.task('test', scripts.test);
