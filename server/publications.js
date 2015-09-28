// Define pubs
Meteor.publish( "cellMap", function () {
    return CellCollection.find( Constants.query.map.cells );
});

Meteor.publish( "playerViewport", function () {
    return PlayerCollection.find({});
});
