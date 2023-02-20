// String literal
// TEmplate literal menggunakan `` back tick
// Multi-line String
console.log(`String 1 
String 2`); // Otomatis akan keenter juga

// Embedded Expression
const nama = "Bagas Mahda Dhani";
let umur = 33;
console.log(`Halo, perkenalkan nama saya${nama}, saya ${umur} tahun`);
// console.log(`${alert("Halo")}`);
let x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Bagas Mahda Dhani",
  umut: 20,
  nim: "215150700111038",
  email: "Bagasmahda@student.ub.ac.id",
};

let el = `<div class="mhs">
<h1>${mhs.nama}</h1>
<span class="nrp">${mhs.nim}</span>
</div>`;
let ex = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nim}</span>
</div>`;
console.log(ex);

// Expression Interpolation
let a = 10;
let b = 15;
console.log(
  `Jika a = 19 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}`
);
