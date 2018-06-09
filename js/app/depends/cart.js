define(function () {
    //Do setup work here
    console.log('cart module start do something...');

    return {
        cartItem1: "cart Item 1 value",
        cartItem2: "cart Item 2 value",
        add: function ( p ) {
          console.log( 'From cart.js p = ', p );
          this.some = 'cart.js some var value'

          return this;
        }
    }
});
