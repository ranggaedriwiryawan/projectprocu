
import React, { useState } from 'react';
import { vendorData } from '../utils/mockData';
import { rankVendors } from '../utils/vendorLogic';
import { motion } from 'framer-motion';

const VendorAnalysis = () => {
  // State untuk menyimpan data vendor dan status analisis
  const [vendors, setVendors] = useState(vendorData);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleAnalyzeClick = () => {
    const ranked = rankVendors(vendors);
    setVendors(ranked);
    setIsAnalyzed(true);
  };

  // Animasi framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  return (
    <div className="p-4">
      <p className="text-center text-gray-600 mb-4">
        Demonstrasi ini menyimulasikan bagaimana AI dapat memberikan skor obyektif kepada vendor.
      </p>
      <div className="text-center mb-6">
        <button
          onClick={handleAnalyzeClick}
          disabled={isAnalyzed}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isAnalyzed ? 'Analisis Selesai' : 'Analisis & Beri Peringkat Vendor'}
        </button>
      </div>
      {/* Tabel untuk menampilkan data vendor */}
      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full bg-white rounded-lg shadow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left font-bold text-gray-700">Nama Vendor</th>
              <th className="py-3 px-4 text-center font-bold text-gray-700">Harga</th>
              <th className="py-3 px-4 text-center font-bold text-gray-700">Kualitas</th>
              <th className="py-3 px-4 text-center font-bold text-gray-700">Waktu Kirim</th>
              <th className="py-3 px-4 text-center font-bold text-gray-700">Reputasi</th>
              {isAnalyzed && (
                <th className="py-3 px-4 text-center font-bold text-blue-700">Skor AI</th>
              )}
            </tr>
          </thead>
          <motion.tbody className="divide-y divide-gray-200">
            {vendors.map((vendor, index) => (
              <motion.tr
                key={vendor.id}
                variants={itemVariants}
                className={isAnalyzed && index === 0 ? 'bg-green-100' : ''}
              >
                <td className="py-3 px-4 font-medium">{vendor.name}</td>
                <td className="py-3 px-4 text-center">{vendor.criteria.price}/5</td>
                <td className="py-3 px-4 text-center">{vendor.criteria.quality}/5</td>
                <td className="py-3 px-4 text-center">{vendor.criteria.deliveryTime}/5</td>
                <td className="py-3 px-4 text-center">{vendor.criteria.reputation}/5</td>
                {isAnalyzed && (
                  <td className="py-3 px-4 text-center font-bold text-blue-600">{vendor.score}</td>
                )}
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </div>
      {isAnalyzed && (
        <p className="text-center mt-4 font-semibold text-green-700">
          Rekomendasi utama berdasarkan analisis adalah {vendors[0].name}.
        </p>
      )}
    </div>
  );
};

export default VendorAnalysis;
