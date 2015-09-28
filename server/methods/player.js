Meteor.methods({

    /**
     * @param {Number} <OPTIONAL> by
     **/
    "player.decrease" : function( by ) {
        Player.decrease( by );
    },

    /**
     * @param {Number} <OPTIONAL> by
     **/
    "player.increase" : function( by ) {
        Player.increase( by );
    }

});
