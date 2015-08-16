Utils = {};

/**
 * @returns {String} A fully qualified hexidemal colour
 */
Utils.generateHexColour = function () {
    return '#'+Math.floor(Random.number(16777215)).toString(16);
};

/**
 * Based on the stage dimensions, return random x & y points
 * @returns {Object}
 */
Utils.generateRandomCoordinates = function () {
    return {
        x : Random.number(Constants.canvas.width),
        y : Random.number(Constants.canvas.height)
    };
};
