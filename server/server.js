// requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
// global variables
const port = 5000;
let guests = [];

// app.uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up

// get route
app.get( '/guests', ( req, res )=>{
    console.log( 'in GET hit for /guests route' );
    res.send( guests );
}); //end guests GET

// post route - establishes new route on URL
app.post( '/guests', (req, res)=>{
    console.log( 'in POST hit for /guests route:', req.body );
    guests.push( req.body.name );
    res.sendStatus( 200 );
}); // end guests POST