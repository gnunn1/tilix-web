const gulp = require("gulp")
const imagemin = require('gulp-image')
const uglify = require('gulp-uglify')
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")
const livreload = require("gulp-livereload")
const concat = require('gulp-concat')


// compile sass files, auto prefix it and concat all the files
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('tilix.css'))
        .pipe(gulp.dest('./assets/css/'))
})

// minify images
gulp.task('image', function () {
    return gulp.src('./src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/images/'))
})
// uglify js files
gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
          .pipe(uglify())
          .pipe(concat('tilix.js'))
          .pipe(gulp.dest('./assets/js/'))
})
// default task to run before pusing a new commit
gulp.task('default', ['sass', 'image', 'js'])

//  watch the src files for any modification
gulp.task('watch', function () {
  livreload.listen({basePath: './assets'})
  gulp.watch('./src/js/*.js' , ["js"])
  gulp.watch('./src/sass/**/*.scss', ['sass'])
  gulp.watch('./src/images/**/*.*', ['image'])
  gulp.watch(['./assets/css/*.css', './assets/js/*.js', '*.html', '*.md']).on('change', function (event) {
    console.log(event.path)
  })
});
