
var handle = Meteor.subscribe( "cells" ),
    CellCollection = new Mongo.Collection( "cells" ),
    deletes = true;

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


if ( handle.ready() && ! CellCollection.find().count() ) {
  deletes = false;
}

var boom = setInterval( function() {
    console.log( "do doc deleted" );
    Meteor.call( 'cells.deleteCell' );
}, 1000);

if ( ! deletes ) {
    clearInterval( boom );
}
