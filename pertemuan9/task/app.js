/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */
//ES6 diganti jadi const, lalu ini adalah import untuk menghubungkan data
const {
  index,
  store,
  update,
  destroy,
} = require("./controller/FruitController.js");

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: nodejs app.js
 */
const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(0, "Kelapa");
  console.log("\nMethod destroy - Menghapus data 0");
  destroy(0);
};

main();
