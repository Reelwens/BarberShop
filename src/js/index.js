var queue = [];

setInterval( function () {
  if ( queue.length < 11 ) {
    queue.push( new Client( 1 ) ); // TODO: Variabilize client level
    queue_init();
  }
}, 1000 ); // TODO: Variabilize duration client apparition
