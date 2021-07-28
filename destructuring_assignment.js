// destructuring variable / assignment

// destructuring array
// <------------------------------->
// const perkenalan = ['Halo', 'nama', 'saya', 'John Doe'];
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;
// console.log(nama);


// swap items
// <------------------------------->
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// return value pada function
// <------------------------------->
// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();
// console.log(a);


// rest parameter
// <------------------------------->
// const [a, ...values] = [1,2,3,4,5];
// console.log(a); 


// destructuring object
// <------------------------------->
// const mhs = {
//     nama: 'john doe',
//     umur: 33
// }

// const {nama, umur} = mhs;
// console.log(mhs);


// assignment tanpa deklarasi object
// <------------------------------->
// ({nama, umur} = { nama: 'john doe', umur: 33});
// console.log(nama);


// assignment ke varable baru
// <------------------------------->
// const mhs = {
//     nama: 'john doe',
//     umur: 33
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);


// memberikan default value
// <------------------------------->
// const mhs = {
//     nama: 'john doe',
//     umur: 33
// }

// const {nama, umur, email = 'emal@default.com'} = mhs;
// console.log(email);


// memberi nilai default + assign ke variable baru
// <------------------------------->
// const mhs = {
//     nama: 'john doe',
//     umur: 33,
//     email: 'default@email.com'
// }

// const {nama: n, umur: u, email: e = 'emal@default.com'} = mhs;
// console.log(e);


// rest parameter
// <------------------------------->
// const mhs = {
//     nama: 'john doe',
//     umur: 33,
//     email: 'default@email.com'
// }

// const {nama: n, ...value} = mhs;
// console.log(value);


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// <------------------------------->
const mhs = {
    id: 123,
    nama: 'john doe',
    umur: 33,
    email: 'default@email.com'
}

function getIdMhs({id, nama}) {
    return id + nama; 
}

console.log(getIdMhs(mhs));