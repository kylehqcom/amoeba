Meteor.methods({
    "canvas.cell.remove" : function( offsetX, offsetY ) {
        CellCollection.remove({
            x : { $lte : offsetX + Constants.app.cell.radius, $gte : offsetX - Constants.app.cell.radius },
            y : { $lte : offsetY + Constants.app.cell.radius, $gte : offsetY - Constants.app.cell.radius }
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
