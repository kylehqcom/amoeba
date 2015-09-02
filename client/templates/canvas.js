Canvas = {};

/**
 * Remove a cell from the canvas from a clicks x & y offset
 */
Template.canvas.events( {
    "click" : function (event, template) {
        Meteor.call( "canvas.cell.remove" , event.offsetX, event.offsetY );
    }
} );

// Watch the onReady for the subscription & render cell results
Tracker.autorun( function() {
    if ( CellViewportHandle.ready() ) {
        Canvas.initialize( Constants.app.canvas.selector );
        var results = CellCollection.find( Constants.query.viewport.cells ).fetch();
        _.each( results, function ( result ) {
            Canvas.renderCell( result );
        });
    }
});

/**
 * This Canvas elements context
 */
var ctx;

/**
 * Initialize a Canvas
 * @argument {String} selector  A css selector to the Canvas element, generally an id
 * @returns  Void
 */
Canvas.initialize = function (selector) {
    canvas = $(selector);
    canvas.attr({ "height" : Constants.app.viewport.height, "width" : Constants.app.viewport.width });
    ctx = canvas[0].getContext("2d");

    // Draw vertical grid lines
    ctx.beginPath();
    for ( var x = 0.5; x < Constants.app.viewport.width; x += 10 ) {
      ctx.moveTo( x, 0 );
      ctx.lineTo( x, Constants.app.viewport.height );
    }

    // Draw horizontal grid lines
    for ( var y = 0.5; y < Constants.app.viewport.height; y += 10 ) {
      ctx.moveTo( 0, y );
      ctx.lineTo( Constants.app.viewport.width, y );
    }

    ctx.strokeStyle = "#eee";
    ctx.stroke();
};

/**
 * Note that at this stage we do not take into account any existing cells on the canvas.
 * Therefore a cell may take the position of an existing cell.
 */
Canvas.renderCell = function( cell ) {
    var path = new Path2D();
    path.arc ( cell.x, cell.y, Constants.app.cell.radius, 0, Numbers.degreesToRadians(360) );
    ctx.fillStyle = cell.colour;
    ctx.fill( path );
};
