Meteor.methods({
    "cells.deleteCell" : function( id ) {
        // TODO: Take an id from the caller. At this stage grab a random id
        var results = CellCollection.find( Constants.query.viewport ).fetch();
        if ( results.length ) {
            result = chance.pick( results );
            Cells.deleteCell( result._id );
        }
    },

    "cells.insertCell" : function( callback ) {
        Cells.insertCell( Cells.generateCell(), callback );
    }
});
