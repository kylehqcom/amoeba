Random = {};

Random.constants = {
    string : { length : 10 },
    number : { maximum : 100, minimum : 0 }
}
/**
 * Generate a random number
 * @argument {Number} min  The manimum number a random can be. Defaults to 0
 * @argument {Number} max  The maximum number a random can be. Defaults to 100
 * @returns  {Number}
 */
Random.number = function(min, max) {
    if (isNaN(min)) {
        min = this.constants.number.minimum;
    }

    if (isNaN(max)) {
        max = this.constants.number.maximum;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate a random string
 * @argument {Integer} length   The length of the string, defaults to 10
 * @argument {String}  charSet  A character set to choose from - Defaults [0-9a-zA-Z]
 */
Random.string = function(length, charSet) {
    var string  = '';
    if (isNaN(length)) {
        length = this.constants.string.length;
    }

    if (!charSet) {
        charSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    for (i = 0; i < length; i++) {
        var position = this.number(0, charSet.length);
        string += charSet.substring(position, position + 1);
    }

    return string;
}
