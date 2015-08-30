
var handle = Meteor.subscribe( "cells" ),
    CellCollection = new Mongo.Collection( "cells" );

// Watch the onReady for the subscription & render cell results
Tracker.autorun( function() {
    if ( handle.ready() ) {
        Canvas.initialize( Constants.app.canvas.selector );
        var results = CellCollection.find().fetch();
        _.each( results, function ( result ) {
            Canvas.renderCell( result );
        });
    }
});


//var boom = setInterval( function() {
//    console.log( "do doc deleted" );
//    Meteor.call( 'cells.deleteCell' );
//    if ( ! CellCollection.find().count() ) {
//        clearInterval( boom );
//    }
//}, 1000);
