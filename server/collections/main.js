/**
 * Because main.js is loaded last, use this to ensure fixture data is loaded
 * after collections have been instantiated.
 */
cellCount = CellCollection.find().count();
while ( ! Cells.hasMinimumCellCount() ) {
    // Always have a safety catch with a while loop
    if ( cellCount > 10000 ) {
        console.log( "We broke out of the fixture import - check code!" );
        break;
    }

    console.log(
        Cells.insertCell( Cells.generateCell() )
    );
    cellCount ++;
}

console.log('Server: In total we have this many cells ' + CellCollection.find().count());
