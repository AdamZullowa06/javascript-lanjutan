// spread operator
// memecah iterables menjadi single element

// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// mengcopy array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);

// mengubah nodelist ke array
const liMhs = document.querySelectorAll('li');
// const mhs  = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);