Player = {};

Player.getInstance = function () {
    return PlayerCollection.findOne({ 'user_id' : Meteor.userId() });
};

/**
 * Based on this players location on the canvas map, and the size of
 * the play which effects the zoom level, return an object of
 */
Player.getViewableBounds = function () {

};

/**
 *@param {Number}
 *@returns Int
 */
Player.updateRadius = function ( by ) {

    return PlayerCollection.update(
        {
            user_id : Meteor.userId()
        }, {
            $set : {
                radius : this.getInstance().radius + by
            }
    });
};

/**
 * @param {Number} <OPTIONAL> by
 */
Player.decrease = function ( by ) {

    by = by || 5;

    console.log('In controller Player.decrease by: ' + by);
    return this.updateRadius( - by);
};

/**
 *
 * @param {Number} <OPTIONAL> by
 */
Player.increase = function ( by ) {

    by = by || 5;

    console.log('In controller Player.increase by: ' + by);
    return this.updateRadius( by );
};
