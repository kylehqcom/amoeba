Cells = new Mongo.Collection( "cells" );

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
Cells.attachSchema( Schemas.Cell );

Cells.insertCell = function () {

};

Cells.insertCellFixture = function () {

};