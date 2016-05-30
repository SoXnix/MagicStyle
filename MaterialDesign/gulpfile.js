var gulp = require('gulp');
//合并js文件
var concat = require('gulp-concat');
//压缩js文件
var uglify = require('gulp-uglify');
//重命名文件
var rename = require('gulp-rename');
//文件删除
var del = require('del');
//编译sass
var sass = require('gulp-sass');
//css
// 压缩CSS为一行；
var minifyCss = require('gulp-minify-css');


gulp.task('sass', function () {
    gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('all.min.css'))                                  //- 压缩处理成一行
        .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});


gulp.task('clean', function(cb) {
    del(['./dist'], cb)
});


gulp.task('default',['clean','sass','scripts'],function() {
    // gulp.run('scripts');
})
