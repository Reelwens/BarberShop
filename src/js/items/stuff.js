// Add Button
var button_emp = document.querySelector( '#btn_employee' ),
  button_sci = document.querySelector( '#btn_scissor' ),
  button_sho = document.querySelector( '#btn_shop' ),
  button_com = document.querySelector( '#btn_com' ),
  button_mus = document.querySelector( '#btn_music' ),
  button_ren = document.querySelector( '#btn_renovation' ),
  button_for = document.querySelector( '#btn_formation' ),
  button_bon = document.querySelector( '#btn_bonus' ),
  auto_click_value = document.querySelector( '#auto_click_value' ),
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
    document.querySelector( '.price_' + type )
      .innerHTML = game_items_data[ type ].price;
    auto_click_value.innerHTML = Math.round( game_items_data[ 'employee' ].nb * config.click_value * 10 ) / 10;
  }
};

// Button {{CLICK}} Event
button_emp.addEventListener( 'click', function ( e ) {
  e.preventDefault();

  if ( game_items_data[ 'employee' ].nb < game_items_data[ 'shop' ].employee_nb && config.barber_money >= game_items_data[ 'employee' ].price ) {
    button_emp.style.backgroundColor = '#fdede2';
    addNewItem( 'employee' );
    setInterval( function () {
      if ( inner ) {
        inner.click();
      }
    }, 1000 / game_items_data[ 'employee' ].nb )
  } else if ( game_items_data[ 'employee' ].nb >= game_items_data[ 'shop' ].employee_nb && config.barber_money ) {
    button_emp.style.backgroundColor = 'rgba( 0, 0, 0, 0.3 )';
  }

} );

button_sci.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'scissor' );
  config.click_value *= 1.1;
} );

button_sho.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'shop' );
  game_items_data[ 'shop' ].employee_nb += game_items_data[ 'shop' ].employee_nb;
  game_items_data[ 'client' ].gain_min *= 15;
  game_items_data[ 'client' ].gain_max *= 15;
} );

button_com.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'com' );
  config.appearance_interval = config.appearance_interval / 2;
  loop_game( 1 );
} );

button_mus.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'music' );
  config.click_value *= 3;
} );

button_ren.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'renovation' );
  config.click_value *= 8;
} );

button_for.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'formation' );
  config.click_value *= 47;
} );

button_bon.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'bonus' );
  config.click_value *= 260;
} );
// END Button {{CLICK}} Event
