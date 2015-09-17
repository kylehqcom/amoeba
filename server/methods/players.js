Meteor.methods({

    "players.insert" : function() {
        Players.insertPlayer( Players.generatePlayer() );
    }

});
