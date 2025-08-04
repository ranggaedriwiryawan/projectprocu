import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

  return (
    <div>
      <Navbar active="Tentang Saya" />
      <motion.main
        className="max-w-2xl mx-auto px-4 py-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/profile-photo.jpg"
          alt="Foto profil Nama Anda"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-blue-200"
        />
        <h1 className="text-2xl font-bold text-blue-700 mb-2">Nama Anda</h1>
        <p className="text-gray-700 text-center mb-6">
          Saya adalah seorang Principal Fullstack Engineer yang bersemangat dalam mengintegrasikan AI ke dalam proses bisnis, khususnya pengadaan. Dengan pengalaman membangun solusi end-to-end, saya percaya teknologi dapat mengubah pengadaan menjadi mesin pertumbuhan bisnis.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 w-full text-center mb-4">
          <span className="font-semibold text-blue-700">Tertarik berkolaborasi?</span><br />
          <span>Email: <a href="mailto:your.email@email.com" className="text-blue-600 underline">your.email@email.com</a></span><br />
          <span>Atau jadwalkan pertemuan: <a href="https://calendly.com/yourcalendly" className="text-blue-600 underline">Calendly</a></span>
        </div>
      </motion.main>
    </div>
  );
}
