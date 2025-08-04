import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Studi Kasus', href: '/' },
  { name: 'Simulasi Pengadaan', href: '/simulasi' },
  { name: 'Tentang Saya', href: '/tentang' },
];

const externalLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', href: 'https://github.com/yourprofile' },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-8">
        <span className="font-bold text-xl text-blue-700">AI Procurement</span>
        <div className="flex gap-6">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors duration-200 ${location.pathname === link.href ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {externalLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
