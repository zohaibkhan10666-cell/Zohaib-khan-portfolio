import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Copy, Check, Radio, Phone, MapPin, Sparkles, ShieldCheck, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundEngine.playWarp();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      soundEngine.playSuccess();

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#00ff9d', '#8b5cf6', '#ffffff'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>// GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Extraordinary</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          Available for internships, freelance projects, and full-time opportunities. Drop a line or connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="cyber-glass rounded-2xl p-5 relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                EMAIL ADDRESS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                ACTIVE
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#060a1e] border border-cyan-500/20 gap-2">
              <span className="font-mono text-xs text-cyan-200 truncate">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold transition-all flex items-center gap-1 shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="cyber-glass rounded-2xl p-5 relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-cyan-400" />
                PHONE / WHATSAPP
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                CALL / MSG
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#060a1e] border border-cyan-500/20 gap-2">
              <span className="font-mono text-xs text-cyan-200 truncate">
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <button
                onClick={handleCopyPhone}
                onMouseEnter={() => soundEngine.playHover()}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold transition-all flex items-center gap-1 shrink-0"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="cyber-glass rounded-2xl p-5 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#091436] border border-cyan-500/30 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location Base</div>
                <div className="text-sm font-orbitron font-bold text-slate-100">
                  {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted Message Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="cyber-glass rounded-2xl p-6 sm:p-7 relative overflow-hidden"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3 mb-5">
              <h3 className="text-sm font-orbitron font-bold text-slate-100 flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                SEND A MESSAGE
              </h3>
              <span className="text-[10px] font-mono text-emerald-400">
                ● STATUS: ONLINE
              </span>
            </div>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(0,255,157,0.4)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-orbitron font-bold text-emerald-300">
                  MESSAGE TRANSMITTED!
                </h4>
                <p className="text-xs font-mono text-slate-300 max-w-sm">
                  Thank you for reaching out, {formData.name || 'friend'}! I will review your message and reply as soon as possible.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-cyan-300 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => soundEngine.playHover()}
                      placeholder="e.g. Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a1c] border border-cyan-500/25 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cyan-300 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => soundEngine.playHover()}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a1c] border border-cyan-500/25 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={() => soundEngine.playHover()}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a1c] border border-cyan-500/25 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cyan-300 mb-1">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => soundEngine.playHover()}
                    placeholder="Describe your project, timeline, or idea..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a1c] border border-cyan-500/25 text-slate-100 placeholder:text-slate-600 text-xs font-mono focus:border-cyan-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-600 text-[#040714] font-orbitron font-bold text-xs tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
