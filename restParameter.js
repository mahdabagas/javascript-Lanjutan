// Rest Parameter => Merepresenasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc(a, b, ...myArgs) {
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   //   return Array.from(arguments);
//   //   return [...arguments];
// }

// function jumlah() {
//   let total = 0;
//   for (a of [...arguments]) {
//     total += a;
//   }
//   return total;
// }

// function jumlah(...angka) {
//   let total = 0;
//   for (a of angka) {
//     total += a;
//   }
//   return total;
// }

// function jumlah(...angka) {
//   return angka.reduce((total, n) => (total += n));
// }

// console.log(jumlah(1, 2, 3, 4, 5, 6));

// Array destructuring
// const kelompok1 = ["Bagas", "Mahda", "Dhani", "Ajun", "Bariq", "Faza"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// // Object detructuring
// const team = {
//   pm: "Salwa",
//   pd: "Bariq",
//   fe: "Bagas",
//   be: "Toni",
//   devOps: "Adam",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Bagas", false, 10, true, "Mahda"));
