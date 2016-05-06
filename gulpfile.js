var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
const pngquant   = require('imagemin-pngquant');

gulp.task('default', function() {
    return gulp.src('src/**/**')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({quality: '65-80', speed: 1})]
      })) // Optimize
    .pipe(gulp.dest('public/src'));
});