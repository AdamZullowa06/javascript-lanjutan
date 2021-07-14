// 2. constructor function

// versi prototype
// function Mahasiswa(nama, health) {    
//     this.nama = nama;
//     this.health = health;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.health += porsi;
//     return `darah bertambah + ${porsi}`;
// }

// Mahasiswa.prototype.damage = function(poin) {
//     this.health -= poin;
//     return `darah berkurang - ${poin}`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.health += jam * 2;
//     return `darah bertambah + ${jam * 2}`;
// }


// versi class
class Mahasiswa {
    constructor(nama, health) {
        this.nama = nama;
        this.health = health;
    }
    
    makan(porsi) {
        this.health += porsi;
        return `darah bertambah + ${porsi}`;
    }
    
    damage(poin) {
        this.health -= poin;
        return `darah berkurang - ${poin}`;
    }
    
    tidur(jam) {
        this.health += jam * 2;
        return `darah bertambah + ${jam * 2}`;
    }
}

let Adam = new Mahasiswa('Adam', 20);