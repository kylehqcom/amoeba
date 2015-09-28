Players = {};

/**
 * Refer Schemas.Player for expected object values. Note we always
 * use this authenticated user via Meteor.
 *
 * @param { Object }
 * @return { String } The new _id or an error object if a callback is provided
 */
Players.insertPlayer = function ( player, callBack ) {
    return PlayerCollection.upsert(
        {
            user_id : Meteor.userId()
        }, {
            $set : {
                user_id : Meteor.userId(),
                colour  : player.colour,
                x       : player.x,
                y       : player.y,
                radius  : player.radius
            }
        }, callBack );
};

/**
 * Refer Schemas.Player for expected object values. Note we always
 * use this authenticated user via Meteor.
 *
 * @param { Object }
 * @return { String } The new _id or an error object if a callback is provided
 */
Players.upsertPlayer = function ( player, callBack ) {
    return PlayerCollection.upsert(
        {
            user_id : Meteor.userId()
        }, {
            $set : {
                colour : player.colour,
                radius : player.radius,
                x      : player.x,
                y      : player.y
            }
        }, callBack );
};

/**
 * Generate a Cell with random values
 * @return { Object }
 */
Players.generatePlayer = function () {
    return {
        user_id : Meteor.userId(),
        colour  : chance.color( { format : 'hex' } ),
        x       : (Constants.app.viewport.width / 2),
        y       : (Constants.app.viewport.height / 2),
        radius  : Constants.app.player.radius
    };
};
