// Define pubs
Meteor.publish( "cellViewport", function () {
    return CellCollection.find( Constants.query.viewport );
});

Meteor.publish( "cellMap", function () {
    return CellCollection.find( Constants.query.map );
});
