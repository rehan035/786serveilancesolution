import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/securityData';

interface NavbarProps {
  selectedSkuCount: number;
  onNavigateToSurvey: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedSkuCount,
  onNavigateToSurvey,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Products', href: '#catalogue' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#about' },
    { label: 'Contact', href: '#site-survey' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#060C18]/95 backdrop-blur-md border-b border-slate-800/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#"
          className="font-display text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          {COMPANY_INFO.name}
        </a>

        {/* Zone 2: Centered Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 decoration-sky-500 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateToSurvey}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
          >
            <span className="sm:hidden">
              {selectedSkuCount > 0 ? `Survey (${selectedSkuCount})` : 'Book Survey'}
            </span>
            <span className="hidden sm:inline">
              {selectedSkuCount > 0
                ? `Schedule Site Survey (${selectedSkuCount})`
                : 'Schedule Site Survey'}
            </span>
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded border border-slate-800 shrink-0"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0A1222] border-b border-slate-800 px-6 py-4 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-sky-400 border-b border-slate-800/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
