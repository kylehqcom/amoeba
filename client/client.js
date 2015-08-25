
Template.canvas.rendered = function() {

    // Initialize the canvas
    Canvas.initialize( "#canvas" );
    Meteor.subscribe( "cells", function () {
        CellCollection = new Mongo.Collection( "cells" );
        _.each( CellCollection.find().fetch(), function ( result ) {
            Canvas.renderCell( result );
        });
    });

    // Check if we have enough cells on the canvas at startup
    //i = 1;
    //while ( ! Canvas.hasMinimumCellCount( i ) ) {
    //
    //   Always have a break on while loops!
    //  if ( i > 100000 ) {
    //      console.log( "we broke " + i );
    //      break;
    //  }
    //
    //  Canvas.renderCell();
    //  i ++;
    //}
};

