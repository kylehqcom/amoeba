Utils = {};

/**
 * @returns {string} A fully qualified hexidemal colour
 */
Utils.generateHexColour = function () {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};
