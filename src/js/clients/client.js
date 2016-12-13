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
