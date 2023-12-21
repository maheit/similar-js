import pkg from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import minify from "gulp-minify";
import del from "delete";
export async function buildTask(cb) {
  const { src, dest } = pkg;
  await del(["dist/**", "!dist"], { force: true });
  // place code for your default task here
  src(["src/*/*.js", "src/*.js"])
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
  cb();
}
