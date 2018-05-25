// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// global variables
const port = 5000;
// let name = 'Shannon'; 
// let body = 'I like ice cream';
let quotes = [{
    text: 'I love ice cream', 
    author: 'Shannon Engstrom'
} ];

// app.uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); //end server up

// get route
app.get( '/quotes', ( req, res )=>{
    console.log( 'in GET hit for /quotes route', req.body );
    res.send( quotes );
}); //end quotes GET

// post route - establishes new route on URL
app.post( '/quotes', (req, res)=>{
    console.log( 'in POST hit for /quotes route:', req.body );
   quotes.push( req.body );
    res.sendStatus( 200 );
}); // end quotes POST