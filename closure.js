function init() {
    // let nama = 'Adam Zullowa';
    return function (nama) {
        console.log(nama);
    }    
}
let panggilNama = init();
panggilNama('Adam Zullowa');

// contoh lain
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let Pagi = ucapkanSalam('Pagi');
let Siang = ucapkanSalam('Siang');
let Malam = ucapkanSalam('Malan');

Malam('Ravi');
Pagi('Adam');

// contoh lain
// Self Invoking Anonymous Function (function(){});
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());