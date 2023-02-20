// Javascript memperlakukan function sebagai object

// Contoh high function order
// "kerajakanTugas" merupakan high order function
// parameter/argument "selesai" merupakan callback
// Fungsi high function order berguna untuk abstraksi atau mengurangi komplesitas program
// function kerjakanTUgas(mataKuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${mataKuliah}.....`);
//   selesai();
// }

// function selesai() {
//   setTimeout(() => {
//     console.log("Selesai mengerjakan tugas!");
//   }, 2000);
// }

// kerjakanTUgas("Pemrograman Web", selesai);

// Filter, Map & Reduce
// Array.prototype.map()
// Array.protype.filter()
// Array.protype.reduce()
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3

// const angkaNew = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) angkaNew.push(angka[i]);
// }

// angka.forEach((value) => {
//   if (value >= 3) angkaNew.push(value);
// });

// Filter
// const angkaNew = angka.filter((a) => a >= 3);
// console.log(angkaNew);

// Map
// const angkaNew = angka.map((a) => a * 2);
// console.log(angkaNew);

// Reduce -> Melakukan sesuatu pada seluruh elemen arraynya
// 0 adalah nilai awal, nilai defaultnya adalah 0
// const angkaNew = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(angkaNew);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, cur) => acc + cur);

// console.log(hasil);
