// Loaded on Dom ready
Meteor.startup( function() {
    $.getScript('vendor/js/fabric.js', function () {
        canvas = new fabric.StaticCanvas(Constants.app.canvas.selector, {
            height : Constants.app.viewport.height,
            width : Constants.app.viewport.width
        });
        canvas.selection = false; // disable group selection

        // Init the Canvas grid lines etc
        Canvas.initialize( Constants.app.canvas.selector );
    });
});
