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

// Employe
document.querySelector('#i_employe').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Chaque employé réalise l'équivalent d'<b>1</b> clic par seconde.<br/>Vous pouvez améliorer la productivité de chacun en achetant des <b>améliorations d'employé</b>.";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_employe').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Com
document.querySelector('#i_com').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Chaque publication dans le journal fait venir <b>2</b> fois plus de client sur le temps.";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_com').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Upgrade 1
document.querySelector('#i_upgrade_1').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Les <b>ciseaux</b> augmentent la rapidité de chaque employé de <b>0.1</b> (par ciseaux).";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_upgrade_1').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Upgrade 2
document.querySelector('#i_upgrade_2').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Les <b>playlists</b> augmentent la rapidité de chaque employé de <b>3</b> (par playlist).";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_upgrade_2').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Upgrade 3
document.querySelector('#i_upgrade_3').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Les <b>rénovations</b> augmentent la rapidité de chaque employé de <b>8</b> (par rénovation).";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_upgrade_3').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Upgrade 4
document.querySelector('#i_upgrade_4').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Les <b>formations</b> augmentent la rapidité de chaque employé de <b>47</b> (par formation).";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_upgrade_4').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Upgrade 5
document.querySelector('#i_upgrade_5').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Les <b>primes</b> augmentent la rapidité de chaque employé de <b>260</b> (par prime).";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_upgrade_5').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});

// Shop
document.querySelector('#i_shop').addEventListener( 'mouseover', function () {
    infoDiv.innerHTML = "Chaque agrandissement vous permet d'embaucher <b>10</b> nouveaux employés.<br/>Vous montez en gamme : Chaque client est plus long à satisfaire mais vous donnera plus d'argent.";
    
    infoDiv.style.display = 'inline-block';
});

document.querySelector('#i_shop').addEventListener( 'mouseout', function () {
    infoDiv.style.display = 'none';
});