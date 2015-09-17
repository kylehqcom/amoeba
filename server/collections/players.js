PlayerCollection = new Mongo.Collection( "players" );

var Schemas = {};
Schemas.Player = new SimpleSchema({
    user_id: {
        type: String,
        label: "The user_id of a player",
        index: 1,
        unique: true
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
 * Refer Schemas.Player for expected object values. Note we always
 * use this authenticated user via Meteor.
 *
 * @param { Object }
 * @return { String } The new _id or an error object if a callback provided
 */
Players.insertPlayer = function ( player, callBack ) {
    return PlayerCollection.upsert(
        {
            user_id : Meteor.userId()
        }, {
            $set : {
                user_id : Meteor.userId(),
                colour  : player.colour,
                left    : player.left,
                top     : player.top,
                radius  : player.radius
            }
        }, callBack );
};

/**
 * Generate a Cell with random values
 * @return { Object }
 */
Players.generatePlayer = function () {
    return {
        colour : chance.color( { format : 'hex' } ),
        left   : Constants.app.viewport.width / 2,
        top    : Constants.app.viewport.height / 2,
        radius : Constants.app.player.radius
    };
};
