/**
 * Because main.js is loaded last, use this to ensure fixture data is loaded
 * after collections have been instantiated.
 */
if ( ! CellCollection.find().count() ) {
    var count = 1;
    while ( ! Cells.hasMinimumCellCount( count ) ) {
        if ( count > 5 ) {
            console.log( "We broke out of the fixture import - check code!" );
            break;
        }

        console.log( Cells.insertCell( { "colour" : Colour.generateHexColour(), "x" :  Random.number(), "y" : Random.number() } ) );
        count ++;
    }
}

console.log('Server ' + CellCollection.find().count());
