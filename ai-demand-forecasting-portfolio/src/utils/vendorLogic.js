// Definisikan bobot untuk setiap kriteria
const weights = {
  price: 0.40,  // Harga paling penting
  quality: 0.30, // Kualitas penting
  deliveryTime: 0.15,
  reputation: 0.15,
};

// Fungsi untuk memberi peringkat pada vendor
export const rankVendors = (vendors) => {
  const scoredVendors = vendors.map(vendor => {
    const { price, quality, deliveryTime, reputation } = vendor.criteria;
    // Hitung skor berdasarkan bobot
    const score = 
      (price * weights.price) + 
      (quality * weights.quality) + 
      (deliveryTime * weights.deliveryTime) + 
      (reputation * weights.reputation);
    // Kembalikan objek vendor baru dengan skor yang ditambahkan
    return { ...vendor, score: parseFloat(score.toFixed(2)) };
  });
  // Urutkan vendor berdasarkan skor dari tertinggi ke terendah
  return scoredVendors.sort((a, b) => b.score - a.score);
};
