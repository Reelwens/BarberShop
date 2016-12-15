var config = {
  click_value: 1,
  cut_value: 4,
  random_gain: function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  },
  barber_money: 0,
  interval_season_time: 180000
};

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
    price: 5,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  shop: {
    price: 100,
    nb: 0,
    employee_nb: 10,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  com: {
    price: 10,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  music: {
    price: 10,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  renovation: {
    price: 10,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  formation: {
    price: 10,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  bonus: {
    price: 10,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
    }
  },
  client: {
    gain_min: 1,
    gain_max: 3
  }
};
