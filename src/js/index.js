var queue = [];
// setInterval( function () {
//   queue.push( new Client( 1 ) ); // TODO: Variabilize client level
//   queue_init();
// }, 1000 );

//Variables du panneau coulissant
var $panel = document.querySelector( '.container-right' ),
  $panel_btn = document.querySelector( '.counter' ),
  $panel_el = document.querySelectorAll( '.upgrade-container' );

$panel_btn.addEventListener( 'click', function () {

  if ( window.innerWidth < 1100 ) {

    if ( $panel.classList.contains( 'open' ) ) {
      $panel.classList.remove( 'open' );
      $panel.style.width = '0';
      for ( var i = 0; i < $panel_el.length; i++ ) {
        $panel_el[ i ].style.height = '0';
        $panel_el[ i ].style.padding = '0';
      }
    } else {
      $panel.classList.add( 'open' );
      $panel.style.width = '20rem';
      for ( var i = 0; i < $panel_el.length; i++ ) {
        $panel_el[ i ].style.height = '5rem';
        $panel_el[ i ].style.padding = '0.5rem';
      }
    }
  }
} );
