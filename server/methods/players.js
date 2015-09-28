Meteor.methods({

    "players.insert" : function() {
        var instance = Player.getInstance();
        if ( ! instance ) {
            instance = Players.generatePlayer();
        }

        Players.insertPlayer( instance );
    },

    /**
     * Data expected to be  { top : y, left : x, radius : z }
     **/
    "players.upsert" : function( data ) {
        Players.upsertPlayer( data );
    }

});
