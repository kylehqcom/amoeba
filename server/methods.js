Meteor.methods({
    "cells.deleteCell" : function(id) {
        Cells.deleteCell(id);
    },

    "cells.insertCell" : function( cell, callback ) {
        Cells.insertCell( cell, callback );
    }
});
