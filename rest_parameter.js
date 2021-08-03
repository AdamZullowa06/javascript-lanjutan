// rest parameter

// function myFunc() {
    // return `a = ${a}, b= ${b}, myArgs = ${myArgs}`;
    // return myArgs;
    // return Array.from(arguments);
    // return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlah(...angka) {
    // let total = 0;
    // for(const a of angka) {
    //     total += a;
    // }
    // return total;
    
//     return angka.reduce((a, b) => a + b);
// } 

// console.log(jumlah(1,2,3,4,5));

// array destructuring
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number',1,2, 'sandhika', false, 10, true, 'doddy'));