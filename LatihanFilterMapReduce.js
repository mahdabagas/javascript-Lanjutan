// Ambil semua elemen video
// const allVideo = document.querySelectorAll("ul li");
const allVideo = Array.from(document.querySelectorAll("[data-duration"));

// pilih hanya 'JAVASCRIPT LANJUTAN
// const jsLanjutan = [];
// for (let i = 0; i < allVideo.length; i++) {
//   jsLanjutan.push(allVideo[i]);
// }

let filterJS = allVideo
  .filter((value) => {
    return value.textContent.includes("JAVASCRIPT LANJUTAN");
    // value.innerHTML.includes("JAVASCRIPT LANJUTAN");
  })

  // ambil durasi masing masing video
  .map((value) => value.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    // split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // Jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// Ubah formatnya menjadi jam menit detik
const jam = Math.floor(filterJS / 3600);
filterJS = filterJS - jam * 3600;
const menit = Math.floor(filterJS / 60);
const detik = filterJS - menit * 60;

// Kita simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik `;

const jumlahVideo = allVideo.filter((value) => {
  return value.innerHTML.includes("JAVASCRIPT LANJUTAN");
}).length;

const jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.textContent = `${jumlahVideo}`;
