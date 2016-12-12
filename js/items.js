// Add Button
var button_emp = document.querySelector( '#btn_employee' ),
  button_sci = document.querySelector( '#btn_scissor' ),
  button_sho = document.querySelector( '#btn_shop' );

// All game data
var gameData = {
  employee: {
    price: 15,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice + oldPrice * 0.15 );
    }
  },
  scissor: {
    price: 100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice + oldPrice * 0.3 );
    }
  },
  shop: {
    price: 1000,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice + oldPrice * 0.5 );
    }
  },
};

/**
 * add a new item
 * @param {String} type [object key in gameData object]
 */
var addNewItem = function addNewItem( type ) {
  gameData[ type ].nb = gameData[ type ].nb + 1;
  gameData[ type ].price = gameData[ type ].newPrice( gameData[ type ].price )

  document.querySelector( '#nb_' + type )
    .innerHTML = gameData[ type ].nb;
  document.querySelector( '#price_' + type )
    .innerHTML = gameData[ type ].price;

};

// Button {{CLICK}} Event
button_emp.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'employee' );
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
