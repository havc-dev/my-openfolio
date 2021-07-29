const { series, src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


function imagesMinify() {
    return src('src/images/**/*')
        .pipe( imagemin() )
        .pipe( dest('public/assets/img') )
        .pipe( notify({ message: 'Minified jpg image'}) )
}

function versionWebp() {
    return src('public/assets/img/**/*')
        .pipe( webp() )
        .pipe( dest('public/assets/img'))
        .pipe( notify({ message: 'Webp version ready'}))
}


exports.imagesMinify = imagesMinify;
exports.versionWebp = versionWebp;
exports.default = series( imagesMinify, versionWebp );