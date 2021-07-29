// destructuring

// function kalkulasi(a, b) {
//     return [a + b , a - b, a * b, a / b];
// } 

// const jumlah = kalkulasi(2,3)[0];
// const kali = kalkulasi(2,3)[1];

// const [jumlah, kali] = kalkulasi(2,3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);


// destructuring function argument
const mhs1 = {
    nama: 'john doe',
    umur: 33,
    email: 'johndoe@email.com',
    nilai: {
        tugas: 82,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`;
// }

function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, umur saya ${umur} tahun, nilai uas saya ${uas}`;
}
console.log(cetakMhs(mhs1));