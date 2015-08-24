/**
 * Becuase main.js is loaded last, use this to ensure fixture data is loaded
 * after collections have been instantiated.
 */

console.log( Cells.find().fetch() );