var config = {
  click_value: 1,
  cut_value: 4,
  barber_money: 0,
  interval_season_time: 180000
};

// All game data
var game_items_data = {
  employee: {
    price: 15,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.5 );
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
    price: 1000,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 10 );
    }
  },
  com: {
    price: 50,
    nb: 0,
    newPrice: function ( oldPrice ) {
      return Math.floor( oldPrice * 1.3 );
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
};
