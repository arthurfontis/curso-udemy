const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"] // recent version
        }))
        .pipe(uglify()) //minificado
        .on('error', err => console.log(err)) // pegar algum evento
        .pipe(concat('codigo.min.js')) //concatenar
        .pipe(gulp.dest('build'))

    return cb()
}

function fim(cb){
    console.log("Fim !!!")
    return cb()
}

exports.default = series(transformacaoJS, fim)