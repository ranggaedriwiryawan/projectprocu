import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DemandForecasting from '../components/DemandForecasting';
import VendorAnalysis from '../components/VendorAnalysis';
import AutomationVisualizer from '../components/AutomationVisualizer';
import { motion } from 'framer-motion';

const tabs = [
  { name: 'Peramalan Permintaan', component: <DemandForecasting /> },
  { name: 'Analisis Vendor', component: <VendorAnalysis /> },
  { name: 'Otomatisasi Siklus', component: <AutomationVisualizer /> },
];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Navbar active="Simulasi Pengadaan" />
      <motion.main
        className="max-w-5xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-4 mb-6 border-b">
          {tabs.map((tab, idx) => (
            <button
              key={tab.name}
              className={`py-2 px-4 font-medium transition border-b-2 ${activeTab === idx ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-600 hover:text-blue-600'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div>{tabs[activeTab].component}</div>
      </motion.main>
    </div>
  );
}
