/**
 * Client Classe
 * @param {Integer} level [level of the client]
 */
var Client = function ( level ) {
  this.furColor = '#333333'; // TODO: Variabilize color
  this.level = level ? level : 1;
  this.click = Math.floor( Math.random() * 10 * this.level + 1 );
};

var bits = function bits() {
  return Math.floor( Math.random() * 255 );
}
