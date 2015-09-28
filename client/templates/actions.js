Template.actions.events( {
    "click .cell .add" : function () {
        Meteor.call( "cells.insertCell" );
    },

    "click .cell .remove" : function () {
        Meteor.call( "cells.deleteCell" );
    },

    "click .player .increase" : function () {
        Meteor.call( "player.increase" );
    },

    "click .player .decrease" : function () {
        Meteor.call( "player.decrease" );
    }

} );
