if (Meteor.isClient) {

    Template.canvas.rendered = function() {

        // Initialize the canvas
        Canvas.initialize("#canvas");

        // Check if we have enough cells on the canvas at startup
        i = 1;
        while (!Canvas.hasMinimumCellCount()) {

          // Always have a break on while loops!
          if (i > 1000) {
              console.log("we broke " + i);
              break;
          }

          Canvas.renderCell();
          console.log(i);
          i++;
        }
    };

}
