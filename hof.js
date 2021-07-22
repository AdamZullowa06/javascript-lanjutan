const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >= 3
// for
const newAngka = [];
for(i = 0; i < angka.length; i++) {
    if(angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}

console.log(newAngka);

const newAngka1 = angka.filter(function (a) {
    return a >= 3;
});
console.log(newAngka1);
// atau dengan arrow function
const newAngka2 = angka.filter(a => a >= 3);
console.log(newAngka2);

// map
const newAngka3 = angka.map(a => a *2);
console.log(newAngka3);

// reduce
// jumlahkan seluruh elemen pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka4 = angka.reduce((accumulator, currentValue) => 
accumulator + currentValue, 0);
console.log(newAngka4);

// Method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
    .map( a => a * 3)
    .reduce((acc,cur) => acc + cur);
console.log(hasil);