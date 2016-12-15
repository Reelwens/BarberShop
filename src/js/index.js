var queue = [];
var loop_game = function ( season_multi ) {
  setInterval( function () {
    if ( queue.length < 11 ) {
      queue.push( new Client( game_items_data.shop.nb + 1 ) );
      queue_init();
    }
  }, config.appearance_interval * season_multi );

};

loop_game( 1 );

// Messages cycliques - A reprendre, je bloque
/*
var tabMsg = [
    "News: Une nouvelle barberie vient d’ouvrir à Montreuil. A ce que l’on dit, son propriétaire Teddy Abernathy regorge de motivation.",
    "News : La coupe de la barbe est à la mode cette année, profitez-en pour vous rendre chez votre barbier favori.",
    "News: Plus de 12% de la population de Montreuil recommande le barbier Teddy Abernathy pour son professionalisme.",
    "News: Couper sa barbe chez un barbier vous donne un air plus séduisant de 36%.",
    "Les gens viennent de loin de se faire couper la barbe par vos soins.",
    "Attention à ne pas vous couper un doigt pendant votre travail, nous tenons à vous.",
    "Qu'est-ce qui est plus agréable que la barbe à papa ? Se faire couper la barbe !",
    "News: D'après les rumeurs, le premier client à s'être fait couper la barbe par Teddy Abernathy fut le célèbre Bruno Simon."];

i = 0;
    while (i < tabMsg.length) {
        document.querySelector('.messages').innerHTML = (tabMsg[i]);
            i++;
        console.log(i);
    };

*/
