// Define pubs
Meteor.publish( "cells", function () {
    return CellCollection.find();
});