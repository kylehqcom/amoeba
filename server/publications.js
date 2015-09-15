// Define pubs
Meteor.publish( "cellViewport", function () {
    return CellCollection.find( Constants.query.viewport.cells );
});

Meteor.publish( "cellMap", function () {
    return CellCollection.find( Constants.query.map.cells );
});

Meteor.publish( "playerViewport", function () {
    return PlayerCollection.find( Constants.query.viewport.cells );
});
