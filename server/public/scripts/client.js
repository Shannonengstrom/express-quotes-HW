console.log('in client.js');

$( document ).ready( readyNow ); 

function readyNow() {
    console.log( 'in client.js' );
    getQuote(); 
}//end readyNow

function addQuote() {
    console.log( 'in addQuote' );
    let objectToSend = {
        text: $( '#text' ).val(),
        author: $( '#author' ).val()
    }; // end objectToSend
    console.log('sending:', objectToSend );
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend
    }).then( function( response ){
        console.log('back from server with:', response );
    }); 
    getQuote();  
}

function displayQuote( quotes ){
    let el = $( '#quotesOut' );
    el.empty();
    for( quote of quotes ){
        el.append( '<div class="cardBody">' + quote.author + ': ' + quote.text + '</div>')
    }
}

function getQuote() {
    console.log('in getQuote');
    //make AJAX GET call to server to get quotes
    $.ajax({
        method: 'GET',
        url: '/quotes',
        //once AJAX is doen, then run this function for a response
    }).then( function( response ){
        console.log('back from server with:', response );
        displayQuote( response );
    }); // end AJAX
}// end getQuotes