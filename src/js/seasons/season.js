var game_date = moment( Date.now() )
  .add( 1, 'y' ),
  season_calendar = [ {
    begin: '2017-03-20',
    end: '2017-06-20',
    path: 'dist/img/printemps-background.svg'
  }, {
    begin: '2017-06-20',
    end: '2017-11-22',
    path: 'dist/img/ete-background.svg'
  }, {
    begin: '2017-11-22',
    end: '2017-12-21',
    path: 'dist/img/automne-background.svg'
  }, {
    begin: '2017-12-21',
    end: '2018-03-20',
    path: 'dist/img/hiver-background.svg'
  } ];

setInterval( function () {
  for ( var i = 0; i < season_calendar.length; i++ ) {
    if ( !game_date.isAfter( season_calendar[ i ].end, 'year' ) && game_date.isBetween( season_calendar[ i ].begin, season_calendar[ i ].end ) ) {

      document.querySelector( '.content-gameplay' )
        .style.backgroundImage = 'url( ' + season_calendar[ i ].path + ' )';


      break;
    } else if ( game_date.isAfter( season_calendar[ i ].end, 'year' ) ) {
      season_calendar[ i ].begin = moment( season_calendar[ i ].begin )
        .add( 1, 'y' );
      season_calendar[ i ].end = moment( season_calendar[ i ].end )
        .add( 1, 'y' );
    }
  }
  game_date = game_date.add( 3, 'M' );
}, config.interval_season_time );;
