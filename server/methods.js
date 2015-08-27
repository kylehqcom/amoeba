Meteor.methods({
    'cells.deleteCell' : function() {
        var result = Cells.deleteCell();
        console.log('server delete ' + result );
        return result;
    },

    'cells.insertCell' : function( cell, callback ) {
        Cells.insertCell( cell, callback );
    }
});
