import ghPages from 'gulp-gh-pages';

export const push = () => {
    return app.gulp.src('./dist/**/*')
        .pipe(ghPages());

}
