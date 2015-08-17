Colour = {};

/**
 * @returns {String} A fully qualified hexidemal colour
 */
Colour.generateHexColour = function () {
    return '#'+Math.floor(Random.number(16777215)).toString(16);
};
