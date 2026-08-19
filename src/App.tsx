import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/ui/CustomCursor';
import { SideNav } from './components/ui/SideNav';
import { Navbar } from './components/ui/Navbar';
import { ResumeModal } from './components/ui/ResumeModal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { JourneySection } from './components/sections/JourneySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ValuesSection } from './components/sections/ValuesSection';
import { SpotifySection } from './components/sections/SpotifySection';
import { ContactSection } from './components/sections/ContactSection';
import { FooterSection } from './components/sections/FooterSection';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Ensure page loads at hero section (home) on refresh
  useEffect(() => {
    if (window.location.hash && window.location.hash !== '#home') {
      window.history.replaceState(null, '', '#home');
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040714] text-slate-100 cyber-grid overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sci-Fi Global Scanline Overlay */}
      <div className="fixed inset-0 scanline-overlay z-30 pointer-events-none opacity-30" />

      {/* Sci-Fi Ambient Glow Orbs */}
      <div className="fixed top-1/4 left-[50px] w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 right-[-100px] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-2/3 left-1/2 w-80 h-80 bg-emerald-600/05 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Custom Hollow Ring Magnetic Cursor */}
      <CustomCursor />

      {/* Fixed Desktop Side Navigation (inspired by aliportfoliowebsite) */}
      <SideNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Mobile / Tablet Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Column */}
      <div className="lg:ml-64 flex flex-col min-h-screen relative z-10">
        <main className="flex-1">
          {/* Home / Hero */}
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* About Me */}
          <AboutSection />

          {/* Journey & Education */}
          <JourneySection />

          {/* Featured Projects */}
          <ProjectsSection />

          {/* Technical Skills & Arsenal */}
          <SkillsSection />

          {/* Core Values & What I Believe In */}
          <ValuesSection />

          {/* Spotify Cyberdeck Audio */}
          <SpotifySection />

          {/* Contact Me */}
          <ContactSection />
        </main>

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
