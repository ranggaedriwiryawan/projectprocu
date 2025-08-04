
import React, { useState } from 'react';

const steps = [
  {
    name: 'Permintaan Dibuat',
    desc: 'Permintaan pengadaan diajukan oleh user.'
  },
  {
    name: 'Persetujuan AI',
    desc: 'AI menganalisis kebutuhan dan menyetujui permintaan secara otomatis.'
  },
  {
    name: 'PO Dibuat',
    desc: 'Purchase Order dibuat secara otomatis oleh sistem.'
  },
  {
    name: 'Faktur Diterima (OCR)',
    desc: 'Faktur diproses dengan OCR untuk ekstraksi data otomatis.'
  },
  {
    name: 'Verifikasi AI',
    desc: 'AI secara otomatis mencocokkan data faktur dengan Purchase Order, mengurangi kesalahan manual hingga 100%.'
  },
  {
    name: 'Pembayaran',
    desc: 'Pembayaran dilakukan setelah verifikasi selesai.'
  },
];

export default function AutomationVisualizer() {
  const [active, setActive] = useState(null);
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Visualisasi Otomatisasi Siklus</h2>
      <div className="flex flex-row items-center justify-between gap-4 overflow-x-auto pb-4">
        {steps.map((step, idx) => (
          <div key={step.name} className="flex flex-col items-center relative min-w-[8rem]">
            <button
              className={`w-36 h-16 rounded-lg border-2 ${active === idx ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-white'} font-medium mb-2 transition focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onClick={() => setActive(idx)}
              tabIndex={0}
            >
              {step.name}
            </button>
            {idx < steps.length - 1 && (
              <div className="w-8 h-1 bg-blue-300 absolute top-8 left-full"></div>
            )}
            {active === idx && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-blue-50 border border-blue-200 rounded p-2 w-64 shadow text-sm z-10 animate-fade-in">
                <span className="font-semibold text-blue-700">Peran AI:</span> {step.desc}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-gray-500 text-sm">
        Klik setiap langkah untuk melihat bagaimana AI berperan dalam proses pengadaan.
      </div>
    </div>
  );
}
