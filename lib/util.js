Utils = {};

/**
 * @returns {string} A fully qualified hexidemal colour
 */
Utils.generateHexColour = function () {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

/**
 * Based on the stage dimensions, return random x & y points
 */
Utils.generateRandomCoordinates = function () {
    return { x:2, y:4 };
};
