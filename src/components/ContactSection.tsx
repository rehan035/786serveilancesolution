import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Trash2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/securityData';
import {
  InquiryFormInput,
  validateInquiryForm,
} from '../utils/securityCalculator';

interface SubmittedDocket extends InquiryFormInput {
  docketId: string;
  submittedAt: string;
}

interface ContactSectionProps {
  selectedSkus: string[];
  onRemoveSku: (sku: string) => void;
  prefilledSolution: string;
  prefilledNotes: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedSkus,
  onRemoveSku,
  prefilledSolution,
  prefilledNotes,
}) => {
  const [formState, setFormState] = useState<InquiryFormInput>({
    inquiryType: 'survey',
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    cityDistrict: 'Lahore',
    securitySolution: '4K IP Surveillance & ANPR',
    propertyType: 'Commercial Plaza/Shop',
    projectMessage: '',
    whatsappFastTrack: true,
    selectedSkus: [],
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof InquiryFormInput, string>>
  >({});
  const [submittedDockets, setSubmittedDockets] = useState<SubmittedDocket[]>([]);

  useEffect(() => {
    if (prefilledSolution) {
      setFormState((prev) => ({
        ...prev,
        securitySolution: prefilledSolution,
      }));
    }
  }, [prefilledSolution]);

  useEffect(() => {
    if (prefilledNotes) {
      setFormState((prev) => ({
        ...prev,
        projectMessage: prefilledNotes,
      }));
    }
  }, [prefilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: InquiryFormInput = {
      ...formState,
      selectedSkus,
    };

    const validation = validateInquiryForm(payload);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newDocket: SubmittedDocket = {
      ...payload,
      docketId: `786-LHR-${Math.floor(1000 + Math.random() * 9000)}`,
      submittedAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setSubmittedDockets((prev) => [newDocket, ...prev]);
    setFormState((prev) => ({
      ...prev,
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      projectMessage: '',
    }));
  };

  return (
    <section
      id="site-survey"
      className="py-16 lg:py-24 bg-[#060C18] border-b border-slate-800/90"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Clean Aligned Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono-tabular text-sky-400 mb-2">
            05. SITE SURVEY &amp; HEADQUARTERS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Schedule an On-Site Security Inspection
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Our licensed engineers visit your premises in Lahore to map optical blindspots
            and deliver an itemized hardware quotation.
          </p>
        </div>

        {/* Clean 12-Column Split: 5 Cols HQ Info | 7 Cols Survey Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 Cols): Johar Town HQ Coordinates */}
          <div className="lg:col-span-5 rounded-lg bg-[#0B1324] border border-slate-800 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-5 border-b border-slate-800">
                <div className="text-xs font-mono-tabular text-sky-400 mb-1">
                  LAHORE HEADQUARTERS
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {COMPANY_INFO.legalEntity}
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono-tabular text-slate-400">
                      REGISTERED OFFICE
                    </div>
                    <div className="text-slate-100 font-medium mt-0.5">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {COMPANY_INFO.landmark}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono-tabular text-slate-400">
                      DIRECT HOTLINES
                    </div>
                    <div className="text-slate-100 font-mono-tabular mt-0.5 space-y-1">
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.salesPhone}`}
                          className="hover:text-sky-400 transition-colors"
                        >
                          Sales: {COMPANY_INFO.salesPhone}
                        </a>
                      </div>
                      <div>
                        <a
                          href={`tel:${COMPANY_INFO.techPhone}`}
                          className="hover:text-sky-400 transition-colors"
                        >
                          Tech Support: {COMPANY_INFO.techPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono-tabular text-slate-400">
                      OFFICIAL EMAIL
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sky-400 hover:underline font-mono-tabular mt-0.5 inline-block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono-tabular text-slate-400">
                      OPERATING HOURS
                    </div>
                    <div className="text-slate-100 mt-0.5">
                      {COMPANY_INFO.operatingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.salesPhoneClean}?text=${encodeURIComponent(
                  'Hello 786 Surveillance Solution, I would like to schedule an on-site security survey in Lahore.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>WhatsApp Desk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maps.google.com/?q=Zam+Zam+Tower+Johar+Town+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded bg-[#060C18] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (7 Cols): Streamlined & Aligned Survey Form */}
          <div className="lg:col-span-7 rounded-lg bg-[#0B1324] border border-slate-800 p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Attached SKUs from Catalogue if any */}
              {selectedSkus.length > 0 && (
                <div className="p-3.5 rounded bg-[#060C18] border border-slate-800 space-y-2">
                  <div className="text-xs font-mono-tabular text-sky-400">
                    SELECTED HARDWARE SKUs ({selectedSkus.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkus.map((sku) => (
                      <div
                        key={sku}
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0B1324] border border-slate-700 text-xs font-mono-tabular text-slate-200"
                      >
                        <span>{sku}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${sku} from inquiry`}
                          onClick={() => onRemoveSku(sku)}
                          className="text-slate-400 hover:text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    Full Name / Organization *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    placeholder="e.g. Tariq Mahmood"
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                  {errors.fullName && (
                    <p role="alert" className="text-xs text-rose-400 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    Phone Number (+92) *
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={formState.phoneNumber}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                  {errors.phoneNumber && (
                    <p role="alert" className="text-xs text-rose-400 mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={formState.emailAddress}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        emailAddress: e.target.value,
                      }))
                    }
                    placeholder="name@company.pk"
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                  />
                  {errors.emailAddress && (
                    <p role="alert" className="text-xs text-rose-400 mt-1">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-city"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    City / District
                  </label>
                  <select
                    id="inquiry-city"
                    value={formState.cityDistrict}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        cityDistrict: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Lahore">Lahore (HQ Territory)</option>
                    <option value="Sheikhupura">Sheikhupura Industrial</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Kasur">Kasur</option>
                    <option value="Other Punjab / Pakistan">Other (Punjab / Nationwide)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Required System & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="inquiry-solution"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    Primary Security System
                  </label>
                  <select
                    id="inquiry-solution"
                    value={formState.securitySolution}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        securitySolution: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
                  >
                    <option value="4K IP Surveillance & ANPR">4K IP Surveillance &amp; ANPR</option>
                    <option value="HD CCTV & Coaxial Retrofits">HD CCTV &amp; Coaxial Retrofits</option>
                    <option value="Biometric Access & Turnstiles">Biometric Access &amp; Turnstiles</option>
                    <option value="Pulsed Electric Perimeter Fencing">
                      Pulsed Electric Perimeter Fencing
                    </option>
                    <option value="IP Video Door Phones & Intercoms">
                      IP Video Door Phones &amp; Intercoms
                    </option>
                    <option value="Walk-Through Screening & Fiber Networks">
                      Walk-Through Screening &amp; Fiber Networks
                    </option>
                    <option value="Complete Turnkey Security System">
                      Complete Turnkey Security System
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-property"
                    className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                  >
                    Property Type
                  </label>
                  <select
                    id="inquiry-property"
                    value={formState.propertyType}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        propertyType: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 focus:border-sky-500 focus:outline-none"
                  >
                    <option value="Commercial Plaza/Shop">Commercial Plaza / Showroom</option>
                    <option value="Industrial Factory">Industrial Factory / Warehouse</option>
                    <option value="Residential Home/Villa">Residential Home / Villa</option>
                    <option value="Corporate Office">Corporate Headquarters</option>
                  </select>
                </div>
              </div>

              {/* Project Scope Details */}
              <div>
                <label
                  htmlFor="inquiry-message"
                  className="block text-xs font-mono-tabular text-slate-300 uppercase mb-1.5"
                >
                  Project Scope Notes
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={formState.projectMessage}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      projectMessage: e.target.value,
                    }))
                  }
                  placeholder="Specify approximate number of camera points, boundary wall length, or preferred visit date..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#060C18] border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Submit Security Inquiry &amp; Schedule Visit
              </button>
            </form>

            {/* Submitted Inquiry Confirmation Ledger */}
            {submittedDockets.length > 0 && (
              <div
                aria-live="polite"
                className="mt-6 pt-6 border-t border-slate-800 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>DISPATCH DOCKET LOGGED WITH JOHAR TOWN ENGINEERING DESK</span>
                </div>

                {submittedDockets.map((docket) => (
                  <div
                    key={docket.docketId}
                    className="p-4 rounded bg-[#060C18] border border-emerald-500/40 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-mono-tabular">
                      <span className="text-emerald-400 font-bold">
                        REF: {docket.docketId}
                      </span>
                      <span className="text-slate-400">
                        {docket.submittedAt} · {docket.cityDistrict}
                      </span>
                    </div>
                    <div className="text-slate-200">
                      <span className="font-semibold">{docket.fullName}</span> (
                      {docket.phoneNumber}) — {docket.securitySolution}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
