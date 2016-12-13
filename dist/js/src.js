'use strict'

// generate random color
var bits = function bits() {
  return Math.floor( Math.random() * 255 );
};

/**
 * Client Classe
 * @param {Integer} level [level of the client]
 */
var Client = function ( level ) {
  this.furColor = 'rgb(' + bits() + ',' + bits() + ',' + bits() + ')';
  this.level = level ? level : 1;
  this.click = Math.floor( Math.random() * 10 * this.level + 2 );
};



// File d'attente

var queue_init = function () {

  var customers_enter = document.querySelector( '.customers-enter' );
  customers_enter.innerHTML += '<svg id="_3" data-name="3" class="customer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.27 42.59"><defs><style>.cls-1{fill:#ce6b27;}.cls-2{fill:#0260b1;}.cls-3{fill:#078ee0;}.cls-4{fill:#ec8248;}.cls-5{fill:#100;}.cls-6{fill:#652142;}.cls-7{fill:#8b3852;}.cls-8{fill:#652337;}.cls-9{fill:#923b56;}.cls-10{fill:#006ba4;}.cls-11{fill:#003971;}.cls-12{fill:#c56937;}.cls-13{fill:#e07f43;}.cls-14{fill:#d7e7ff;}.cls-15{fill:#b9c7dc;}.cls-16{fill:#d97f48;}.cls-17{fill:#e17b3e;}.cls-18{fill:#b36046;}.cls-19{fill:#ffc13d;}.cls-20{fill:#fff;}</style></defs><title>Plan de travail 1customer1</title><path class="cls-1" d="M.14,26.39V17.94l3.34-1.56L2.46,14a10.67,10.67,0,0,1,2.76-.65V9.94L7.8,11.88v1.37a17.51,17.51,0,0,1,2.61.71c.14.18,2.29,4.67,2.29,4.67V27H10.13V18.79L2.86,25.57V27H.14Z"/><rect class="cls-2" x="2.77" y="37.47" width="2.59" height="1.53"/><rect class="cls-3" x="7.42" y="37.47" width="2.59" height="1.53"/><g id="Calque_48" data-name="Calque 48"><polyline class="cls-4" points="2.77 39 2.77 41.16 5.36 41.16 5.36 39"/><rect class="cls-4" x="7.42" y="39" width="2.59" height="2.16"/></g><g id="Calque_49" data-name="Calque 49"><path class="cls-5" d="M2.29,40.72v1.88H13.17v-.94L9,40.47H2.77S2.29,40.41,2.29,40.72Z"/></g><g id="Calque_50" data-name="Calque 50"><path class="cls-6" d="M2.92,41.91H4.68l1.61-1.44s-.5-.83-.81-.94H4.42S3.22,40,3,40.72Z"/></g><g id="Calque_51" data-name="Calque 51"><path class="cls-7" d="M4.06,41.9s-.1-1.26.7-1.43H7.2s.67.28.61,1.44Z"/></g><g id="Calque_52" data-name="Calque 52"><path class="cls-8" d="M10.84,40.48s-.5-1-.94-1a1.53,1.53,0,0,0-1.18,1c0,.35,0,1.65,0,1.65h2Z"/></g><g id="Calque_53" data-name="Calque 53"><path class="cls-9" d="M9.65,42.12h3.52v-1s-.11-.66-.68-.7-2.07,0-2.07,0-.77.23-.77.66Z"/></g><g id="Calque_44" data-name="Calque 44"><polygon class="cls-10" points="7.42 29.71 7.42 38 10.01 38 10.01 28.74 7.42 29.71"/><polygon class="cls-11" points="2.76 29.71 2.76 38 5.36 38 5.36 28.74 2.76 29.71"/></g><g id="Calque_46" data-name="Calque 46"><rect class="cls-12" x="3.14" y="32.31" width="1.91" height="1.66"/></g><g id="Calque_47" data-name="Calque 47"><rect class="cls-13" x="7.8" y="32.31" width="1.91" height="1.66"/></g><g id="Calque_6" data-name="Calque 6"><path class="cls-14" d="M0,19.66H2.76V31l7.47-1.41v-10h2.53V16.56s.13-3.62-6.38-3.47S0,16.28,0,16.28Z"/></g><g id="Calque_11" data-name="Calque 11"><path class="cls-15" d="M6.61,30.31,2.76,31V19.66H0V16.28s-.31-3,6.37-3.19.22,0,.22,0Z"/></g><g id="Calque_12" data-name="Calque 12"><path class="cls-15" d="M10.25,14.64V27.57l1.52-1V16.59S11.37,14.78,10.25,14.64Z"/><path class="cls-14" d="M2.77,14.64V27.57l-1.52-1V16.59S1.64,14.78,2.77,14.64Z"/></g><g id="Calque_13" data-name="Calque 13"><rect class="cls-1" x="0.01" y="19.66" width="2.75" height="7.3"/><rect class="cls-16" x="10.25" y="19.66" width="2.52" height="7.3"/></g><g id="Calque_14" data-name="Calque 14"><rect class="cls-16" x="1.25" y="19.66" width="1.52" height="7.61"/><rect class="cls-1" x="10.25" y="19.66" width="1.52" height="7.61"/></g><g id="Calque_15" data-name="Calque 15"><circle class="cls-1" cx="1.61" cy="27.13" r="1.61"/><circle class="cls-16" cx="11.16" cy="27.06" r="1.61"/></g><g id="Calque_7" data-name="Calque 7"><polygon class="cls-17" points="5.14 3.09 5.14 8.44 10.73 7.94 10.73 3.09 5.14 3.09"/></g><g id="Calque_10" data-name="Calque 10"><path class="cls-17" d="M3.95,5.66s-1.13.13-1.13,1S4,7.76,4,7.76Z"/></g><path class="cls-16" d="M4,3.42V9.19s3.65,2.9,4.15,2.92a2.09,2.09,0,0,0,1.56-.58A21.22,21.22,0,0,0,10.73,9.1V5.21l-3.39-2-2.8-.14Z"/><g id="Calque_8" data-name="Calque 8"><path class="cls-18" d="M5.36,2.78H3.95V9.32S6.51,11.76,7.39,12a3.11,3.11,0,0,0,2.22-.23,10.06,10.06,0,0,0,1.13-2.33,5.68,5.68,0,0,0,0-1.51H5.48V2.78Z"/></g><circle cx="7.47" cy="6.22" r="0.33"/><circle cx="10.18" cy="6.22" r="0.33"/><g id="Calque_9" data-name="Calque 9"><path class="cls-19 veuch" d="M6.61,0S3.17.25,3.4,3.67H6.77a1.88,1.88,0,0,0,1.13.77c.69.1,5.38.13,5.38.13s-.06-2.75-2.4-3.27c0,0-.15-1,.15-1.29"/><path class="cls-20" d="M7.4,8.85H10a1.18,1.18,0,0,1-1.32,1A1.18,1.18,0,0,1,7.4,8.85Z"/></g></svg>';

  var hair_color = document.querySelectorAll( '.veuch' );

  for ( var j = 0; j < hair_color.length; j++ ) {
    hair_color[ j ].style.fill = queue[ j ].furColor;
  }
};

var Employee = function () {
  this.client_cut = 0;

  this.cut = function () {
    setInterval( function () {
      this.client_cut += 1;
      console.log( this.client_cut );
    }, 1000 );
  };
};

var Scissor = function () {
  // body...
};

var Shop = function () {
  // body...
  console.log( 'Bonjourno' );
};

Shop();

// Add Button
var button_emp = document.querySelector( '#btn_employee' ),
  button_sci = document.querySelector( '#btn_scissor' ),
  button_sho = document.querySelector( '#btn_shop' );

// All game data
var game_items_data = {
  employee: {
    price: 3,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  scissor: {
    price: 100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  shop: {
    price: 1000,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
};

/**
 * add a new item
 * @param {String} type [object key in game_items_data object]
 */
var addNewItem = function addNewItem( type ) {
  if ( money >= game_items_data[ type ].price ) {
    money = money - game_items_data[ type ].price;
    game_items_data[ type ].nb += 1;
    game_items_data[ type ].price = game_items_data[ type ].newPrice( game_items_data[ type ].price )

    document.querySelector( '#nb_' + type )
      .innerHTML = game_items_data[ type ].nb;
    document.querySelector( '#price_' + type )
      .innerHTML = game_items_data[ type ].price;
    document.querySelector( '#barber_money' )
      .innerHTML = money;
  }

};

// Button {{CLICK}} Event
button_emp.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'employee' );
} );

button_sci.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'scissor' );
} );

button_sho.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  addNewItem( 'shop' );
} );
// END Button {{CLICK}} Event

var game_panel = document.querySelector( '.inner' ),
  barber_money = document.querySelector( '#barber_money' ),
  money = 0;

game_panel.addEventListener( 'click', function ( e ) {
  e.preventDefault();
  if ( queue[ 0 ].click <= 0 ) {
    queue.shift();
    money += 3
    barber_money.innerHTML = money;
    document.querySelector( '.customers-enter' )
      .removeChild( document.querySelector( '.customers-enter' )
        .childNodes[ 3 ] )
  }

  queue[ 0 ].click -= 1;
} );;

var queue = [];
setInterval( function () {
  queue.push( new Client( 1 ) ) // TODO: Variabilize client level
  queue_init();
}, 5000 );

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5qcyIsImVtcGxveWVlLmpzIiwic2Npc3Nvci5qcyIsInNob3AuanMiLCJzdHVmZi5qcyIsImJhcmJlci5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvc3JjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8vIGdlbmVyYXRlIHJhbmRvbSBjb2xvclxudmFyIGJpdHMgPSBmdW5jdGlvbiBiaXRzKCkge1xuICByZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDI1NSApO1xufTtcblxuLyoqXG4gKiBDbGllbnQgQ2xhc3NlXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGxldmVsIFtsZXZlbCBvZiB0aGUgY2xpZW50XVxuICovXG52YXIgQ2xpZW50ID0gZnVuY3Rpb24gKCBsZXZlbCApIHtcbiAgdGhpcy5mdXJDb2xvciA9ICdyZ2IoJyArIGJpdHMoKSArICcsJyArIGJpdHMoKSArICcsJyArIGJpdHMoKSArICcpJztcbiAgdGhpcy5sZXZlbCA9IGxldmVsID8gbGV2ZWwgOiAxO1xuICB0aGlzLmNsaWNrID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwICogdGhpcy5sZXZlbCArIDIgKTtcbn07XG5cblxuXG4vLyBGaWxlIGQnYXR0ZW50ZVxuXG52YXIgcXVldWVfaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgY3VzdG9tZXJzX2VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jdXN0b21lcnMtZW50ZXInICk7XG4gIGN1c3RvbWVyc19lbnRlci5pbm5lckhUTUwgKz0gJzxzdmcgaWQ9XCJfM1wiIGRhdGEtbmFtZT1cIjNcIiBjbGFzcz1cImN1c3RvbWVyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTMuMjcgNDIuNTlcIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2NlNmIyNzt9LmNscy0ye2ZpbGw6IzAyNjBiMTt9LmNscy0ze2ZpbGw6IzA3OGVlMDt9LmNscy00e2ZpbGw6I2VjODI0ODt9LmNscy01e2ZpbGw6IzEwMDt9LmNscy02e2ZpbGw6IzY1MjE0Mjt9LmNscy03e2ZpbGw6IzhiMzg1Mjt9LmNscy04e2ZpbGw6IzY1MjMzNzt9LmNscy05e2ZpbGw6IzkyM2I1Njt9LmNscy0xMHtmaWxsOiMwMDZiYTQ7fS5jbHMtMTF7ZmlsbDojMDAzOTcxO30uY2xzLTEye2ZpbGw6I2M1NjkzNzt9LmNscy0xM3tmaWxsOiNlMDdmNDM7fS5jbHMtMTR7ZmlsbDojZDdlN2ZmO30uY2xzLTE1e2ZpbGw6I2I5YzdkYzt9LmNscy0xNntmaWxsOiNkOTdmNDg7fS5jbHMtMTd7ZmlsbDojZTE3YjNlO30uY2xzLTE4e2ZpbGw6I2IzNjA0Njt9LmNscy0xOXtmaWxsOiNmZmMxM2Q7fS5jbHMtMjB7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+UGxhbiBkZSB0cmF2YWlsIDFjdXN0b21lcjE8L3RpdGxlPjxwYXRoIGNsYXNzPVwiY2xzLTFcIiBkPVwiTS4xNCwyNi4zOVYxNy45NGwzLjM0LTEuNTZMMi40NiwxNGExMC42NywxMC42NywwLDAsMSwyLjc2LS42NVY5Ljk0TDcuOCwxMS44OHYxLjM3YTE3LjUxLDE3LjUxLDAsMCwxLDIuNjEuNzFjLjE0LjE4LDIuMjksNC42NywyLjI5LDQuNjdWMjdIMTAuMTNWMTguNzlMMi44NiwyNS41N1YyN0guMTRaXCIvPjxyZWN0IGNsYXNzPVwiY2xzLTJcIiB4PVwiMi43N1wiIHk9XCIzNy40N1wiIHdpZHRoPVwiMi41OVwiIGhlaWdodD1cIjEuNTNcIi8+PHJlY3QgY2xhc3M9XCJjbHMtM1wiIHg9XCI3LjQyXCIgeT1cIjM3LjQ3XCIgd2lkdGg9XCIyLjU5XCIgaGVpZ2h0PVwiMS41M1wiLz48ZyBpZD1cIkNhbHF1ZV80OFwiIGRhdGEtbmFtZT1cIkNhbHF1ZSA0OFwiPjxwb2x5bGluZSBjbGFzcz1cImNscy00XCIgcG9pbnRzPVwiMi43NyAzOSAyLjc3IDQxLjE2IDUuMzYgNDEuMTYgNS4zNiAzOVwiLz48cmVjdCBjbGFzcz1cImNscy00XCIgeD1cIjcuNDJcIiB5PVwiMzlcIiB3aWR0aD1cIjIuNTlcIiBoZWlnaHQ9XCIyLjE2XCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV80OVwiIGRhdGEtbmFtZT1cIkNhbHF1ZSA0OVwiPjxwYXRoIGNsYXNzPVwiY2xzLTVcIiBkPVwiTTIuMjksNDAuNzJ2MS44OEgxMy4xN3YtLjk0TDksNDAuNDdIMi43N1MyLjI5LDQwLjQxLDIuMjksNDAuNzJaXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV81MFwiIGRhdGEtbmFtZT1cIkNhbHF1ZSA1MFwiPjxwYXRoIGNsYXNzPVwiY2xzLTZcIiBkPVwiTTIuOTIsNDEuOTFINC42OGwxLjYxLTEuNDRzLS41LS44My0uODEtLjk0SDQuNDJTMy4yMiw0MCwzLDQwLjcyWlwiLz48L2c+PGcgaWQ9XCJDYWxxdWVfNTFcIiBkYXRhLW5hbWU9XCJDYWxxdWUgNTFcIj48cGF0aCBjbGFzcz1cImNscy03XCIgZD1cIk00LjA2LDQxLjlzLS4xLTEuMjYuNy0xLjQzSDcuMnMuNjcuMjguNjEsMS40NFpcIi8+PC9nPjxnIGlkPVwiQ2FscXVlXzUyXCIgZGF0YS1uYW1lPVwiQ2FscXVlIDUyXCI+PHBhdGggY2xhc3M9XCJjbHMtOFwiIGQ9XCJNMTAuODQsNDAuNDhzLS41LTEtLjk0LTFhMS41MywxLjUzLDAsMCwwLTEuMTgsMWMwLC4zNSwwLDEuNjUsMCwxLjY1aDJaXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV81M1wiIGRhdGEtbmFtZT1cIkNhbHF1ZSA1M1wiPjxwYXRoIGNsYXNzPVwiY2xzLTlcIiBkPVwiTTkuNjUsNDIuMTJoMy41MnYtMXMtLjExLS42Ni0uNjgtLjctMi4wNywwLTIuMDcsMC0uNzcuMjMtLjc3LjY2WlwiLz48L2c+PGcgaWQ9XCJDYWxxdWVfNDRcIiBkYXRhLW5hbWU9XCJDYWxxdWUgNDRcIj48cG9seWdvbiBjbGFzcz1cImNscy0xMFwiIHBvaW50cz1cIjcuNDIgMjkuNzEgNy40MiAzOCAxMC4wMSAzOCAxMC4wMSAyOC43NCA3LjQyIDI5LjcxXCIvPjxwb2x5Z29uIGNsYXNzPVwiY2xzLTExXCIgcG9pbnRzPVwiMi43NiAyOS43MSAyLjc2IDM4IDUuMzYgMzggNS4zNiAyOC43NCAyLjc2IDI5LjcxXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV80NlwiIGRhdGEtbmFtZT1cIkNhbHF1ZSA0NlwiPjxyZWN0IGNsYXNzPVwiY2xzLTEyXCIgeD1cIjMuMTRcIiB5PVwiMzIuMzFcIiB3aWR0aD1cIjEuOTFcIiBoZWlnaHQ9XCIxLjY2XCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV80N1wiIGRhdGEtbmFtZT1cIkNhbHF1ZSA0N1wiPjxyZWN0IGNsYXNzPVwiY2xzLTEzXCIgeD1cIjcuOFwiIHk9XCIzMi4zMVwiIHdpZHRoPVwiMS45MVwiIGhlaWdodD1cIjEuNjZcIi8+PC9nPjxnIGlkPVwiQ2FscXVlXzZcIiBkYXRhLW5hbWU9XCJDYWxxdWUgNlwiPjxwYXRoIGNsYXNzPVwiY2xzLTE0XCIgZD1cIk0wLDE5LjY2SDIuNzZWMzFsNy40Ny0xLjQxdi0xMGgyLjUzVjE2LjU2cy4xMy0zLjYyLTYuMzgtMy40N1MwLDE2LjI4LDAsMTYuMjhaXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV8xMVwiIGRhdGEtbmFtZT1cIkNhbHF1ZSAxMVwiPjxwYXRoIGNsYXNzPVwiY2xzLTE1XCIgZD1cIk02LjYxLDMwLjMxLDIuNzYsMzFWMTkuNjZIMFYxNi4yOHMtLjMxLTMsNi4zNy0zLjE5LjIyLDAsLjIyLDBaXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV8xMlwiIGRhdGEtbmFtZT1cIkNhbHF1ZSAxMlwiPjxwYXRoIGNsYXNzPVwiY2xzLTE1XCIgZD1cIk0xMC4yNSwxNC42NFYyNy41N2wxLjUyLTFWMTYuNTlTMTEuMzcsMTQuNzgsMTAuMjUsMTQuNjRaXCIvPjxwYXRoIGNsYXNzPVwiY2xzLTE0XCIgZD1cIk0yLjc3LDE0LjY0VjI3LjU3bC0xLjUyLTFWMTYuNTlTMS42NCwxNC43OCwyLjc3LDE0LjY0WlwiLz48L2c+PGcgaWQ9XCJDYWxxdWVfMTNcIiBkYXRhLW5hbWU9XCJDYWxxdWUgMTNcIj48cmVjdCBjbGFzcz1cImNscy0xXCIgeD1cIjAuMDFcIiB5PVwiMTkuNjZcIiB3aWR0aD1cIjIuNzVcIiBoZWlnaHQ9XCI3LjNcIi8+PHJlY3QgY2xhc3M9XCJjbHMtMTZcIiB4PVwiMTAuMjVcIiB5PVwiMTkuNjZcIiB3aWR0aD1cIjIuNTJcIiBoZWlnaHQ9XCI3LjNcIi8+PC9nPjxnIGlkPVwiQ2FscXVlXzE0XCIgZGF0YS1uYW1lPVwiQ2FscXVlIDE0XCI+PHJlY3QgY2xhc3M9XCJjbHMtMTZcIiB4PVwiMS4yNVwiIHk9XCIxOS42NlwiIHdpZHRoPVwiMS41MlwiIGhlaWdodD1cIjcuNjFcIi8+PHJlY3QgY2xhc3M9XCJjbHMtMVwiIHg9XCIxMC4yNVwiIHk9XCIxOS42NlwiIHdpZHRoPVwiMS41MlwiIGhlaWdodD1cIjcuNjFcIi8+PC9nPjxnIGlkPVwiQ2FscXVlXzE1XCIgZGF0YS1uYW1lPVwiQ2FscXVlIDE1XCI+PGNpcmNsZSBjbGFzcz1cImNscy0xXCIgY3g9XCIxLjYxXCIgY3k9XCIyNy4xM1wiIHI9XCIxLjYxXCIvPjxjaXJjbGUgY2xhc3M9XCJjbHMtMTZcIiBjeD1cIjExLjE2XCIgY3k9XCIyNy4wNlwiIHI9XCIxLjYxXCIvPjwvZz48ZyBpZD1cIkNhbHF1ZV83XCIgZGF0YS1uYW1lPVwiQ2FscXVlIDdcIj48cG9seWdvbiBjbGFzcz1cImNscy0xN1wiIHBvaW50cz1cIjUuMTQgMy4wOSA1LjE0IDguNDQgMTAuNzMgNy45NCAxMC43MyAzLjA5IDUuMTQgMy4wOVwiLz48L2c+PGcgaWQ9XCJDYWxxdWVfMTBcIiBkYXRhLW5hbWU9XCJDYWxxdWUgMTBcIj48cGF0aCBjbGFzcz1cImNscy0xN1wiIGQ9XCJNMy45NSw1LjY2cy0xLjEzLjEzLTEuMTMsMVM0LDcuNzYsNCw3Ljc2WlwiLz48L2c+PHBhdGggY2xhc3M9XCJjbHMtMTZcIiBkPVwiTTQsMy40MlY5LjE5czMuNjUsMi45LDQuMTUsMi45MmEyLjA5LDIuMDksMCwwLDAsMS41Ni0uNThBMjEuMjIsMjEuMjIsMCwwLDAsMTAuNzMsOS4xVjUuMjFsLTMuMzktMi0yLjgtLjE0WlwiLz48ZyBpZD1cIkNhbHF1ZV84XCIgZGF0YS1uYW1lPVwiQ2FscXVlIDhcIj48cGF0aCBjbGFzcz1cImNscy0xOFwiIGQ9XCJNNS4zNiwyLjc4SDMuOTVWOS4zMlM2LjUxLDExLjc2LDcuMzksMTJhMy4xMSwzLjExLDAsMCwwLDIuMjItLjIzLDEwLjA2LDEwLjA2LDAsMCwwLDEuMTMtMi4zMyw1LjY4LDUuNjgsMCwwLDAsMC0xLjUxSDUuNDhWMi43OFpcIi8+PC9nPjxjaXJjbGUgY3g9XCI3LjQ3XCIgY3k9XCI2LjIyXCIgcj1cIjAuMzNcIi8+PGNpcmNsZSBjeD1cIjEwLjE4XCIgY3k9XCI2LjIyXCIgcj1cIjAuMzNcIi8+PGcgaWQ9XCJDYWxxdWVfOVwiIGRhdGEtbmFtZT1cIkNhbHF1ZSA5XCI+PHBhdGggY2xhc3M9XCJjbHMtMTkgdmV1Y2hcIiBkPVwiTTYuNjEsMFMzLjE3LjI1LDMuNCwzLjY3SDYuNzdhMS44OCwxLjg4LDAsMCwwLDEuMTMuNzdjLjY5LjEsNS4zOC4xMyw1LjM4LjEzcy0uMDYtMi43NS0yLjQtMy4yN2MwLDAtLjE1LTEsLjE1LTEuMjlcIi8+PHBhdGggY2xhc3M9XCJjbHMtMjBcIiBkPVwiTTcuNCw4Ljg1SDEwYTEuMTgsMS4xOCwwLDAsMS0xLjMyLDFBMS4xOCwxLjE4LDAsMCwxLDcuNCw4Ljg1WlwiLz48L2c+PC9zdmc+JztcblxuICB2YXIgaGFpcl9jb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcudmV1Y2gnICk7XG5cbiAgZm9yICggdmFyIGogPSAwOyBqIDwgaGFpcl9jb2xvci5sZW5ndGg7IGorKyApIHtcbiAgICBoYWlyX2NvbG9yWyBqIF0uc3R5bGUuZmlsbCA9IHF1ZXVlWyBqIF0uZnVyQ29sb3I7XG4gIH1cbn07XG4iLCJ2YXIgRW1wbG95ZWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xpZW50X2N1dCA9IDA7XG5cbiAgdGhpcy5jdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY2xpZW50X2N1dCArPSAxO1xuICAgICAgY29uc29sZS5sb2coIHRoaXMuY2xpZW50X2N1dCApO1xuICAgIH0sIDEwMDAgKTtcbiAgfTtcbn07XG4iLCJ2YXIgU2Npc3NvciA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gYm9keS4uLlxufTtcbiIsInZhciBTaG9wID0gZnVuY3Rpb24gKCkge1xuICAvLyBib2R5Li4uXG4gIGNvbnNvbGUubG9nKCAnQm9uam91cm5vJyApO1xufTtcblxuU2hvcCgpO1xuIiwiLy8gQWRkIEJ1dHRvblxudmFyIGJ1dHRvbl9lbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2J0bl9lbXBsb3llZScgKSxcbiAgYnV0dG9uX3NjaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYnRuX3NjaXNzb3InICksXG4gIGJ1dHRvbl9zaG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2J0bl9zaG9wJyApO1xuXG4vLyBBbGwgZ2FtZSBkYXRhXG52YXIgZ2FtZV9pdGVtc19kYXRhID0ge1xuICBlbXBsb3llZToge1xuICAgIHByaWNlOiAzLFxuICAgIG5iOiAwLFxuICAgIG5ld1ByaWNlOiBmdW5jdGlvbiAoIG9sZFByaWNlICkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoIG9sZFByaWNlICogMS41ICk7XG4gICAgfVxuICB9LFxuICBzY2lzc29yOiB7XG4gICAgcHJpY2U6IDEwMCxcbiAgICBuYjogMCxcbiAgICBuZXdQcmljZTogZnVuY3Rpb24gKCBvbGRQcmljZSApIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCBvbGRQcmljZSAqIDEuMyApO1xuICAgIH1cbiAgfSxcbiAgc2hvcDoge1xuICAgIHByaWNlOiAxMDAwLFxuICAgIG5iOiAwLFxuICAgIG5ld1ByaWNlOiBmdW5jdGlvbiAoIG9sZFByaWNlICkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoIG9sZFByaWNlICogMS41ICk7XG4gICAgfVxuICB9LFxufTtcblxuLyoqXG4gKiBhZGQgYSBuZXcgaXRlbVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgW29iamVjdCBrZXkgaW4gZ2FtZV9pdGVtc19kYXRhIG9iamVjdF1cbiAqL1xudmFyIGFkZE5ld0l0ZW0gPSBmdW5jdGlvbiBhZGROZXdJdGVtKCB0eXBlICkge1xuICBpZiAoIG1vbmV5ID49IGdhbWVfaXRlbXNfZGF0YVsgdHlwZSBdLnByaWNlICkge1xuICAgIG1vbmV5ID0gbW9uZXkgLSBnYW1lX2l0ZW1zX2RhdGFbIHR5cGUgXS5wcmljZTtcbiAgICBnYW1lX2l0ZW1zX2RhdGFbIHR5cGUgXS5uYiArPSAxO1xuICAgIGdhbWVfaXRlbXNfZGF0YVsgdHlwZSBdLnByaWNlID0gZ2FtZV9pdGVtc19kYXRhWyB0eXBlIF0ubmV3UHJpY2UoIGdhbWVfaXRlbXNfZGF0YVsgdHlwZSBdLnByaWNlIClcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjbmJfJyArIHR5cGUgKVxuICAgICAgLmlubmVySFRNTCA9IGdhbWVfaXRlbXNfZGF0YVsgdHlwZSBdLm5iO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjcHJpY2VfJyArIHR5cGUgKVxuICAgICAgLmlubmVySFRNTCA9IGdhbWVfaXRlbXNfZGF0YVsgdHlwZSBdLnByaWNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmFyYmVyX21vbmV5JyApXG4gICAgICAuaW5uZXJIVE1MID0gbW9uZXk7XG4gIH1cblxufTtcblxuLy8gQnV0dG9uIHt7Q0xJQ0t9fSBFdmVudFxuYnV0dG9uX2VtcC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGUgKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYWRkTmV3SXRlbSggJ2VtcGxveWVlJyApO1xufSApO1xuXG5idXR0b25fc2NpLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZSApIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhZGROZXdJdGVtKCAnc2Npc3NvcicgKTtcbn0gKTtcblxuYnV0dG9uX3Noby5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGUgKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYWRkTmV3SXRlbSggJ3Nob3AnICk7XG59ICk7XG4vLyBFTkQgQnV0dG9uIHt7Q0xJQ0t9fSBFdmVudFxuIiwidmFyIGdhbWVfcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmlubmVyJyApLFxuICBiYXJiZXJfbW9uZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2JhcmJlcl9tb25leScgKSxcbiAgbW9uZXkgPSAwO1xuXG5nYW1lX3BhbmVsLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZSApIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIHF1ZXVlWyAwIF0uY2xpY2sgPD0gMCApIHtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIG1vbmV5ICs9IDNcbiAgICBiYXJiZXJfbW9uZXkuaW5uZXJIVE1MID0gbW9uZXk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jdXN0b21lcnMtZW50ZXInIClcbiAgICAgIC5yZW1vdmVDaGlsZCggZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jdXN0b21lcnMtZW50ZXInIClcbiAgICAgICAgLmNoaWxkTm9kZXNbIDMgXSApXG4gIH1cblxuICBxdWV1ZVsgMCBdLmNsaWNrIC09IDE7XG59ICk7O1xuIiwidmFyIHF1ZXVlID0gW107XG5zZXRJbnRlcnZhbCggZnVuY3Rpb24gKCkge1xuICBxdWV1ZS5wdXNoKCBuZXcgQ2xpZW50KCAxICkgKSAvLyBUT0RPOiBWYXJpYWJpbGl6ZSBjbGllbnQgbGV2ZWxcbiAgcXVldWVfaW5pdCgpO1xufSwgNTAwMCApO1xuIl19
