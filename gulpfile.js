/*
* 处理css脚本
* author：seven
* date:2017/5/9
*
*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');//CSS3自动补全插件
const uglify = require('gulp-uglify');//压缩javascript文件
const rename =require('gulp-rename');//改变管道中的文件名
const jekyll =require('gulp-jekyll');



/**
 * 将_style文件夹的scss文件编译成css文件
 */
gulp.task('sass',() => {
    return gulp.src('_style/gather.scss')
        .pipe(sass({
            // includePaths: ['scss'],
            // onError: function(e) {
            //     console.error(e);
            // },
            outputStyle: 'compressed'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(rename('default.min.css'))
        .pipe(gulp.dest('css'))
        // .pipe(gulp.dest('_site/css'))
});




/**
 * Build with Jekyll
 */
// gulp.task('jekyll', () => {
//     return gulp.src(['.'])
//         .pipe(jekyll({
//             source: '.',
//             destination: '_site'
//         }))
//         .pipe(gulp.dest('_site'));
// });





/**
 * 监听_scss文件的变化
 */
gulp.task('watch',() => {
    gulp.watch('_style/*.scss',[sass]);
});





gulp.task('default',['sass','watch']);

