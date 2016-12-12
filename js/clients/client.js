/**
 * Client Classe
 * @param {Integer} level [level of the client]
 */
var Client = function ( level ) {
  this.furColor = '#333333'; // TODO: Variabilize color
  this.level = level ? level : 1;
  this.click = Math.floor( Math.random() * 10 * this.level + 2 );
};

// generate random color
var bits = function bits() {
  return Math.floor( Math.random() * 255 );
};

// File d'attente
var queue = [ new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ), new Client( 1 ) ];
