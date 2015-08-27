Meteor.startup(function () {
    "use strict";
});

/**
 * Also instantiate any NPM Packages for the app.
 */
var NPMChance = Meteor.npmRequire('chance');
chance = new NPMChance();
