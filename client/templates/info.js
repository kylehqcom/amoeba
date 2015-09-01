Info = {};

Template.info.helpers( {
    cellViewCount: function () {
        return CellCollection.find( Constants.query.viewport ).count();
    },

    cellMapCount: function () {
        return CellCollection.find( Constants.query.map ).count();
    }
} );
