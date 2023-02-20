// Execution Context, Hoisting, Scope
// 2 Fase pada Execution context => 1. Creation 2. Execution

var nama = "bagas";
console.log(nama);

// Creation phase pada global context
// nama var = undefined
// nama function = fn()
// Hoisting
// windoe = global object
// this = window

// Execution phase

var nama = "mahaa";
var umur = 33;

function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun`;
}

// Function membuat local execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// argument
// hoisting

var nama = "bagas Mahda Dhani";
var username = "@bagasmahda_";

function cetakURL(username) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}
console.log(cetakURL);

// Untuk mengecek alur pengeksekusi javascript di website
// javascript visulizer

