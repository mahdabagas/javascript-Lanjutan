/**
 * Var vs Let vs Const
 * var menganut function scope
 * let dan const menganut function scope
 * const untuk varibael yang tidak bisa diganti
 * const berfungsi untuk meminimalisir perubahan state
 * Let untuk nilai yang sekiranya akan berubah
 */

//Imediateli invoke function Expression
(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();

let i = (() => {
  let a = "Zahra";
  console.log(a);
})();
