var queue = [];
//
//setInterval( function () {
//  if ( queue.length < 11 ) {
//    queue.push( new Client( 1 ) ); // TODO: Variabilize client level
//    queue_init();
//  }
//}, 1000 ); // TODO: Variabilize duration client apparition

// Modification of the volume of the ambiance music
document.querySelector( '#sound' )
  .volume = 0.15;

// Animation for the shop when clic
document.querySelector( '.container-left' )
  .addEventListener( 'click', function () {
    if ( document.querySelector( '.barber' )
      .classList.contains( 'clickListener' ) )
      return; // Protection for the clic while animation

    document.querySelector( '.barber' )
      .classList.add( 'clickListener' );
    setTimeout( function () {
      document.querySelector( '.barber' )
        .classList.remove( 'clickListener' );
    }, 1000 );
  } );

// Gestion bruitages
var sound = document.querySelector( '#soundEffect' );

document.querySelector( '.container-left' )
  .addEventListener( 'click', function () {
    var rand_1_3 = Math.round( ( ( 2 ) * Math.random() ) + 1 ); // Generate random number between 1 and 3
    sound.innerHTML = '<audio autoplay class="audioSound" src="src/sound/cut' + rand_1_3 + '.mp3"></audio>';
    document.querySelector( '.audioSound' )
      .volume = 0.7;

  } );

// Gestion mute
var mute = false,
  muteButton = document.querySelector( '.counter' );

muteButton.addEventListener( 'click', function () {
  if ( mute === false ) {
    document.querySelector( '#sound' )
      .volume = 0;
    mute = true;
  } else {
    document.querySelector( '#sound' )
      .volume = 0.15;
    mute = false;
  }
} );

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