// for..of
// array
// <------------------------------->
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(n => console.log(n));

// for (const n of mhs) {
//     console.log(n);
// }


// string
// <------------------------------->
// const nama = 'Sandhika';

// for(n of nama) {
//     console.log(n);
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke - ${i+1}`);
// });

// for(const [i,m] of mhs.entries()) {
//         console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// }


// nodelist
// <------------------------------->
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));


// arguments
// <------------------------------->
// function jumlahkanAngka() {
//     let  jumlah = 0;
//     // return arguments.reduce((a, i) => a + i);
//     for(a of arguments) { jumlah += a};
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));


// for...in
const mhs = {
    nama: 'Sandhika',
    umur: 33,
    email: 'contoh@email.com'
}

for(m in mhs) {
    console.log(mhs[m]);
}