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
                left    : player.left,
                top     : player.top,
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
        user_id : Meteor.userId(),
        colour  : chance.color( { format : 'hex' } ),
        left    : (Constants.app.viewport.width / 2) - Constants.app.player.radius,
        top     : (Constants.app.viewport.height / 2) - Constants.app.player.radius,
        radius  : Constants.app.player.radius
    };
};
