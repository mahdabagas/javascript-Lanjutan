// spread operator dan Rest parameter
// direpresentasikan (...)

// Spread Operator
// Memecah(expand / unpack) iterables menjadi single element

// const mhs = ["bagas", "mahda", "dhani"];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ["bagas", "mahda", "dhani"];
// const dosen = ["muhammad", "aland", "saputra"];
// // const orang = mhs.concat(dosen);
// const orang = [...mhs, "Aji", ...dosen];

// console.log(orang);

// Mencopy array
// const mhs = ["bagas", "mahda", "dhani"];
// const mhs1 = [...mhs];
// mhs1[0] = "Aland";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
