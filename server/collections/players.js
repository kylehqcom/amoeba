PlayerCollection = new Mongo.Collection( "players" );

var Schemas = {};
Schemas.Player = new SimpleSchema({
    user_id: {
        type: String,
        label: "The user_id of a player",
        index: 1,
        unique: true
    },
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    radius: {
        type: Number,
        label: "The radius of a player"
    },
    left: {
        type: Number,
        label: "Left position (pixels)",
        index: 1
    },
    top: {
        type: Number,
        label: "Top position (pixels)",
        index: 1
    }
});

PlayerCollection.attachSchema( Schemas.Player );

