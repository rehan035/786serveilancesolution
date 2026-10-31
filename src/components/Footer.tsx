import React from 'react';
import { COMPANY_INFO } from '../data/securityData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040914] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          <div className="md:col-span-5 space-y-2">
            <div className="font-display text-sm font-bold text-white uppercase tracking-tight">
              {COMPANY_INFO.legalEntity}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Turnkey 4K IP surveillance, biometric access control, and pulsed electric
              perimeter fencing across Lahore and Pakistan.
            </p>
            <div className="pt-1 font-mono-tabular text-slate-300">
              {COMPANY_INFO.registrationCode} · NTN &amp; SECP Registered
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="font-display text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#solutions" className="hover:text-sky-400 transition-colors">
                  Security Solutions
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-sky-400 transition-colors">
                  Hardware Products
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  Leadership &amp; Methodology
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-1.5">
            <div className="font-display text-xs font-bold text-slate-200 uppercase tracking-wider">
              Johar Town Headquarters
            </div>
            <p className="text-slate-300">{COMPANY_INFO.address}</p>
            <div className="font-mono-tabular text-slate-200 pt-1">
              Sales: {COMPANY_INFO.salesPhone} · Tech: {COMPANY_INFO.techPhone}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            © 2025 {COMPANY_INFO.legalEntity}. Johar Town, Lahore. All Rights Reserved.
          </p>
          <div className="font-mono-tabular">{COMPANY_INFO.operatingHours}</div>
        </div>
      </div>
    </footer>
  );
};
