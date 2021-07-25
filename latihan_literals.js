// 1. HTML Fragments
// const mhs = {
//     nama: 'John Doe',
//     umur: 33,
//     nrp: '043040023',
//     email: 'johndoe@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: 'John Doe',
//         email: 'johndoe@gmail.com'
//     },
//     {
//         nama: 'Dio Brando',
//         email: 'diobrando@gmail.com'
//     },
//     {
//         nama: 'Joseph Joestar',
//         email: 'joestar@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join(' ')}
// </div>`;


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     pernyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.pernyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'John Doe',
    semester: 5,
    matkul: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'pemrograman Sistem Berrientasi Objek'
    ]
};

function cetakMataKuliah(matkul) {
    return `
        <ol>
            ${matkul.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.matkul)}
</div>`

document.body.innerHTML = el;