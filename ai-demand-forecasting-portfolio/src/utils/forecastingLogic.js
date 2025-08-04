// Simulasi Peramalan Tradisional (Moving Average 3 bulan)
export const getTraditionalForecast = (data) => {
  const forecast = [null, null, null]; // 3 bulan pertama tidak bisa diprediksi
  for (let i = 3; i < data.length; i++) {
    const avg = (data[i-1].sales + data[i-2].sales + data[i-3].sales) / 3;
    forecast.push(Math.round(avg + (Math.random() - 0.5) * 50)); // Tambah sedikit noise
  }
  return forecast;
};

// Simulasi Peramalan AI (Sangat akurat dengan sedikit noise)
export const getAiForecast = (data) => {
  return data.map(item => Math.round(item.sales * (1 + (Math.random() - 0.5) * 0.1))); // +/- 5% dari nilai aktual
};

// Kalkulasi Metrik Inefisiensi
export const calculateMetrics = (actuals, forecast) => {
  let overstockCost = 0;
  let stockoutLoss = 0;
  const unitCost = 5; // Biaya modal per unit
  const profitPerUnit = 15; // Keuntungan hilang per unit

  actuals.forEach((actual, i) => {
    if (forecast[i] === null) return;
    const diff = forecast[i] - actual.sales;
    if (diff > 0) {
      overstockCost += diff * unitCost;
    } else {
      stockoutLoss += Math.abs(diff) * profitPerUnit;
    }
  });

  const totalInefficiency = overstockCost + stockoutLoss;
  return { overstockCost, stockoutLoss, totalInefficiency };
};
