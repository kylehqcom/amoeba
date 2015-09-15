Constants = {};

// Dimensions in pixels unless otherwise stated
Constants.app = {
    canvas : {
        selector : 'canvas'
    },
    cell : {
        radius : 6
    },
    cells : {
        minimum : 5 // in percent
    },
    map : {
        height : 1600,
        width : 2400
    },
    player : {
        radius : 20
    },
    viewport : {
        height : 400,
        width : 600
    }
};

Query = {};

Constants.query = {
    map : {
        cells : {
            left : { $lte : Constants.app.map.width, $gte : -1 * Constants.app.map.width },
            top  : { $lte : Constants.app.map.height, $gte : -1 * Constants.app.map.height }
        }
    },

    viewport : {
        cells : {
            left : { $lte : Constants.app.viewport.width, $gte : -1 * Constants.app.viewport.width },
            top  : { $lte : Constants.app.viewport.height, $gte : -1 * Constants.app.viewport.height }
        }
    }
};
