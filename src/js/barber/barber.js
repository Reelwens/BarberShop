var game_panel = document.querySelector( '.inner' ),
  barber_money = document.querySelector( '#barber_money' ),
  gain = document.querySelector( '.gain' );

game_panel.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  if ( queue[ 0 ] ) {
    if ( queue[ 0 ].click <= 0 ) {
      queue.shift();
      config.barber_money += config.cut_value;
      barber_money.innerHTML = config.barber_money;
      document.querySelector( '.customers-enter' )
        .removeChild( document.querySelector( '.customers-enter' )
          .childNodes[ document.querySelector( '.customers-enter' )
            .childNodes.length - 1 ] )
      gain.innerHTML = config.cut_value;
      return;
    }
    queue[ 0 ].click -= config.click_value;

  }

} );;
