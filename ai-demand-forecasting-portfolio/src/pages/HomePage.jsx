import React from 'react';
import Navbar from '../components/Navbar';
import { caseStudies } from '../utils/mockData';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div>
      <Navbar active="Studi Kasus" />
      <motion.main
        className="max-w-5xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
          Mengubah Pengadaan Menjadi Mesin Pertumbuhan dengan Intelijensi Buatan.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map(card => (
            <motion.div
              key={card.title}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="mb-4 w-full flex justify-center">
                {card.visual}
              </div>
              <h2 className="text-lg font-semibold mb-2 text-blue-700">{card.title}</h2>
              <p className="text-gray-600 mb-2">{card.metric}</p>
              <button
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => window.location.href = card.ctaHref}
              >
                {card.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
}
