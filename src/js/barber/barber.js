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
      var display_number = config.barber_money
      
      if (config.barber_money > 1000) {
        display_number = Math.floor(config.barber_money / 10)/100 + " K"
      }
      if (config.barber_money > 10000) {
        display_number = Math.floor(config.barber_money / 100)/10 + " K"
      }
      if (config.barber_money > 100000) {
        display_number = Math.floor(config.barber_money / 1000) + " K"
      }
      if (config.barber_money > 1000000) {
        display_number = Math.floor(config.barber_money / 10000)/100 + " M"
      }
      if (config.barber_money > 10000000) {
        display_number = Math.floor(config.barber_money / 100000)/10 + " M"
      }
      if (config.barber_money > 100000000) {
        display_number = Math.floor(config.barber_money / 1000000) + " M"
      }
      if (config.barber_money > 1000000000) {
        display_number = Math.floor(config.barber_money / 10000000)/100 + " B"
      }
      if (config.barber_money > 10000000000) {
        display_number = Math.floor(config.barber_money / 100000000)/10 + " B"
      }
      if (config.barber_money > 100000000000) {
        display_number = Math.floor(config.barber_money / 1000000000) + " B"
      }
      if (config.barber_money > 1000000000000) {
        display_number = Math.floor(config.barber_money / 10000000000)/100 + " T"
      }
      if (config.barber_money > 10000000000000) {
        display_number = Math.floor(config.barber_money / 100000000000)/10 + " T"
      }
      if (config.barber_money > 100000000000000) {
        display_number = Math.floor(config.barber_money / 1000000000000) + " T"
      }
      barber_money.innerHTML = display_number;
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
