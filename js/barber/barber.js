var game_panel = document.querySelector( '.inner' ),
  barber_money = document.querySelector( '#barber_money' ),
  money = 0;

game_panel.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  if ( queue[ 0 ].click <= 0 ) {
    queue.shift();
    money += 3
    barber_money.innerHTML = money;
  }
  queue[ 0 ].click -= 1;
  console.log( queue[ 0 ].click );
} );

console.log( queue );
