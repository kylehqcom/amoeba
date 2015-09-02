Template.info.helpers( {
    cellViewCount: function () {
        return CellCollection.find( Constants.query.viewport.cells ).count();
    },

    cellMapCount: function () {
        return CellCollection.find( Constants.query.map.cells ).count();
    }
} );
