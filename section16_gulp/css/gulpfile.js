const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCss() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) //conversao css
        .pipe(uglifycss({"uglyComments" : true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHtml(cb){
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))

    return cb()
}

exports.default = series(transformacaoCss, copiarHtml)