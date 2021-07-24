// template literals / template string
const nama = 'Adam';
const umur = 33;

// console.log()
console.log(`Halo, nama saya ${nama}, umur saya ${umur}`);

// embedded expressions
console.log(`${alert('hello world!')}`);

const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'John Doe',
    umur: 33,
    nrp: '043040023',
    email: 'johndoe@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);