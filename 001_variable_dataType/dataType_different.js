// tipe data primitive
let a = 10;
let b = a; // 'b' menyimpan nilai salinan dari a , b = 10
a = 20;

console.log(b);

//Penjelasan
/**
 * Deklarasi Variabel a dan b:

Di sini, a diinisialisasi dengan nilai 10, yang merupakan tipe data primitif (angka).
Saat b = a; dijalankan, nilai a (yaitu 10) disalin ke b. Karena ini adalah tipe data primitif, yang disalin adalah nilai langsung dari a, bukan referensi ke variabel a.
Perubahan Nilai a:

Ketika a = 20; dijalankan, hanya nilai a yang berubah menjadi 20, sedangkan b tetap menyimpan salinan awalnya, yaitu 10.
Hasil console.log(b):

Saat kita mencetak nilai b, hasilnya adalah 10, bukan 20. Ini karena b menyimpan salinan nilai dari a, bukan referensi ke a. Setiap perubahan pada a tidak akan mempengaruhi b.

Kesimpulan: Tipe data primitif di JavaScript (seperti number, string, boolean, dll.) disimpan di memori sebagai nilai langsung. Saat variabel dengan tipe ini disalin ke variabel lain, yang disalin adalah nilainya, bukan referensinya.
 */

/**
 *

 */

// tipe data reference
let obj1 = { nama: "Ogata" };
let obj2 = obj1; //obj2 akan menyimpan referensi yang sama dengan obj1
obj1.nama = "Rizu";

console.log(obj2);

// penjelasan
/**
 * Deklarasi Objek obj1 dan obj2:

obj1 adalah sebuah objek yang berisi properti nama dengan nilai "Ogata".
Ketika let obj2 = obj1; dijalankan, variabel obj2 akan menyimpan referensi yang sama dengan obj1, bukan salinan nilainya.
Artinya, obj2 dan obj1 sekarang menunjuk ke lokasi memori yang sama, di mana objek { nama: "Ogata" } disimpan.
Perubahan Properti nama di obj1:

Saat kita mengubah obj1.nama menjadi "Rizu", perubahan ini juga berlaku untuk obj2 karena obj1 dan obj2 merujuk ke lokasi memori yang sama.
Hasil console.log(obj2):

Ketika mencetak obj2, hasilnya adalah { nama: "Rizu" }, karena obj2 menyimpan referensi yang sama dengan obj1. Jadi, perubahan pada obj1 juga terlihat pada obj2.

Kesimpulan: Untuk tipe data referensi (seperti object, array, function, dll.), variabel menyimpan referensi ke lokasi memori tempat data disimpan, bukan nilainya langsung. Oleh karena itu, perubahan pada satu variabel referensi akan mempengaruhi variabel lain yang merujuk ke referensi yang sama.
 */
