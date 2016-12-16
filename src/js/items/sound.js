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
  muteButton = document.querySelector( '.right' );

muteButton.addEventListener( 'click', function () {
  if ( mute === false ) {
    document.querySelector( '#sound' )
      .volume = 0;
    document.querySelector( '.play' )
      .innerHTML = '<img src="./dist/img/musical-note-striped.svg" alt="Allumer le son" />';
    mute = true;
  } else {
    document.querySelector( '#sound' )
      .volume = 0.15;
    document.querySelector( '.play' )
      .innerHTML = '<img src="./dist/img/musical-note.svg" alt="Couper le son" />';
    mute = false;
  }
} );
