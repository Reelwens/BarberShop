//Variables du panneau coulissant
var $panel = document.querySelector( '.container-right' ),
  $panel_btn = document.querySelector( '.left' ),
  $panel_el = document.querySelectorAll( '.upgrade-container' );

$panel_btn.addEventListener( 'click', function () {

  if ( window.innerWidth < 1100 ) {

    if ( $panel.classList.contains( 'open' ) ) {
      $panel.classList.remove( 'open' );
      $panel.style.width = '0';
      $panel.style.minWidth = '0';
      for ( var i = 0; i < $panel_el.length; i++ ) {
        $panel_el[ i ].style.height = '0';
        $panel_el[ i ].style.padding = '0';
        $panel_el[ i ].style.minWidth = '0';
      }
    } else {
      $panel.classList.add( 'open' );
      $panel.style.width = '17rem';
      $panel.style.minWidth = '17rem';
        $panel.style.height = '97.5%';
      for ( var i = 0; i < $panel_el.length; i++ ) {
        $panel_el[ i ].style.height = '5rem';
        $panel_el[ i ].style.padding = '0.5rem';
        $panel_el[ i ].style.minWidth = '10rem';
      }
    }
  }
} );
