define(function () {
    //Do setup work here
    console.log('inventory module start do something...');

    return {
        inventoryItem1: "inventory Item 1 value",
        inventoryItem2: "inventory Item 2 value",
        decrement: function ( p ) {
          console.log( 'From inventory.js p = ',p );
        }
    }
});
