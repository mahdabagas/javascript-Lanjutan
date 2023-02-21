c// Promise;
// fetch("https://api.publicapis.org/entries")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan data
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepat = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepat) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar janji...");
//   }
// });

// janji1
//   .then((response) => console.log("OK! :" + response))
//   .catch((response) => console.log("NOT OK : " + response));

// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, rejeect) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Dditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((response) => console.log("OK! : " + response))
//   .catch((response) => console.log("NOT OK! : " + response));
// console.log("selesai");

// promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avenger",
        sutradara: "Bagas",
        pemeran: "Mahda",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "malang",
        temperature: 26,
        kondisi: "Cerah",
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca]).then((response) => {
  const [cuaca, film] = response;
  console.log(film);
  console.log(cuaca);
});
