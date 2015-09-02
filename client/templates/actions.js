Template.actions.events( {
    "click .add" : function () {
        Meteor.call( "cells.insertCell" );
    },

    "click .remove" : function () {
        Meteor.call( "cells.deleteCell" );
    }
} );
