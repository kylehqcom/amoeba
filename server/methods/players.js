Meteor.methods({

    "players.insert" : function() {
        Players.insertPlayer( Players.generatePlayer() );
    },

    /**
     * Data expected to be  { top : y, left : x, radius : z }
     **/
    "players.upsert" : function( data ) {
        Players.upsertPlayer( data );
    }

});
