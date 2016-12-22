var queue = []
var loop_game = function ( season_multi ) {
  setInterval( function () {
    if ( queue.length < 11 ) {
      queue.push( new Client( game_items_data.shop.nb + 1 ) );
      queue_init();
    }
  }, config.appearance_interval * season_multi );

};

loop_game( 1 );

// Information button : div follow mouse

var information_div = document.querySelector('.informationDiv');

function follow_mouse(evenement) {
  information_div.style.left = (evenement.pageX-299)+'px';
  information_div.style.top = (evenement.pageY+1)+'px';
}
document.onmousemove = follow_mouse;

// Display and change text for each i button
var infoDiv = document.querySelector('.informationDiv')

// Creation of the events for items description
Object.keys(info_bulle).map(function(key){
  var val = info_bulle[key];
  document.querySelector('#'+key).addEventListener('mouseover', function(){
  	infoDiv.innerHTML = val;
    infoDiv.style.display = 'inline-block';
  });
  document.querySelector('#'+key).addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
	});
});

// Shorter number function
function number_shorter(val) {
    var short = val;
    var base = 0;

    while (short >= 1000) {
        short /= 1000;
        base++;
    }
    if (base >= config.formatter.length) {
        short = val / Math.pow(1000, config.formatter.length -1);
        return short.toFixed(1) + " " + config.formatter[config.formatter.length -1]
    }
    return (val < 1000 ? val : short.toFixed(1) + " ") + config.formatter[base];
}

// Dyn title
setInterval( function () {
      document.querySelector('title').innerHTML = number_shorter(config.barber_money) + " $ - Barber Shop"
}, 1000 );