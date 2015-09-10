// Include gulp
var gulp = require( "gulp" ),
    src_root_dir = "../",
    dest = "/public/vendor";

// Process Vendor JS files
gulp.task( "vendor:js", function() {
    return gulp
        .src( src_root_dir + "/private/bower_components/fabric.js/dist/fabric.js" )
        .pipe( gulp.dest( src_root_dir + dest + "/js" ) );
});

// Default Task
gulp.task("default", [ "vendor:js" ]);
