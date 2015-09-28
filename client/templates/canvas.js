Canvas = {};

/**
 * An name/object pair of Fabric Canvas objects
 */
fabricCanvases = {};

/**
 * The current fabric player object
 */
var fabricPlayer;

// Watch the onReady for the subscription & render cell results
Tracker.autorun( function () {
    if ( PlayerViewportHandle.ready() ) {

        console.log('PlayerViewportHandle.ready()');

        player = PlayerCollection.findOne({ user_id: Meteor.userId() });
        if (_.isUndefined ( player ) ) {
            console.log('we have a player all ok');
        } else {
            console.log('why we no find a player??');
        }

        //} else {
        //    Meteor.call( "players.upsert", player );
        //}

        //if (player) {
        //    Canvas.renderGrid( player.radius );
        //    Meteor.call( "players.insert" );
        //}


        // Get all of the cells for this player viewport


        // Assign the cells against the player instance
        // player.cells = cells;

        Canvas.renderPlayer( player );
    }
});

Template.canvas.onRendered(function () {
    /**
     * Due to fabric thinking it is in "Node Server" mode if
     * no window object is found, load FabricJs onRendered event
     */
    if ( _.isEmpty( fabricCanvases ) ) {
        $.getScript('vendor/js/fabric.js', function () {
            Canvas.initialize();
        });
    } else {
        Canvas.initialize();
    }
});

/**
 * Initialize the Canvas objects and render the initial grid
 * @returns  Void
 */
Canvas.initialize = function () {

    _.each(Constants.app.canvas.selectors, function ( key, selector ) {
        canvasElm = $( selector );
        canvasElm.attr({
            "height" : Constants.app.viewport.height,
            "width" : Constants.app.viewport.width
        });

        fabricCanvases[key] = new fabric.StaticCanvas( selector, {
            height : Constants.app.viewport.height,
            renderOnAddRemove : false, // Stop auto rendering
            selection : false, // Disable group selection
            width : Constants.app.viewport.width
        });

    });

    // Now render the grid
    Canvas.renderGrid();
};

/**
 *
 * @param Number scaleRatio
 */
Canvas.renderGrid = function ( scaleRatio ) {

    // Based on the players size/radius, render the grid to the correct zoom
    scaleRatio = scaleRatio || 1;

    // scaleRatio
    console.log ('about to render grid with a player radius of ' + scaleRatio);

    var gridCanvas = fabricCanvases.grid;
    gridCanvas.clear();

     // Draw the grid lines [x1, y1, x2, y2]
    for ( var i = 0; i < Constants.app.viewport.width; i += 50 ) {

        // Horizontal line
        gridCanvas.add(
            new fabric.Line(
                [ 0, i * scaleRatio, Constants.app.viewport.width, i * scaleRatio ],
                { strokeWidth: 0.1, stroke: "eee" }
            )
        );

        // Vertical line
        gridCanvas.add(
            new fabric.Line(
                [ i * scaleRatio, 0, i * scaleRatio, Constants.app.viewport.height],
                { strokeWidth: 0.1, stroke: "eee" }
            )
        );
    }

    // Manually call render all
    gridCanvas.renderAll();
    fabricCanvases.grid = gridCanvas;
};

/**
 * Render a fabric Circle object from the Player object
 */
Canvas.renderPlayer = function ( player ) {

    if ( _.isUndefined( fabricPlayer ) ) {
        fabricPlayer = new fabric.Circle();
    }

    fabricPlayer.set({
        fill: player.colour,
        left : player.x - player.radius,
        radius: player.radius,
        top : player.y - player.radius
    });

    Canvas.renderGrid( player.radius / 100 );

    console.log( 'do we contain ' + fabricCanvases.player.contains( fabricPlayer ));
    console.log( 'the length of player objects ' + fabricCanvases.player.getObjects().length );
    console.log( 'the length of grid objects ' + fabricCanvases.grid.getObjects().length );

    // Remove the instance and then re-add
    fabricCanvases.player.remove( fabricPlayer ).add( fabricPlayer ).renderAll();
};
