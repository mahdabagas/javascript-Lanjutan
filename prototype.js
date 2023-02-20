// Membuat object

// Object.create;
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hai ${this.nama}, Selamat makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hai ${this.nama}, Selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hai ${this.nama}, Selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   return mahasiswa;
// }

// let bagas = Mahasiswa("bagas", 20);

// Prortype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// let bagas = new Mahasiswa("Bagas", 20);

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat Bermain`;
// };
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat tidur`;
// };

// Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Hai ${this.nama}, Selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Hai ${this.nama}, Selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Hai ${this.nama}, Selamat tidur`;
  }
}

let bagas1 = new Mahasiswa("bagas", 10);

let angka = [1, 2, 3];

console.log(angka.reverse());
