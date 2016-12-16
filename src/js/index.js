var queue = []
var loop_game = function ( season_multi ) {
  setInterval( function () {
    if ( queue.length < 11 ) {
      queue.push( new Client( game_items_data.shop.nb + 1 ) );
      queue_init();
    }
  }, config.appearance_interval * season_multi );

};

loop_game( 1 );
