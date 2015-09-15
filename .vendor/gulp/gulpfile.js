// Include gulp
var gulp = require( "gulp" ),
    bower = require('bower'),
    src_root_dir = "../../",
    src_vendor_dir = src_root_dir + ".vendor",
    src_bower_dir = src_vendor_dir + "/bower",
    src_gulp_dir = src_vendor_dir + "/gulp",
    src_public = src_root_dir + "/public",
    src_public_vendor = src_public + "/vendor";

// Install Bower dependencies
gulp.task ( "bower:install", function ( callback ) {
    bower.commands.install( [], { save : true }, { cwd : src_bower_dir })
        .on( "end", function( installed ) {
            callback(); // notify gulp that this task is finished
    });
});

// Process Vendor JS files afer bower:install
gulp.task( "vendor:js", [ "bower:install" ], function() {
    return gulp
        .src( src_bower_dir + "/bower_components/fabric.js/dist/fabric.js" )
        .pipe( gulp.dest( src_public_vendor + "/js" ) );
});

// Default Task
gulp.task( "default", [ "bower:install", "vendor:js" ]);
