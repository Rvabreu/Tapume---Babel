
import React, { useState } from 'react';
import { generateXisIdea } from '../services/geminiService';
import { LoadingStatus, XisSuggestion } from '../types';
import { ChefHat, Sparkles, Loader2, RefreshCw, Music } from 'lucide-react';

export const XisGenerator: React.FC = () => {
  const [mood, setMood] = useState('');
  const [suggestion, setSuggestion] = useState<XisSuggestion | null>(null);
  const [status, setStatus] = useState<LoadingStatus>(LoadingStatus.IDLE);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setStatus(LoadingStatus.LOADING);
    try {
      const result = await generateXisIdea(mood);
      setSuggestion(result);
      setStatus(LoadingStatus.SUCCESS);
    } catch (err) {
      setStatus(LoadingStatus.ERROR);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 md:p-12 rounded-[2rem] bg-zinc-900/40 border-2 border-zinc-800 backdrop-blur-2xl relative overflow-hidden group">
      {/* Decorative Rock Elements */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Music className="w-24 h-24 rotate-12" />
      </div>

      <form onSubmit={handleGenerate} className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2 text-left">
          <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Como está sua fome hoje?</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Ex: Fome de Guitarrista, Algo pesado, Vibe Clássica..."
              className="flex-1 bg-black/40 border-2 border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all font-bold"
            />
            <button
              type="submit"
              disabled={status === LoadingStatus.LOADING}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-black italic flex items-center justify-center gap-3 transition-all transform hover:scale-105"
            >
              {status === LoadingStatus.LOADING ? <Loader2 className="animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {status === LoadingStatus.LOADING ? 'GRELHANDO...' : 'GERAR'}
            </button>
          </div>
        </div>
      </form>

      {status === LoadingStatus.SUCCESS && suggestion && (
        <div className="mt-10 p-8 bg-black/60 border-2 border-purple-500/30 rounded-3xl animate-in fade-in slide-in-from-bottom-6 duration-700 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl pointer-events-none"></div>
          
          <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-[10px] font-black uppercase italic rounded-md mb-4">
            RECOMENDAÇÃO DO CHEF BABEL
          </div>
          
          <h3 className="text-4xl font-black text-white mb-3 font-heading italic tracking-tighter uppercase">{suggestion.name}</h3>
          <p className="text-zinc-400 mb-6 italic text-lg leading-relaxed">"{suggestion.description}"</p>
          
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] flex items-center gap-2">
              <div className="w-8 h-[2px] bg-purple-400/30"></div> SETLIST DE INGREDIENTES
            </h4>
            <div className="flex flex-wrap gap-2">
              {suggestion.ingredients.map((ing, idx) => (
                <span key={idx} className="bg-white/5 border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-xl">
                  {ing}
                </span>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => { setSuggestion(null); setStatus(LoadingStatus.IDLE); setMood(''); }}
            className="mt-10 text-[10px] font-black text-zinc-500 hover:text-yellow-400 flex items-center gap-2 transition-all uppercase tracking-widest"
          >
            <RefreshCw className="w-3 h-3" /> Mudar a Vibe
          </button>
        </div>
      )}

      {status === LoadingStatus.ERROR && (
        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold rounded-xl italic">
          ⚠️ O Chef IA quebrou uma corda da guitarra. Tente novamente!
        </div>
      )}
    </div>
  );
};
