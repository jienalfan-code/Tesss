/*const harga = 12000000

const rupiah = new Intl.NumberFormat("id", {
  style: "currency", 
  currency: "IDR"
}).format(harga);

console.log(rupiah)
rupiah()
*/

const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);
};

const baju = 10000;
const kemeja = 45000;

console.log(formatRupiah(baju));   // Rp10.000
console.log(formatRupiah(kemeja)); // Rp45.000
