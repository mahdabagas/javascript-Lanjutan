// For of
// const mhs = ["bagas", "Mahda", "Dhani"];

// mhs.forEach((value) => {
//   return console.log(value);
// });

// for of untuk iterable

// Array
const mhs = ["bagas", "Mahda", "Dhani"];
for (const m of mhs) {
  console.log(m);
}
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// String
const nama = "Bagas";
for (const n of nama) {
  console.log(n);
}

// NodeList
const liNama = document.querySelectorAll(".nama");
for (n of liNama) {
  console.log(n.innerHTML);
}

// Arguments
function jumlahAngka() {
  let jumlah = 0;
  for (const a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));

// For in
// hanya untuk enumerable => properti pada object
const mahasiswa = {
  nama: "bagas",
  umur: 20,
  email: "BagasMahda@gmail.com",
};

for (const m in mahasiswa) {
  console.log(mahasiswa[m]);
}
