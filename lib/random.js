Random = {};

/**
 * Generate a random number
 * @argument {Integer} The maximum number a random can be. Defaults to 100
 * @returns  {Integer}
 */
Random.number = function(maximum) {
    if (typeof maximum == "undefined" || maximum < 100) {
        maximum = 100;
    }
    return Math.floor(Math.random() * maximum);
};
