var fs = require('fs');
var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var merge = require('merge-stream');

var assetsDir = 'assets';
var assetsFilesGlob = assetsDir + '/**/*';

gulp.task('sync', function() {
  var publisher = awspublish.create(
    JSON.parse(fs.readFileSync('aws.json', 'utf-8')));

  var jsAssetsFilesGlob = assetsFilesGlob + '.js';
  var cssAssetsFilesGlob = assetsFilesGlob + '.css';

  var gzip = gulp.src([jsAssetsFilesGlob, cssAssetsFilesGlob])
    .pipe(awspublish.gzip());

  var plain = gulp.src([
    assetsFilesGlob,
    '!' + jsAssetsFilesGlob,
    '!' + cssAssetsFilesGlob
  ]);

  var headers = {
    'Cache-Control': 'max-age=31536000, public'
  };

  merge(gzip, plain)
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
