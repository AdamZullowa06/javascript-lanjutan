// function expression

const tampilNama = function (nama) {
    return `Halo ${nama}`;
}

console.log(tampilNama('John Doe'));

// function arrow
const helloWorld = (nama) => { return `Hello ${nama}`;}
console.log(helloWorld('World'));

// function arrow lebih dari satu parameter
const index = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}

console.log(index('John', 'malam'));

// implisit return
const index2 = nama => `Halo ${nama}`;
console.log(index2('Adam'));

// tanpa parameter
const index3 = () => `Hello world`;
console.log(index3());

// contoh kasus
// menampilkan jumlah karakter dari masing-masing index
let mahasiswa = ['Adam', 'Ravi', 'Bagus'];

// cara function expression
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

// cara arrow function
// dalam bentuk array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// arrow function return dalam bentuk object
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlhHuruf: nama.length }));
console.table(jumlahHuruf);

// Constructor Function
const Mahasiswa = function() {
    this.nama = 'Adam';
    this.umur = 19;
    this.sayHello = function () {
        console.log(`Hallo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const Adam = new Mahasiswa();

// arrow function pada constructor function
// arrow function tidak memiliki konse "this"
const Siswa = function() {
    this.nama = 'Adam';
    this.umur = 19;
    this.sayHello = () => {
        console.log(`Halo nama saya ${nama}, umur saya ${umur} tahun`);
    }
}

const Adam = new Siswa();



