if (Meteor.isClient) {
  // This code only runs on the client

  var cells = [];
  for (i = 0; i < 200; i++) {
    cells.push({ colour: Utils.generateHexColour(), x: Utils.generateRandomCoordinates().x, y: Utils.generateRandomCoordinates().y });
  }

  Template.body.helpers({
    foodCells: cells
  });
}