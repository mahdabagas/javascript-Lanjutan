// 1. HTML Fragmetns
// const mhs = {
//   nama: "Bagas Mahda Dhani",
//   umut: 20,
//   nim: "215150700111038",
//   email: "Bagasmahda@student.ub.ac.id",
// };

// let el = `<div class="mhs">
//   <h1>${mhs.nama}</h1>
//   <span class="nrp">${mhs.nim}</span>
//   </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Bagas",
//     email: "bagas@gmail.com",
//   },
//   {
//     nama: "Mahda",
//     email: "Mahda@gmail.com",
//   },
//   {
//     nama: "Dhani",
//     email: "Dhani@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// Ternary
// const lagu = {
//   judul: "Tetap dalam jiwa",
//   penyanyi: "Isyana Saraswati",
//   feat: "ray Putra",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat, ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// console.log(el);

// 4. Nested Bersarang
// HTML Fragments Bersarang

const mhs = {
  nama: "Bagas Mahda Dhani",
  semester: 4,
  mataKuliah: ["AS", "ADESI", "PAM", "ARPRI"],
};

function cetakMataKuliah(mataKuliah) {
  return `<ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester"> Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
