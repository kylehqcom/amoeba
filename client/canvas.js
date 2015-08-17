Canvas = {};

/**
 * Initialize a Canvas
 * @argument {String} selector  A css selector to the Canvas element, generally an id
 * @argument {Object} options   Additional options, eg height & width values
 * @returns  Void
 */
Canvas.initialize = function (selector, options) {

    options = options || {};
    options.height = options.height || Constants.canvas.height;
    options.width = options.width || Constants.canvas.width;

    canvas = $(selector);
    canvas.attr({ "height" : options.height, "width" : options.width });
    context = canvas[0].getContext("2d");

    // Draw vertical grid lines
    for (var x = 0.5; x < options.width; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, options.height);
    }

    // Draw horizontal grid lines
    for (var y = 0.5; y < options.height; y += 10) {
      context.moveTo(0, y);
      context.lineTo(options.width, y);
    }

    context.strokeStyle = "#eee";
    context.stroke();

    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(240, 40);
    context.moveTo(260, 40);
    context.lineTo(500, 40);
    context.moveTo(495, 35);
    context.lineTo(500, 40);
    context.lineTo(495, 45);

    context.moveTo(60, 0);
    context.lineTo(60, 153);
    context.moveTo(60, 173);
    context.lineTo(60, 375);
    context.moveTo(65, 370);
    context.lineTo(60, 375);
    context.lineTo(55, 370);

    context.strokeStyle = "#000";
    context.stroke();
};