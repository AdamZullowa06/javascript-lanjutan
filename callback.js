// callback


// synchronus callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo , ${nama}`));

// const mhs = [
//     {
//         'nama': 'Sandhika Galih',
//         'nrp': '043040023',
//         'email': 'sandhikagalih@unpas.ac.id',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 1
//     },
//     {
//         'nama': 'Doddy Ferdiansyah',
//         'nrp': '133040123',
//         'email': 'doddy@gmail.com',
//         'jurusan': 'Teknik Informatika',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'Erik',
//         'nrp': '104040001',
//         'email': 'erik@gmail.com',
//         'jurusan': 'Teknik Industri',
//         'idDosenWali': 3
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for( let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// asynchronous callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');


// jquery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');