// Include gulp
var gulp = require( "gulp" ),
    root_dir = "~/Workspace/amoeba";

gulp.task( "vendor", function() {
    return gulp
        .src( "*.js" )
        .pipe( gulp.dest(root_dir + "/public/vendor") );
});

// Default Task
gulp.task("default", [ "vendor" ]);