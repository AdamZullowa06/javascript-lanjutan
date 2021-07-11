// cara untuk membuat object pada javascript

// 1. Object Literal
// PROBLEM : kurang efektif untul objek yang banyak.
let mahasiswa1 = {
    nama : 'Adam',
    health : 10,
    makan : function(porsi) {
        this.health = this.health + porsi;
        console.log(`Halo ${this.nama}, darah bertambah + ${porsi}`);
        return this.makan;
    }
}

let mahasiswa2 = {
    nama : 'Ravi',
    health : 12,
    makan : function(porsi) {
        this.health = this.health + porsi;
        console.log(`Halo ${this.nama}, darah bertambah + ${porsi}`);
        return this.makan;
    }
}

// 2. function Declaration
function Mahasiswa(nama, health) {
    let mahasiswa1 = {};
    mahasiswa1.nama = nama;
    mahasiswa1.health = health;

    mahasiswa1.damage = function(poin) {
        this.health -= poin;
        console.log(`darah berkurang - ${poin}`);
        return this.damage;
    }

    mahasiswa1.makan = function(porsi) {
        this.health += porsi;
        console.log(`Halo ${this.nama}, darah bertambah + ${porsi}`);
        return this.makan;
    }
    return mahasiswa1;
}

let Adam = Mahasiswa('Adam', 25);

// 3. Construct Function
// keyword new
function Mahasiswa1(nama, health) {
    this.nama = nama;
    this.health = health;

    this.damage = function(poin) {
        this.health -= poin;
        console.log(`darah berkurang - ${poin}`);
        return this.damage;
    }

    this.makan = function(porsi) {
        this.health += porsi;
        console.log(`Halo ${this.nama}, darah bertambah + ${porsi}`);
        return this.makan;
    }
}

let Ravi = new Mahasiswa1('Ravi', 32);

// 4. Object.create