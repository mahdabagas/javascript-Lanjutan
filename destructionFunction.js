// Destructuring

// Array
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// Object
// function kalkulasi(a, b) {
//   return {
//     jumlah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kali, bagi, kurang, jumlah } = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// Destructring function arguments
const mhs1 = {
  nama: "Bagas Mahda Dhani",
  umur: 20,
  email: "bagasmahda@gmail.com",
  nilai: {
    quiz: 90,
    uts: 85,
    uas: 92,
  },
};

// function cetakMhs({ nama, umur, email }) {
//   return `Halo nama saya ${nama}, saya ${umur} tahun, email saya adalah ${email}`;
// }

function cetakMhs({ nama, umur, nilai: { quiz, uts, uas } }) {
  return `Halo nama saya ${nama}, saya ${umur} tahun, nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
