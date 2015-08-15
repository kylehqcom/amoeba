if (Meteor.isClient) {
  // This code only runs on the client
  var cells = [];
  for (i = 0; i < 200; i++) {
    var coords = Utils.generateRandomCoordinates();
    cells.push({ colour: Utils.generateHexColour(), x: coords.x, y: coords.y });
  }

  Template.body.helpers({
    foodCells: cells
  });
}