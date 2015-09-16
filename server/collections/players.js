// Add indexes to this Collection
Meteor.startup( function () {
    PlayerCollection._ensureIndex( { "x" : 1, "y" : 1 } );
    PlayerCollection._ensureIndex( { "radius" : 1 } );
});

PlayerCollection = new Mongo.Collection( "players" );

var Schemas = {};
Schemas.Player = new SimpleSchema({
    user_id: {
        type: Number,
        label: "The radius of a player",
        index: 1
    },
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    radius: {
        type: Number,
        label: "The radius of a player"
    },
    left: {
        type: Number,
        label: "Left position (pixels)",
        index: 1
    },
    top: {
        type: Number,
        label: "Top position (pixels)",
        index: 1
    }
});

PlayerCollection.attachSchema( Schemas.Player );

Players = {};

/**
 * Refer Schemas.Cell for expected object values
 * @param { Object }
 * @return { String } The new _id or an error object if a callback provided
 */
Players.insertPlayer = function ( player, callBack ) {
    return PlayerCollection.insert( player, callBack );
};

/**
 * Generate a Cell with random values
 * @return { Object }
 */
Players.generatePlayer = function () {
    return {
        "colour" : chance.color( { format : 'hex' } ),
        "left"   : Constants.app.viewport.width / 2,
        "top"    : Constants.app.viewport.height / 2,
        "radius" : Constants.app.player.radius
    };
};
