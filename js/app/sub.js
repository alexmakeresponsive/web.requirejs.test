define(function () {
    return function appSub()  {
        var appSubvar1 = 'app sub var 1';

        this.appSubvar2 = 'app sub var 2';
        //in global!!!! Reeeeennaaaaaaameeee!

        console.log( 'somthing start from sub.js...' );

        return {
            appSubvar3: 'app sub var 3'
        }
    };
});

// define(function () {
//     return {
//         appSubvar1: 'app sub var 1'
//     };
// });
