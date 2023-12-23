import pkg from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import minify from "gulp-minify";
import del from "delete";
import ts from "gulp-typescript";
import tsConfig from "./tsconfig.json";
const tsProject = ts.createProject("tsconfig.json");

export async function build(cb) {
  const { src, dest } = pkg;
  await del(["dist/**", "!dist"], { force: true });
  // place code for your default task here
  // tsProject
  //   .src()
  //   .pipe(tsProject())
  //   .js // .src(["src/*/*.js", "src/*.js"])
  // .pipe(concat("index.js"))
  // .pipe(uglify())
  // .pipe(dest("dist"));
  src("src/**/*.js")
    // .pipe(sourcemaps.init())
    .pipe(ts({ ...tsConfig }))
    // .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../lib' }))
    .pipe(gulp.dest("dist"));
  cb();
}
