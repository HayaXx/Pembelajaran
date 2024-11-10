/**
 * TIPE DATA REFERENCE
 */

// OBJECT
const orang = {
  nama: "orang",
  umur: 17,
  negara: "indonesia"
};
console.log(orang, "Tipe Data:", typeof orang);

//ARRAY
const hobby = ["Coding", "reading"];
console.log(hobby, "Tipe Data:", typeof hobby);

//FUNCTION
function hai() {
  return "Hai keknya";
}
console.log(hai, "Tipe Data:", typeof hai);

//DATE
const today = new Date();
console.log(today, "Tipe Data:", typeof today);

//PATERN
const pattern = /hello/;
console.log(pattern, "Tipe Data:", typeof pattern);
