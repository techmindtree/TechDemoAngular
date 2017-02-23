var gulp = require("gulp"),
  runSequence = require("run-sequence"), 
  webserver = require("gulp-webserver"),
  del = require("del");
  
var base = __dirname;
  
var config = {
  files: {
    source: [
      base.concat('/app/*'),
      base.concat('/app/**/*'),
      "!" + base.concat('/app/**/*-spec.js')
    ],
    bower: base.concat('/bower_components/**/*'),
    build: base.concat('/dist/**')
  },

  paths: {
    build: base.concat('/dist'),
    bower: base.concat('/dist/bower_components')
  },
  
  server: {
    livereload: true,
    port: 8000,
    open: true
    //, fallback: 'index.html'
  }
};

gulp.task('default', ['build']);

gulp.task('build', function (done) {
  return runSequence('clear', ['copy', 'copy:bower'], done);
});

gulp.task('clear', function(){
  del.sync(config.files.build);
});

gulp.task('copy', function(){
  return gulp.src(config.files.source)
  .pipe(gulp.dest(config.paths.build));
});

gulp.task('copy:bower', function(){
  return gulp.src(config.files.bower)
  .pipe(gulp.dest(config.paths.bower));
});

gulp.task('server', ['build'], function () {  
  return gulp.src(config.paths.build)
      .pipe(webserver(config.server));
});

gulp.task('watch', function() {
    gulp.watch(config.files.source, ['copy']);
});

gulp.task('dev', ['server', 'watch']);