define(["./depends/cart", "./depends/inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.

        console.log('simple-module-with-depends module start do something...');

        return {
            smwd_color: "smwd blue",
            smwd_size: "smwd large",
            addToCart: function() {

                cart.add(this);

                console.log( cart.add('some arg for cart.js').some );

                inventory.decrement(this);
            }
        }
    }
);
