/**
 * TIPE DATA PRIMITIF DI JAVASCRIPT
 * Tipe data primitif adalah tipe data dasar yang disimpan secara langsung dalam variabel.
 */

//STRING
const nama = "Ogata";
console.log(nama, "Tipe Data:", typeof nama);

//NUMBER
const umur = 17;
console.log(umur, "Tipe Data:", typeof umur);
const tua = "17"; // Jika diapit tanda kutip, ini dianggap string
console.log(tua, "Tipe Data:", typeof tua);

//BOOLEAN
const isYou = true;
console.log(isYou, "Tipe Data:", typeof isYou);
const loveMe = false;
console.log(loveMe, "Tipe Data:", typeof loveMe);

//UNDEFINED
let x; // Belum diinisialisasi, jadi nilainya undefined
console.log(x, "Tipe Data:", typeof x);

//NULL
let human = null;
console.log(human, "Tipe Data:", typeof human);
// Catatan: `typeof null` menghasilkan "object", ini adalah bug bawaan di JavaScript.

//SYMBOL
const _symbol = Symbol("title");
console.log(_symbol, "Tipe Data:", typeof _symbol);

//BIGINT
const bigInt = 21234313212n; // Gunakan "n" di akhir untuk menandakan BigInt
console.log(bigInt, "Tipe Data:", typeof bigInt);

//NaN
const nan = NaN; //number yang tidak teridentifikasi
console.log(nan, "Tipe Data:", typeof nan);
