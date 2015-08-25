CellCollection = new Mongo.Collection( "cells" );

var Schemas = {};
Schemas.Cell = new SimpleSchema({
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    x: {
        type: Number,
        label: "Position X (pixels)"
    },
    y: {
        type: Number,
        label: "Position Y (pixels)"
    }
});

CellCollection.attachSchema( Schemas.Cell );

Cells = {};

/**
 * Refer Schemas.Cell for expected object values
 * @param { Object }
 * @return { String } The new _id or an error object if a callback provided
 */
Cells.insertCell = function ( cell, callBack ) {
    return CellCollection.insert( cell, callBack );
};

/**
 * Does this canvas instance have the minimum number of
 * cells by checking the size of this canvas over the amount of area
 * covered by cells. Used to pre-load new cell after initialisation.
 * @returns {Boolean}
 */
Cells.hasMinimumCellCount = function ( currentCount ) {
    // Note i should be the count of a Cells collection
    currentCount = currentCount || 0;
    totalArea = App.constants.canvas.width * App.constants.canvas.height;
    cellArea  = currentCount * ( ( App.constants.cell.radius * App.constants.cell.radius ) * Math.PI );
    return ( App.constants.cells.minimum < ( ( cellArea / totalArea ) * 100 ) );
};
