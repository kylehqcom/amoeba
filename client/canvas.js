Canvas = {};

Canvas.constants = {
    height: 400,
    width: 600,
    cells: {
        minimum: 2 // in percent
    },
    cell: {
        radius: 5
    }
};

/**
 * This Canvas elements context
 */
var ctx;

/**
 * Initialize a Canvas
 * @argument {String} selector  A css selector to the Canvas element, generally an id
 * @argument {Object} options   Additional options, eg height & width values
 * @returns  Void
 */
Canvas.initialize = function (selector, options) {
    options = options || {};
    options.height = options.height || Canvas.constants.height;
    options.width = options.width || Canvas.constants.width;

    canvas = $(selector);
    canvas.attr({ "height" : options.height, "width" : options.width });
    ctx = canvas[0].getContext("2d");

    // Draw vertical grid lines
    for (var x = 0.5; x < options.width; x += 10) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, options.height);
    }

    // Draw horizontal grid lines
    for (var y = 0.5; y < options.height; y += 10) {
      ctx.moveTo(0, y);
      ctx.lineTo(options.width, y);
    }
};

/**
 * Based on the stage dimensions, return random x & y points
 * @returns {Object}
 */
Canvas.generateRandomCoordinates = function () {
    return {
        x : Random.number(Canvas.constants.width),
        y : Random.number(Canvas.constants.height)
    };
};

/**
 * Does this canvas instance have the minimum number of
 * cells by checking the size of this canvas over the amount of area
 * covered by cells. Used to pre-load new cell after initialisation.
 * @returns {Boolean}
 */
Canvas.hasMinimumCellCount = function () {
    // Note i should be the count of a Cells collection
    i = i || 1;
    totalArea = Canvas.constants.width * Canvas.constants.height;
    cellArea  = i * ((this.constants.cell.radius * this.constants.cell.radius) * Math.PI);
    return (this.constants.cells.minimum < ((cellArea/totalArea) * 100));
}

/**
 *
 */
Canvas.renderCell = function() {
    var path = new Path2D(),
        coords = this.generateRandomCoordinates();
    path.arc(coords.x, coords.y, this.constants.cell.radius, 0, Utils.degreesToRadians(360));
    ctx.fillStyle = Colour.generateHexColour();
    ctx.fill(path);
};
