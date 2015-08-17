if (Meteor.isClient) {

    // Draw the canvas
    Template.canvas.rendered = function() {
        Canvas.initialize("#canvas");

    };

}
