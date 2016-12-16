var game_panel = document.querySelector( '.content-gameplay' ),
  barber_money = document.querySelector( '.value_barber_money' );

game_panel.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  if ( queue[ 0 ] ) {
    if ( queue[ 0 ].click <= 0 ) {
      var gain = config.random_gain( game_items_data.client.gain_min, game_items_data.client.gain_max );
      var random_customers = function ( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) + min );
      };


      config.barber_money += gain;
      barber_money.innerHTML = config.barber_money;
      // Show customer after the cut
      document.querySelector( '.customers-exit' )
        .innerHTML = customer_svg[ random_customers( 1, 7 ) ];

      queue.shift();

      document.querySelector( '.click_gain' )
        .innerHTML = '+ ' + gain + '<img src="./dist/img/money.svg" alt="money icon" class="money-icon-gain"/>';


      document.querySelector( '.click_gain' )
        .innerHTML = '+ ' + gain + '<img src="./dist/img/money.svg" alt="money icon" class="money-icon-gain"/>';


      // Remove customer after the cut
      document.querySelector( '.customers-enter' )
        .removeChild( document.querySelector( '.customers-enter' )
          .childNodes[ document.querySelector( '.customers-enter' )
            .childNodes.length - 1 ] );

      var pos = 50;
      var id = setInterval( frame, 30 );

      function frame() {
        if ( pos == 100 ) {
          clearInterval( id );
          document.querySelector( '.click_gain' )
            .innerHTML = "";
        } else {
          pos++;
          document.querySelector( '.click_gain' )
            .style.marginBottom = pos + 'px';
        }
      }

      return;
    }
    queue[ 0 ].click -= config.click_value;

  }

} );
