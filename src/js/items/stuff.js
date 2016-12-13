// Add Button
var button_emp = document.querySelector( '#btn_employee' ),
  button_sci = document.querySelector( '#btn_scissor' ),
  button_sho = document.querySelector( '#btn_shop' ),
  inner = document.querySelector( '.inner' );

// All game data
var game_items_data = {
  employee: {
    price: 3,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  scissor: {
    price: 100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  shop: {
    price: 1000,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
};

/**
 * add a new item
 * @param {String} type [object key in game_items_data object]
 */
var addNewItem = function addNewItem( type ) {
  if ( money >= game_items_data[ type ].price ) {
    money = money - game_items_data[ type ].price;
    game_items_data[ type ].nb += 1;
    game_items_data[ type ].price = game_items_data[ type ].newPrice( game_items_data[ type ].price )

    document.querySelector( '#nb_' + type )
      .innerHTML = game_items_data[ type ].nb;
    document.querySelector( '#price_' + type )
      .innerHTML = game_items_data[ type ].price;
    document.querySelector( '#barber_money' )
      .innerHTML = money;
  }

};

// Button {{CLICK}} Event
button_emp.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'employee' );
  setInterval( function () {
    inner.click();
    console.log( 'click !' )
  }, 1000 / game_items_data[ 'employee' ].nb )

} );

button_sci.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'scissor' );
} );

button_sho.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'shop' );
} );
// END Button {{CLICK}} Event
