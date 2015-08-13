Utils = {};

/**
 * @returns {String} A fully qualified hexidemal colour
 */
Utils.generateHexColour = function () {
    return '#'+Math.floor(this.generateRandomNumber(16777215)).toString(16);
};

/**
 * Based on the stage dimensions, return random x & y points
 * @returns {Object}
 */
Utils.generateRandomCoordinates = function () {
    return {
        x : this.generateRandomNumber(Constants.stage.width),
        y : this.generateRandomNumber(Constants.stage.height)
    };
};

/**
 * Generate a random number
 * @argument {Integer} The maximum number a random can be. Defaults to 100
 * @returns {Integer}
 */
Utils.generateRandomNumber = function(maximum) {
    if (typeof maximum == "undefined" || maximum < 100) {
        maximum = 100;
    }
    return Math.floor(Math.random() * maximum);
};
