// Subscriptions
CellViewportHandle = Meteor.subscribe( "cellViewport" );
CellMapHandle = Meteor.subscribe( "cellMap" );

CellCollection = new Mongo.Collection( "cells" );
