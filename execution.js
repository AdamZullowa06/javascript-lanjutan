// Execution context, hoisting, & scope

// console.log(nama);
// var nama = 'Adam';

// creation phase pada Globlal Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase


// var nama = 'Adam';
// var umur = 33;

// console.log(sayHello());
// function sayHello() {
//     return `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = 'Adam';
var username = '@adam.sql';

function cetakUrl(username) {
    var instagramURL = 'https://instagram.com/';
    return instagramURL + username;
}

console.log(cetakUrl(username));

// tumpukan execution/stack
function a() {
    console.log('ini a');
    function b() {
        console.log('ini b');
        function c() {
            console.log('ini c');
        }
        c();
    }
    b();
}
a();