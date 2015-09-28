Meteor.methods({

    /*
     * Currently these methods are only for testing. eg: we won't allow a client
     * to run a delete
     */

    "canvas.cell.remove" : function( left, top ) {
        // Best to be safe when using Collection.remove()
        if ( _.isUndefined(left) || _.isUndefined(top) ) {
            return;
        }

        CellCollection.remove({
            x : { $lte : left + Constants.app.cell.radius, $gte : left - Constants.app.cell.radius },
            y : { $lte : top + Constants.app.cell.radius, $gte : top - Constants.app.cell.radius }
        });
    },

    "cells.deleteCell" : function( id ) {
        // TODO: Take an id from the caller. At this stage grab a random id
        var results = CellCollection.find( Constants.query.viewport.cells ).fetch();
        if ( results.length ) {
            result = chance.pick( results );
            console.log(result);
            Cells.deleteCell( result._id );
        }
    },

    "cells.insertCell" : function( callback ) {
        Cells.insertCell( Cells.generateCell(), callback );
    }
});
