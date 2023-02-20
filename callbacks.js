// Callbacks => dunction yang dikirimkan sebagai parameter pada function yang lain

//Sychronus Callbacks
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(Callbacks) {
//   const nama = prompt("masukan Nama :");
//   Callbacks(nama);
// }

// tampilkanPesan(halo);

// Asychrouns Callback
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  succes: (mhs) => {
    mhs.forEach((element) => {
      console.log(element.nama);
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
