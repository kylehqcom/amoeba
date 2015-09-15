// Subscriptions
CellViewportHandle = Meteor.subscribe( "cellViewport" );
CellMapHandle = Meteor.subscribe( "cellMap" );
CellCollection = new Mongo.Collection( "cells" );

PlayerViewportHandle = Meteor.subscribe( "playerViewport" );
PlayerCollection = new Mongo.Collection( "players" );