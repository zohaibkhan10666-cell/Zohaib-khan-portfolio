import { useState, useRef, useEffect } from 'react';
import { Terminal, Send, X, Maximize2, Minimize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string;
}

interface InteractiveTerminalProps {
  onClose?: () => void;
  isModal?: boolean;
}

export function InteractiveTerminal({ onClose, isModal = false }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '1', type: 'system', text: 'ZOHAIB_OS v2.6.4 [CYBER_CORE_INITIATED]' },
    { id: '2', type: 'system', text: 'Type "help" to view executable commands or "sudo hire" to recruit.' },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    soundEngine.playClick();
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', text: `zohaib@cyber-node:~$ ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'help') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.help,
      });
    } else if (trimmed === 'bio' || trimmed === 'about') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.bio,
      });
    } else if (trimmed === 'skills' || trimmed === 'stack') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.skills,
      });
    } else if (trimmed === 'projects' || trimmed === 'work') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.projects,
      });
    } else if (trimmed === 'journey' || trimmed === 'history' || trimmed === 'experience') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.journey,
      });
    } else if (trimmed === 'education' || trimmed === 'edu') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.education,
      });
    } else if (trimmed === 'contact' || trimmed === 'email') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: PORTFOLIO_DATA.terminalCommands.contact,
      });
    } else if (trimmed === 'sudo hire' || trimmed === 'hire') {
      soundEngine.playSuccess();
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: PORTFOLIO_DATA.terminalCommands.hire,
      });
      // Scroll to contact section
      const contactEl = document.getElementById('contact');
      contactEl?.scrollIntoView({ behavior: 'smooth' });
    } else if (trimmed === 'matrix') {
      soundEngine.playWarp();
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: PORTFOLIO_DATA.terminalCommands.matrix,
      });
    } else if (trimmed === 'resume' || trimmed === 'cv') {
      soundEngine.playSuccess();
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: PORTFOLIO_DATA.terminalCommands.resume,
      });
      window.open(PORTFOLIO_DATA.personal.resumeUrl, '_blank');
    } else if (trimmed === 'status') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: PORTFOLIO_DATA.terminalCommands.status,
      });
    } else {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `Command not found: "${cmd}". Type "help" for a list of available sub-routines.`,
      });
    }

    setHistory(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    soundEngine.playKeypress();

    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className={`rounded-xl bg-[#060a19]/95 border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-xl ${
      isModal ? 'w-full max-w-2xl' : 'w-full'
    }`}>
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#091026] border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-semibold text-cyan-300 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            zohaib@cyber-node:~ (bash)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-cyan-400/60 hidden sm:inline">
            PORT: 443 // SSL ACTIVE
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-cyan-400 p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Content Window */}
      <div className="p-4 h-64 sm:h-80 overflow-y-auto font-mono text-xs space-y-2 select-text cyber-grid-dense">
        {history.map((line) => (
          <div key={line.id} className="leading-relaxed break-words">
            {line.type === 'input' && (
              <span className="text-cyan-300 font-semibold">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-slate-300">{line.text}</span>
            )}
            {line.type === 'system' && (
              <span className="text-purple-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400 inline shrink-0" />
                {line.text}
              </span>
            )}
            {line.type === 'success' && (
              <span className="text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 inline shrink-0" />
                {line.text}
              </span>
            )}
            {line.type === 'error' && (
              <span className="text-red-400">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalBottomRef} />
      </div>

      {/* Prompt Input Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#070d20] border-t border-cyan-500/20">
        <span className="text-emerald-400 font-mono text-xs font-bold">➜</span>
        <span className="text-cyan-400 font-mono text-xs font-semibold">~</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'skills', 'projects', 'sudo hire'..."
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-cyan-200 placeholder:text-slate-500"
          autoFocus
        />
        <button
          onClick={() => handleCommand(inputVal)}
          onMouseEnter={() => soundEngine.playHover()}
          className="p-1 text-cyan-400 hover:text-cyan-200 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
