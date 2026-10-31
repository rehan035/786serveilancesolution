import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProductsSection } from './components/ProductsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedSkus, setSelectedSkus] = useState<string[]>([]);
  const [prefilledSolution, setPrefilledSolution] = useState<string>(
    '4K IP Surveillance & ANPR'
  );
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSkuInQuote = (sku: string) => {
    setSelectedSkus((prev) =>
      prev.includes(sku) ? prev.filter((item) => item !== sku) : [...prev, sku]
    );
  };

  const handleSelectSolutionForSurvey = (solutionTitle: string) => {
    setPrefilledSolution(solutionTitle);
    scrollToSection('site-survey');
  };

  const handleInquireSimilarProject = (projectTitle: string) => {
    setPrefilledSolution('Complete Turnkey Security System');
    setPrefilledNotes(
      `Inquiring about an architecture similar to: ${projectTitle}.`
    );
    scrollToSection('site-survey');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060C18] text-[#F1F5F9]">
      <Navbar
        selectedSkuCount={selectedSkus.length}
        onNavigateToSurvey={() => scrollToSection('site-survey')}
      />

      <main className="flex-1">
        <HeroSection
          onScheduleSurvey={() => scrollToSection('site-survey')}
          onExploreCatalogue={() => scrollToSection('catalogue')}
        />

        <SolutionsSection
          onSelectSolutionForSurvey={handleSelectSolutionForSurvey}
        />

        <ProductsSection
          selectedSkus={selectedSkus}
          onToggleSkuInQuote={handleToggleSkuInQuote}
          onProceedToQuoteWithSkus={() => scrollToSection('site-survey')}
        />

        <ProjectsSection
          onInquireSimilarProject={handleInquireSimilarProject}
        />

        <AboutSection
          onScheduleWithFounder={() => {
            setPrefilledNotes(
              'Requesting an executive security architecture consultation with Founder Imtiaz Hashmi.'
            );
            scrollToSection('site-survey');
          }}
        />

        <ContactSection
          selectedSkus={selectedSkus}
          onRemoveSku={handleToggleSkuInQuote}
          prefilledSolution={prefilledSolution}
          prefilledNotes={prefilledNotes}
        />
      </main>

      <Footer />
    </div>
  );
}
