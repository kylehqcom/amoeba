Cells = new Mongo.Collection("cells");
var Schemas = {};
Schemas.cell = new SimpleSchema({
    colour: {
        type: String,
        label: "Colour (hex)",
        max: 7
    },
    x: {
        type: Number,
        label: "Position X (pixels)"
    },
    y: {
        type: Number,
        label: "Position Y (pixels)"
    },
    width: {
        type: Number,
        label: "Width (pixels)"
    },
    height: {
        type: Number,
        label: "Height (pixels)"
    },
    static: {
        type: Boolean,
        label: "Is this cell static or can move",
        defaultValue: true
    }
});
