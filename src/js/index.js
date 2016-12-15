var queue = [];

setInterval( function () {
  if ( queue.length < 11 ) {
    queue.push( new Client( 1 ) ); // TODO: Variabilize client level
    queue_init();
  }
}, 1000 ); // TODO: Variabilize duration client apparition

// Modification of the volume of the ambiance music
document.querySelector('#sound').volume=0.15;

// Animation for the shop when clic
document.querySelector('.container-left').addEventListener( 'click', function () {
    if (document.querySelector('.barber').classList.contains('clickListener')) 
    return; // Protection for the clic while animation
    
    document.querySelector('.barber').classList.add('clickListener');
    setTimeout(function(){
        document.querySelector('.barber').classList.remove('clickListener');
    }, 1000);
});