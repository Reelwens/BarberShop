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

var obj = {
  i_employe: "Chaque employé réalise l'équivalent d'<b>1</b> clic par seconde.<br/>Vous pouvez améliorer la productivité de chacun en achetant des <b>améliorations d'employé</b>.",
  i_com: "Chaque publication dans le journal fait venir <b>2</b> fois plus de client sur le temps.",
  i_upgrade_1: "Les <b>ciseaux</b> augmentent la rapidité de chaque employé de <b>0.1</b> (par ciseaux).",
  i_upgrade_2: "Les <b>playlists</b> augmentent la rapidité de chaque employé de <b>3</b> (par playlist).",
  i_upgrade_3: "Les <b>rénovations</b> augmentent la rapidité de chaque employé de <b>8</b> (par rénovation).",
  i_upgrade_4: "Les <b>formations</b> augmentent la rapidité de chaque employé de <b>47</b> (par formation).",
  i_upgrade_5: "Les <b>primes</b> augmentent la rapidité de chaque employé de <b>260</b> (par prime).",
  i_shop: "Chaque agrandissement vous permet d'embaucher <b>10</b> nouveaux employés.<br/>Vous montez en gamme : Chaque client est plus long à satisfaire mais vous donnera plus d'argent."
  };

Object.keys(obj).map(function(key){
  var val = obj[key];
  document.querySelector('#'+key).addEventListener('mouseover', function(){
  	infoDiv.innerHTML = val;
    infoDiv.style.display = 'inline-block';
  });
  document.querySelector('#'+key).addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
	});
});