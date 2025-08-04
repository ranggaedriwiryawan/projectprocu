import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { historicalSales } from '../utils/mockData';
import { getTraditionalForecast, getAiForecast, calculateMetrics } from '../utils/forecastingLogic';

Chart.register(...registerables);

const DemandForecasting = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [metrics, setMetrics] = useState({});
  const [isAiApplied, setIsAiApplied] = useState(false);

  // Data dasar untuk grafik
  const labels = historicalSales.map(d => d.month);
  const actualSalesData = historicalSales.map(d => d.sales);
  const traditionalForecastData = getTraditionalForecast(historicalSales);

  useEffect(() => {
    // Inisialisasi grafik saat komponen dimuat
    const initialForecast = traditionalForecastData;
    setMetrics(calculateMetrics(historicalSales, initialForecast));

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Penjualan Aktual',
            data: actualSalesData,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1,
          },
          {
            label: 'Peramalan Tradisional',
            data: initialForecast,
            borderColor: 'rgb(255, 99, 132)',
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Analisis Peramalan Penjualan',
          },
        },
      },
    });

    // Cleanup saat komponen di-unmount
    return () => {
      chartInstance.current.destroy();
    };
  }, []); // Dijalankan sekali

  const handleApplyAI = () => {
    const aiForecastData = getAiForecast(historicalSales);
    setMetrics(calculateMetrics(historicalSales, aiForecastData));
    setIsAiApplied(true);
    // Update data di grafik yang sudah ada
    chartInstance.current.data.datasets[1] = {
      label: 'Peramalan AI',
      data: aiForecastData,
      borderColor: 'rgb(75, 192, 192)',
      borderDash: [], // Garis solid
    };
    chartInstance.current.update();
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Dashboard Peramalan Permintaan</h2>
      <canvas ref={chartRef} className="w-full max-w-full h-72 mb-6" style={{ background: '#f0f6ff', borderRadius: '0.5rem' }}></canvas>
      <div className="text-center my-6">
        <button 
          onClick={handleApplyAI} 
          disabled={isAiApplied}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isAiApplied ? 'Peramalan AI Diterapkan' : 'Terapkan Peramalan AI'}
        </button>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Hasil Analisis</h3>
        <p className="text-lg">Total Biaya Inefisiensi: <span className="font-mono font-bold">${metrics.totalInefficiency?.toLocaleString()}</span></p>
        <p className="text-sm text-gray-600">Estimasi Biaya Overstock: ${metrics.overstockCost?.toLocaleString()}</p>
        <p className="text-sm text-gray-600">Estimasi Kehilangan Penjualan: ${metrics.stockoutLoss?.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default DemandForecasting;
