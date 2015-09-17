Canvas = {};

Template.canvas.onRendered(function () {
    /**
     * Due to fabric thinking it is in "Node Server" mode if
     * no window object is found, load FabricJs onRendered event
     */
    if ( "undefined" === typeof ( fabricCanvas ) ) {
        $.getScript('vendor/js/fabric.js', function () {
            Canvas.initialize();
        });
    } else {
        Canvas.initialize();
    }
});

/**
 * Remove a cell from the canvas from a clicks x & y offset
 */
//Template.canvas.events( {
//    "click" : function ( event, template ) {
//        Meteor.call( "canvas.cell.remove" , event.offsetX, event.offsetY );
//    }
//} );

// Watch the onReady for the subscription & render cell results
Tracker.autorun( function () {

    if ( PlayerViewportHandle.ready() ) {
       var players = PlayerCollection.find( Constants.query.viewport.cells ).fetch();
        _.each( players, function ( player ) {
            Canvas.renderCell( player );
        });
    }

    if ( CellViewportHandle.ready() ) {

        // Cache these values, there's no point rendering all of the cells

        //var cells = CellCollection.find( Constants.query.viewport.cells ).fetch();
        //_.each( cells, function ( cell ) {
        //    Canvas.renderCell( cell );
        //});

    }
});

/**
 * Initialize a Canvas
 * @returns  Void
 */
Canvas.initialize = function () {

    fabricCanvas = new fabric.StaticCanvas( Constants.app.canvas.selector, {
        height : Constants.app.viewport.height,
        width : Constants.app.viewport.width
    });

    // Disable group selection
    fabricCanvas.selection = false;

    Canvas.renderGrid();
    Meteor.call( "players.insert" );
};

Canvas.renderGrid = function () {
    canvasElm = $( Constants.app.canvas.selector );
    canvasElm.attr({
        "height" : Constants.app.viewport.height,
        "width" : Constants.app.viewport.width
    });

     // Draw the grid lines [x1, y1, x2, y2]
    for ( var i = 0; i < Constants.app.viewport.width; i += 10 ) {

        // Horizontal line
        fabricCanvas.add(
            new fabric.Line(
                [ 0, i, Constants.app.viewport.width, i ],
                { strokeWidth: 0.1, stroke: "eee" }
            )
        );

        // Vertical line
        fabricCanvas.add(
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
Canvas.renderCell = function ( cell ) {
    fabricCanvas.add(
        new fabric.Circle({
            radius: cell.radius, fill: cell.colour, left: cell.left, top: cell.top
        })
    );
};
