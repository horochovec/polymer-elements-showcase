module.exports = function(gulp, $) {

	gulp.task('mobile-copy-android', function () {

        gulp.src($.config.paths.dist + '/*.html')
            .pipe(gulp.dest($.config.paths.mobile + '/www/'));

        gulp.src($.config.paths.dist + '/images/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/images/'));

        gulp.src($.config.paths.dist + '/javascript/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/javascript/'));

        gulp.src($.config.paths.dist + '/styles/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/styles/'));

        gulp.src($.config.paths.dist + '/vulcanize/**')
            .pipe(gulp.dest($.config.paths.mobile + '/www/vulcanize/'));

        gulp.src($.config.paths.resources + '/**')
            .pipe(gulp.dest($.config.paths.mobile + '/resources/'));

        gulp.src($.config.paths.src + '/bower_components/webcomponentsjs/webcomponents.min.js')
            .pipe(gulp.dest($.config.paths.mobile + '/www/bower_components/webcomponentsjs/'));
            
        gulp.src($.config.paths.src + '/bower_components/web-animations-js/web-animations-next-lite.min.js.map')
            .pipe(gulp.dest($.config.paths.mobile + '/www/vulcanize/'));    

	});

	gulp.task('mobile-clean-resources-android', function() {
		return $.del($.config.paths.mobile + '/resources/*', {force: true});
	});

	gulp.task('mobile-clean-www-android', function () {
        console.log($.config.paths.mobile);
		return $.del($.config.paths.mobile + '/www/*', {force: true});
	});

	gulp.task('mobile', function( done ) {
		$.runSequence('mobile-clean-resources-android', 'mobile-clean-www-android', 'mobile-copy-android', done);
	});

};
