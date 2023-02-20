// Destructuring Assignment
// Expression pada js yang membuat kita membongkar nilai dari array
// atau properti dari object kedalam variabel yang terpisah

// Arrray
const coba = ["satu", "dua", "tiga"];
// const [a, b, c] = coba;
const [a, , c] = coba; // Skipping items
console.log(a); // "satu"
// console.log(b); // "dua"
console.log(c); // "tiga "

// Swap items
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

// Return value pada function
function test1() {
  return [1, 2];
}

let [p, q] = test1();
console.log(p); // 1
console.log(q); // 2

// Rest parameter
const [r, ...values] = [1, 2, 3];
console.log(r);
console.log(values);

// Object
const mhs = {
  nama: "Bagas Mahda Dhani",
  umur: 20,
  email: "bagasmahda@gmail.com",
};

// const { nama, umur, email } = mhs; // variabelnya namanya haruss sama yang di object
// console.log(nama); // "Bagas Mahda Dhani"
// console.log(umur); // 20
// console.log(email); //"bagasmahda@gmail.com"

// Assignment tanpa deklarasi object
({ nim, alamat } = {
  nim: "215150700111038",
  alamat: "Jl. Kertoleksono no 46",
});
console.log(nim); // "215150700111038"

// Assignment ke variabel baru
const { nama: n, umur: u } = mhs;
console.log(n);
console.log(u);

// Memberikan default value
const { nama, umur, email = "email.default@gmail.com" } = mhs;
console.log(email);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const warung = {
  id: 123,
  makan: "Nasi Goreng",
  minum: "Es Teh",
};

function getId({ id }) {
  return id;
}

console.log(getId(warung));
