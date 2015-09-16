Canvas = {};

/**
 * Remove a cell from the canvas from a clicks x & y offset
 */
//Template.canvas.events( {
//    "click" : function ( event, template ) {
//        Meteor.call( "canvas.cell.remove" , event.offsetX, event.offsetY );
//    }
//} );

// Watch the onReady for the subscription & render cell results
Tracker.autorun( function() {
    if ( CellViewportHandle.ready() ) {

        // Cache these values, there's no point rendering all of the cells

        //var cells = CellCollection.find( Constants.query.viewport.cells ).fetch();
        //_.each( cells, function ( cell ) {
        //    Canvas.renderCell( cell );
        //});

        //if ( PlayerViewportHandle.ready() ) {
        //   var players = PlayerCollection.find( Constants.query.viewport.cells ).fetch();
        //    _.each( players, function ( player ) {
        //        Canvas.renderCell( player );
        //    });
        //}
    }
});

/**
 * Initialize a Canvas
 * @argument {String} selector  A css selector to the Canvas element, generally an id
 * @returns  Void
 */
Canvas.initialize = function ( selector ) {
    canvasElm = $( selector );
    canvasElm.attr({
        "height" : Constants.app.viewport.height,
        "width" : Constants.app.viewport.width
    });

     // Draw the grid lines [x1, y1, x2, y2]
    for ( var i = 0; i < Constants.app.viewport.width; i += 10 ) {

        // Horizontal line
        canvas.add(
            new fabric.Line(
                [ 0, i, Constants.app.viewport.width, i ],
                { strokeWidth: 0.1, stroke: "eee" }
            )
        );

        // Vertical line
        canvas.add(
            new fabric.Line(
                [ i, 0, i, Constants.app.viewport.height],
                { strokeWidth: 0.1, stroke: "eee" }
            )
        );
    }
};

/**
 * Note that at this stage we do not take into account any existing cells on the canvas.
 * Therefore a cell may take the position of an existing cell.
 */
//Canvas.renderCell = function( cell ) {
//    canvas.add(
//        new fabric.Circle({
//            radius: cell.radius, fill: cell.colour, left: cell.left, top: cell.top
//        })
//    );
//};
