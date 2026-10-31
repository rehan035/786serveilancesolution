import React, { useState } from 'react';
import { Search, Check, Plus, X, Shield } from 'lucide-react';
import {
  HARDWARE_PRODUCTS,
  HardwareProduct,
  ProductCategory,
  COMPANY_INFO,
} from '../data/securityData';
import { filterProducts } from '../utils/securityCalculator';

interface ProductsSectionProps {
  selectedSkus: string[];
  onToggleSkuInQuote: (sku: string) => void;
  onProceedToQuoteWithSkus: () => void;
}

const PRODUCT_CATEGORIES: { label: string; value: ProductCategory }[] = [
  { label: 'All Products (8)', value: 'All' },
  { label: 'IP Cameras', value: 'IP Cameras' },
  { label: 'Recorders', value: 'Recorders' },
  { label: 'Access Control', value: 'Access Control' },
  { label: 'Perimeter & Intercom', value: 'Perimeter & Intercom' },
  { label: 'Screening', value: 'Screening' },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedSkus,
  onToggleSkuInQuote,
  onProceedToQuoteWithSkus,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecProduct, setActiveSpecProduct] =
    useState<HardwareProduct | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProducts = filterProducts(
    HARDWARE_PRODUCTS,
    activeCategory,
    searchQuery
  );

  return (
    <section
      id="catalogue"
      className="py-16 lg:py-24 border-b border-slate-800/90 bg-[#081020]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Clean Aligned Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-tabular text-sky-400 mb-2">
              02. HARDWARE CATALOGUE
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Security Equipment
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Authorized OEM surveillance cameras, rackmount NVRs, biometric terminals,
              and perimeter energizers stocked at our Johar Town depot.
            </p>
          </div>

          {/* Search Input Aligned to Baseline */}
          <div className="w-full lg:w-80">
            <label htmlFor="catalogue-search" className="sr-only">
              Search hardware catalogue
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                id="catalogue-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search camera, PTZ, NVR, SKU..."
                className="w-full pl-10 pr-4 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Dedicated Filter Toolbar Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/90">
          <div
            role="tablist"
            aria-label="Filter hardware products by category"
            className="flex items-center gap-1.5 overflow-x-auto pb-1"
          >
            {PRODUCT_CATEGORIES.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(tab.value)}
                  className={`px-3.5 py-2 rounded text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0284C7] text-white'
                      : 'bg-[#0B1324] text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {selectedSkus.length > 0 ? (
            <button
              type="button"
              onClick={onProceedToQuoteWithSkus}
              className="px-4 py-2 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request Quote for {selectedSkus.length} Selected SKU(s) →
            </button>
          ) : (
            <div className="text-xs font-mono-tabular text-slate-400">
              Showing {visibleProducts.length} of {HARDWARE_PRODUCTS.length} OEM Models
            </div>
          )}
        </div>

        {/* Uniform 4-Column Product Grid with Studio Photographs */}
        {visibleProducts.length === 0 ? (
          <div className="py-12 px-6 text-center rounded-lg bg-[#0B1324] border border-slate-800">
            <p className="text-sm text-slate-300 mb-3">
              No hardware matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded bg-[#0284C7] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {visibleProducts.map((product) => {
              const isSelected = selectedSkus.includes(product.sku);
              const imgFailed = failedImages[product.id];

              return (
                <article
                  key={product.id}
                  className="rounded-lg bg-[#0B1324] border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col transition-colors group"
                >
                  {/* 4:3 Studio Product Photograph */}
                  <div className="relative aspect-[4/3] w-full bg-[#060C18] border-b border-slate-800/80 overflow-hidden">
                    {!imgFailed ? (
                      <img
                        src={product.imagePath}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [product.id]: true,
                          }))
                        }
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-slate-500">
                        <Shield className="w-8 h-8 text-sky-400 mb-2" />
                        <span className="text-xs font-mono-tabular">{product.sku}</span>
                      </div>
                    )}
                  </div>

                  {/* Uniform Card Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono-tabular text-slate-400 mb-2">
                      <span>{product.sku}</span>
                      <span className="text-emerald-400">In Stock</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-white leading-snug min-h-[2.75rem] mb-2">
                      {product.name}
                    </h3>

                    <p className="text-xs font-mono-tabular text-sky-400 truncate mb-2.5">
                      {product.shortSpec}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-2">
                      {product.highlights[0]}
                    </p>

                    {/* Aligned Bottom Button Row */}
                    <div className="mt-auto pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setActiveSpecProduct(product)}
                        className="py-2 px-3 rounded bg-[#060C18] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold text-center transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Specs
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleSkuInQuote(product.sku)}
                        className={`py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-700 hover:bg-emerald-600 text-white'
                            : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Specification Sheet Modal */}
      {activeSpecProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="spec-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveSpecProduct(null);
          }}
        >
          <div className="bg-[#0B1324] border border-slate-700 rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 bg-[#060C18] border-b sm:border-b-0 sm:border-r border-slate-800">
                <img
                  src={activeSpecProduct.imagePath}
                  alt={activeSpecProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover min-h-[200px]"
                />
              </div>

              <div className="sm:col-span-7 p-6 space-y-4">
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
                  <div>
                    <div className="text-xs font-mono-tabular text-sky-400">
                      {activeSpecProduct.sku} · {activeSpecProduct.availability}
                    </div>
                    <h3
                      id="spec-modal-title"
                      className="font-display text-lg font-bold text-white mt-0.5"
                    >
                      {activeSpecProduct.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close technical specifications modal"
                    onClick={() => setActiveSpecProduct(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded border border-slate-800 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <dl className="divide-y divide-slate-800/80 text-xs font-mono-tabular">
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-400">Output</dt>
                    <dd className="text-slate-100 text-right">
                      {activeSpecProduct.technicalSpecs.resolutionOrOutput}
                    </dd>
                  </div>
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-400">Interface</dt>
                    <dd className="text-slate-100 text-right">
                      {activeSpecProduct.technicalSpecs.interfaceProtocol}
                    </dd>
                  </div>
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-400">Protection</dt>
                    <dd className="text-slate-100 text-right">
                      {activeSpecProduct.technicalSpecs.environmentalRating}
                    </dd>
                  </div>
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-400">Power</dt>
                    <dd className="text-slate-100 text-right">
                      {activeSpecProduct.technicalSpecs.powerRequirement}
                    </dd>
                  </div>
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-400">Warranty</dt>
                    <dd className="text-emerald-400 text-right">
                      {activeSpecProduct.technicalSpecs.warranty}
                    </dd>
                  </div>
                </dl>

                <div className="flex items-center justify-end gap-2.5 pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.salesPhoneClean}?text=${encodeURIComponent(
                      `Hello 786 Surveillance Solution, I am inquiring about ${activeSpecProduct.name} (${activeSpecProduct.sku}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded bg-[#060C18] border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold"
                  >
                    WhatsApp Desk
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      if (!selectedSkus.includes(activeSpecProduct.sku)) {
                        onToggleSkuInQuote(activeSpecProduct.sku);
                      }
                      setActiveSpecProduct(null);
                      onProceedToQuoteWithSkus();
                    }}
                    className="px-4 py-2 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
