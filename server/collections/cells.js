// Add indexes to this Collection
Meteor.startup( function () {
    CellCollection._ensureIndex( { "x": 1, "y" : 1 } );
});

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
        label: "Left position (pixels)"
    },
    top: {
        type: Number,
        label: "Top position (pixels)"
    }
});

CellCollection.attachSchema( Schemas.Cell );

Cells = {};

/**
 * Play delete method to confirm reactivity
 * @returns { Bool }
 */
Cells.deleteCell = function (id) {
    return ( CellCollection.remove( { "_id" : id } ) );
};

/**
 * Refer Schemas.Cell for expected object values
 * @param { Object }
 * @return { String } The new _id or an error object if a callback provided
 */
Cells.insertCell = function ( cell, callBack ) {
    return CellCollection.insert( cell, callBack );
};

/**
 * Generate a Cell with random values
 * @return { Object }
 */
Cells.generateCell = function () {
    return {
        "colour" : chance.color( { format : 'hex' } ),
        "left"   : chance.integer( { 'min' : 0, 'max' : Constants.app.map.width } ),
        "top"    : chance.integer( { 'min' : 0, 'max' : Constants.app.map.height } ),
        "radius" : Constants.app.cell.radius
        //"x"      : chance.integer( { 'min' : -1 * Constants.app.map.width, 'max' : Constants.app.map.width } ),
        //"y"      : chance.integer( { 'min' : -1 * Constants.app.map.height, 'max' : Constants.app.map.height } )
    };
};

/**
 * Does this map instance have the minimum number of
 * cells by checking the size of this map over the amount of area
 * covered by cells. Used to pre-load new cell after initialisation.
 * @returns {Boolean}
 */
Cells.hasMinimumCellCount = function ( currentCount ) {
    currentCount = currentCount || CellCollection.find().count();
    totalArea = Constants.app.map.width * Constants.app.map.height;
    cellArea  = currentCount * ( ( Constants.app.cell.radius * Constants.app.cell.radius ) * Math.PI );
    return ( Constants.app.cells.minimum < ( ( cellArea / totalArea ) * 100 ) );
};
