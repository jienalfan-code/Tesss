/*function tamoilkqn(views, rpm) {
  return ((views / 1000 ) * rpm) * 90
}

console.log(tamoilkqn(200000))*/


function tamoilkqn(views, rpm) {
  // 1. Hitung pendapatan dasar per hari
  const perHari = (views / 1000) * rpm;
  
  // 2. Akumulasi waktu
  const perMinggu = perHari * 7;
  const perBulan = perHari * 30; // Estimasi 1 bulan = 30 hari
  const per3Bulan = perHari * 90; // Estimasi 3 bulan = 90 hari

  // 3. Fungsi pembantu untuk mengubah angka ke format Rupiah (Rp)
  const formatRupiah = (angka) => {
    return "Rp" + angka.toLocaleString('id-ID');
  };

  // 4. Kembalikan hasil dalam bentuk objek agar lengkap
  return {
    viewsPerHari: views.toLocaleString('id-ID') + " views",
    rpm: formatRupiah(rpm),
    pendapatanPerHari: formatRupiah(perHari),
    pendapatanPerMinggu: formatRupiah(perMinggu),
    pendapatanPerBulan: formatRupiah(perBulan),
    pendapatanPer3Bulan: formatRupiah(per3Bulan)
  };
}

// === CARA MENJALANKAN & MELIHAT HASILNYA ===
const simulasiGaji = tamoilkqn(500000, 500);
console.log(simulasiGaji);
