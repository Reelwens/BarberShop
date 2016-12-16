// generate random color
var bits = function bits() {
  return Math.floor( Math.random() * 255 );
};

/**
 * Client Classe
 * @param {Integer} level [level of the client]
 */
var Client = function ( level ) {
  this.furColor = 'rgb(' + bits() + ',' + bits() + ',' + bits() + ')';
  this.level = level ? level : 1;
  this.click = Math.floor( Math.random() * 10 * this.level + 2 );
};

// File d'attente

var random_customers = function ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
};

var queue_init = function () {
  if ( queue ) {
    var customers_enter = document.querySelector( '.customers-enter' );
    customers_enter.innerHTML += customer_svg[ random_customers( 1, 7 ) ];

  }
};
