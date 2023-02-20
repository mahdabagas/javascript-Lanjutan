// Konsep this pada arrow function

// Arrow Function
// arrow function tidak mendetkesi this

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {        
    this.classList.toggle(dua);
  }, 600);
});

// const Mahasiswa = function () {
//   (this.nama = "Bagas Mahda"),
//     (this.umur = 33),
//     (this.sayHello = function () {
//       console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//       console.log();
//     });
// };

// const Dosen = function () {
//   (this.nama = "Bagas Mahda Dhani"),
//     (this.umur = "23"),
//     (this.sayHalo = () => {
//       console.log(this);
//     });
// };

// const dosen1 = new Dosen();

// // Object Literal
// const Pegawai = {
//   nama: "Dhani",
//   umur: "33",
//   sayHello: () => {
//     // console.log(`Halo ${this.nama}, dan saya ${this.umur} tahun`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   (this.nama = "Bagas Mahda"),
//     (this.umur = 33),
//     (this.sayHello = function () {
//       console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//       console.log();
//     }),
//     setInterval(() => {
//       console.log(this.umur++);
//     }, 500);
// };
// const bagas = new Mahasiswa();
