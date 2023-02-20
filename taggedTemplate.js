// Tagged Template adalah Bentuk yang lebih komples dari template literal, memungkinkan kita untuk membaca template literal melalui sebuah function
// Escaping HTML Tags
// Translation & Internationalization
// Styled Components

// Tagged Template
const nama = "Bagas Mahda Dhani";
const umur = 20;

function coba(strings, ...values) {
  // ...values adalah mengembalikan semua literal strings
  // strings mengembalikan semua elemen string
  return strings.reduce(
    (result, str, index) => `${result}${str}${values[index] || ""}`,
    ""
  );
}
const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
console.log(str);

// Penggunaa lain : Escaping HTML tags, Translation & Internalization, Styled Components
 