requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs( [
  'lib-1',
  'lib-2',
  'app/sub',
  'app/simple-module',
  'app/simple-module-with-depends'
],
function ( L1, L2, sub, sm, smwd ) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.

    // console.log( 'from app.js, L1 = ', L1 );

    // console.log( 'from app.js, L2 = ', L2 );

    // console.log( 'from app.js, sub = ', sub );

    // console.log( 'from app.js, sub = ', sub() );

    // console.log( 'from app.js, sub = ', sm );

    // console.log( smwd );

    console.log( smwd.addToCart() );

});
