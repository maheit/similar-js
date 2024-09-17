import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import minify from "gulp-minify";
import sourcemaps from 'gulp-sourcemaps';
import del from "delete";
export async function buildTask(cb) {
  const { src, dest } = gulp;
  await del(["dist/**", "!dist"], { force: true });
  // place code for your default task here
  src(["src/*/*.js", "src/*.js"])
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
  cb();
}

// Define the Gulp task
gulp.task('build-js', function () {
  return gulp.src('src/**/*.js')  // Path to your JS files
    .pipe(sourcemaps.init())      // Initialize sourcemaps
    .pipe(concat('bundlev1.min.js'))// Concatenate all JS files into one
    .pipe(uglify())               // Minify the concatenated file
    .pipe(sourcemaps.write('.'))  // Write sourcemaps
    .pipe(gulp.dest('dist'));     // Output to the 'dist' folder
});
