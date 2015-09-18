CellCollection = new Mongo.Collection( "cells" );

var Schemas = {};
Schemas.Cell = new SimpleSchema({
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    radius: {
        type: Number,
        label: "The radius of a cell"
    },
    left: {
        type: Number,
        label: "Left position (pixels)",
        index: 1
    },
    top: {
        type: Number,
        label: "Top position (pixels)",
        index: 1
    }
});

CellCollection.attachSchema( Schemas.Cell );
