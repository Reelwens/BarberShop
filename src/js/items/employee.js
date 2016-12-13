var Employee = function () {
  this.client_cut = 0;

  this.cut = function () {
    setInterval( function () {
      this.client_cut += 1;
      console.log( this.client_cut );
    }, 1000 );
  };
};
