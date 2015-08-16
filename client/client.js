if (Meteor.isClient) {

    // Draw the canvas
    Template.canvas.rendered = function() {
        canvas = $("#canvas");
        canvas.attr({ "height" : Constants.canvas.height, "width" : Constants.canvas.width });
        context = canvas[0].getContext("2d");

        // Draw vertical grid lines
        for (var x = 0.5; x < Constants.canvas.width; x += 10) {
          context.moveTo(x, 0);
          context.lineTo(x, Constants.canvas.height);
        }

        // Draw horizontal grid lines
        for (var y = 0.5; y < Constants.canvas.height; y += 10) {
          context.moveTo(0, y);
          context.lineTo(Constants.canvas.width, y);
        }

        context.strokeStyle = "#eee";
        context.stroke();

        context.beginPath();
        context.moveTo(0, 40);
        context.lineTo(240, 40);
        context.moveTo(260, 40);
        context.lineTo(500, 40);
        context.moveTo(495, 35);
        context.lineTo(500, 40);
        context.lineTo(495, 45);

        context.moveTo(60, 0);
        context.lineTo(60, 153);
        context.moveTo(60, 173);
        context.lineTo(60, 375);
        context.moveTo(65, 370);
        context.lineTo(60, 375);
        context.lineTo(55, 370);

        context.strokeStyle = "#000";
        context.stroke();

    };

}
