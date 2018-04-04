
var gulp = require ('gulp');
var postcss = require('gulp-postcss'),  /*NOTE a comma can be used when there is a string of variables but the last one needs the semi-colon*/
autoprefixer = require('autoprefixer'),
cssvars = require ('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');




gulp.task('styles', function ( ) {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function (errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
    
});