/*NOTE if multiple variables are being created you can only type 'var' once and then separate the variable by using a comma*/

var gulp = require ('gulp');
var watch = require('gulp-watch');
gulp.task('default', function () { 
    console.log('Hooray - you createde a Gulp task!');
 });

 gulp.task('html', function ( ){
     console.log("Imagine something useful being done to your HTML here.");

 });

 gulp.task('styles', function ( ) {
    console.log("Imagin Sass or PostCSS task runing here.");

});

 gulp.task('watch', function () {
     watch('./app/index.html', function() {
         gulp.start('html');

     });
  

 watch('.//assets/styles/**/*.css', function (){
     gulp.start('sytles');

 });

}); 