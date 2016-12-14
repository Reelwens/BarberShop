// Add Button
var button_emp = document.querySelector( '#btn_employee' ),
  button_sci = document.querySelector( '#btn_scissor' ),
  button_sho = document.querySelector( '#btn_shop' ),
  inner = document.querySelector( '.content-gameplay' );

/**
 * add a new item
 * @param {String} type [object key in game_items_data object]
 */
var addNewItem = function addNewItem( type ) {
  if ( config.barber_money >= game_items_data[ type ].price ) {
    config.barber_money = config.barber_money - game_items_data[ type ].price;
    game_items_data[ type ].nb += 1;
    game_items_data[ type ].price = game_items_data[ type ].newPrice( game_items_data[ type ].price )

    document.querySelector( '#nb_' + type )
      .innerHTML = game_items_data[ type ].nb;
    document.querySelector( '#price_' + type )
      .innerHTML = game_items_data[ type ].price;
    document.querySelector( '#barber_money' )
      .innerHTML = config.barber_money;
  }
};

// Button {{CLICK}} Event
button_emp.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'employee' );
  setInterval( function () {
    if ( inner ) {
      inner.click();
    }
  }, 1000 / game_items_data[ 'employee' ].nb )

} );

button_sci.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'scissor' );
  config.click_value *= 1.1;
} );

button_sho.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'shop' );
} );
// END Button {{CLICK}} Event
