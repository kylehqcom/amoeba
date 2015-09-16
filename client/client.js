/**
 * So... cells should be play centric, eg the only cells to display should
 * be based on a players position on the map and the viewport. We should
 * assoicate all of the cell objects on a player instance and intersect/difference
 * the cells that are changed on move events.
 */

// Loaded on DOM ready
Meteor.startup( function() {
    $.getScript('vendor/js/fabric.js', function () {
        canvas = new fabric.StaticCanvas( Constants.app.canvas.selector, {
            height : Constants.app.viewport.height,
            width : Constants.app.viewport.width
        });

        // Disable group selection
        canvas.selection = false;

        // Init the Canvas grid lines etc
        Canvas.initialize( Constants.app.canvas.selector );
    });
});
