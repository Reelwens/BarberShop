var config = {
  click_value: 1,
  cut_value: 4,
  random_gain: function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  },
  barber_money: 0,
  interval_season_time: 180000,
  appearance_interval: 2000
};

// All game data
var game_items_data = {
  employee: {
    price: 15,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 2 );
    }
  },
  scissor: {
    price: 12,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  shop: {
    price: 5000,
    nb: 0,
    employee_nb: 10,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 10 );
    }
  },
  com: {
    price: 120,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 2 );
    }
  },
  music: {
    price: 100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  renovation: {
    price: 1100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  formation: {
    price: 10100,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  bonus: {
    price: 110000,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
    }
  },
  client: {
    gain_min: 1,
    gain_max: 3
  }
};
