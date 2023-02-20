// Closure
// closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) didalam function tersebut

// untuk membuat function factories dan seolah olah private method

// Closures
function init() {
  let nama = "Bagas Mahda";
  function tampilNama() {
    console.log(nama);
  }
  return tampilNama;
}
init();

// function Factory
function ucapSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu enyenangkan`);
  };
}

let selamatPagi = ucapSalam("Pagi");
let selamatSiang = ucapSalam("Siang");
let selamatMalam = ucapSalam("Malam");

selamatMalam("Bagas");

let add = (() => {
  let counter = 0;

  return () => {
    return ++counter;
  };
})(); //Imediately invoke function hal ini akan langung menjalankan seluruh function termasuk function yang didalam 

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
