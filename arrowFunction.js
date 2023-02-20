// Arrow Function adalah bentuk lain yang lebih ringkas dari function Expression
let tampilPesan = (nama) => {
  return `halo ${nama}`;
};

console.log(tampilPesan("Bagas Mahda"));

// Impilsit return
let tampil = (nama) => `Halo ${nama}`;
console.log(tampil("Dhani"));

// tanpa parameter
let muncul = () => {
  return `Hallo World`;
};

// Dua parameter
let tampilNama = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
};

console.log(tampilNama("Mahda", "Malam"));

let mahasiswa = [
  "Bagas Mahda Dhani",
  "Zahra Khairunnisa P",
  "Muhammad aland Saputra",
];

// mengembalikan array
let jumlahHuruf = mahasiswa.map((nama) => nama.length);
console.log(jumlahHuruf);

// mengembalikan object
let jmlhHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));
console.table(jmlhHuruf);

