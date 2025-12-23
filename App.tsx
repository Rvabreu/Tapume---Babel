
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  ArrowRight, 
  MapPin, 
  Flame, 
  Zap, 
  Truck, 
  ExternalLink, 
  Music, 
  Clock 
} from 'lucide-react';

const BrandText: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-3xl md:text-4xl",
    lg: "text-5xl md:text-6xl",
    hero: "text-7xl md:text-9xl lg:text-[160px]"
  };

  return (
    <div className="flex flex-col items-center select-none text-center">
      <h2 className={`${sizeClasses[size]} font-black italic tracking-tighter font-heading leading-none text-white transition-all`}>
        BABEL
      </h2>
      <div className="flex items-center gap-2 w-full max-w-sm md:max-w-none justify-center">
        <div className="flex-1 h-[2px] bg-purple-600 hidden md:block"></div>
        <span className={`${size === 'hero' ? 'text-xl md:text-3xl' : 'text-[10px]'} font-black text-yellow-400 uppercase tracking-[0.4em] leading-none whitespace-nowrap px-2`}>
          STUDIO BAR
        </span>
        <div className="flex-1 h-[2px] bg-purple-600 hidden md:block"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const LAUNCH_DATE = new Date('2026-01-20T20:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080808]">
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1974')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-purple-900/10 blur-[200px] rounded-full"></div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[150px] rounded-full"></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 bg-[#080808]/40 backdrop-blur-xl">
        <div className="flex items-center gap-6 group cursor-pointer">
          <BrandText size="sm" />
          <div className="h-10 w-[1px] bg-white/10 hidden lg:block mx-2"></div>
          <span className="text-[10px] text-zinc-500 font-bold tracking-[0.4em] uppercase hidden md:block">Passo Fundo / RS</span>
        </div>
        
        <div className="flex items-center gap-4 bg-yellow-400 text-black px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(251,191,36,0.3)] animate-pulse">
          <Zap className="w-4 h-4 fill-current mr-2" />
          ESTREIA 20/01/2026
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        
        {/* BRAND CENTER - Perfeitamente centralizado */}
        <div className="relative mb-20 animate-in fade-in zoom-in duration-1000 group w-full flex justify-center">
           <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[120px] opacity-30 scale-150 animate-pulse pointer-events-none"></div>
           <BrandText size="hero" />
        </div>

        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.1)]">
           <Truck className="w-5 h-5 text-purple-500" />
           <span className="text-sm font-black text-zinc-100 uppercase tracking-[0.15em]">Sacie sua fome com o xis mais rock n' roll da cidade</span>
        </div>

        <h1 className="text-7xl md:text-[110px] lg:text-[140px] font-black italic tracking-tighter leading-[0.75] font-heading mb-14 uppercase">
          ONDE O <span className="text-yellow-400 text-glow-yellow">ROCK</span><br />
          ENCONTRA O <span className="text-purple-600 text-glow-purple">SABOR.</span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-zinc-400 text-xl md:text-3xl font-medium leading-relaxed">
            O Babel Studio Bar está iniciando uma nova forma de pedir Xis, em breve!
          </p>
          <div className="border-y-2 border-yellow-400/20 py-8">
            <span className="text-white font-black italic text-4xl md:text-6xl tracking-tighter uppercase block">Aguardem..</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Segs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-purple-600/30 blur-2xl group-hover:bg-purple-600/50 transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-zinc-900/60 border-b-8 border-yellow-400 p-10 md:p-12 rounded-[2.5rem] w-40 md:w-56 backdrop-blur-md hover:translate-y-[-10px] transition-all duration-500 border border-white/5">
                <div className="text-6xl md:text-9xl font-black text-white italic font-heading tracking-tighter leading-none">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.5em] mt-5">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Access */}
        <div className="w-full max-w-3xl mb-12 bg-zinc-900/40 border border-white/10 rounded-[4rem] p-10 md:p-16 shadow-2xl backdrop-blur-sm">
          <h3 className="text-yellow-400 font-black uppercase text-xl tracking-[0.5em] italic mb-10">LISTA VIP BACKSTAGE</h3>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-5">
              <input 
                type="email" 
                placeholder="SEU MELHOR E-MAIL" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/60 border-2 border-zinc-800 rounded-3xl px-10 py-7 text-white focus:outline-none focus:border-yellow-400 transition-all placeholder:text-zinc-700 font-black uppercase text-base text-center md:text-left"
              />
              <button className="bg-yellow-400 text-black font-black px-14 py-7 rounded-3xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-4 shadow-xl">
                INSCREVER-SE <ArrowRight className="w-7 h-7" />
              </button>
            </form>
          ) : (
            <div className="bg-purple-600 text-white p-10 rounded-[2.5rem] font-black italic uppercase tracking-[0.2em] animate-in zoom-in duration-500 shadow-2xl">
              🤘 VOCÊ ESTÁ NA SETLIST! AGUARDE NOVIDADES.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
            
            {/* Coluna 1: Marca em texto centralizado */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-8">
              <div className="w-full flex justify-center md:justify-start">
                <BrandText size="sm" />
              </div>
              
              <div className="space-y-6 text-center md:text-left w-full">
                <div className="space-y-2">
                  <p className="text-white text-xl font-black uppercase tracking-tighter italic flex items-center justify-center md:justify-start gap-2">
                    <Music className="w-5 h-5 text-yellow-400" /> O Sabor que faz Barulho
                  </p>
                  <p className="text-zinc-500 font-bold uppercase tracking-[0.1em] text-xs">Música • Coquetéis • Cervejas • Lanches</p>
                </div>
                <p className="text-zinc-400 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                  O lendário ponto de encontro de Passo Fundo renasce focado na experiência suprema do Xis Gaúcho.
                </p>
                <a 
                  href="https://linktr.ee/babelstudiobar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-yellow-400 transition-all font-black text-xs uppercase tracking-[0.2em] group"
                >
                  ACESSAR LINKTREE <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Social */}
            <div className="md:col-span-3 flex flex-col items-center py-8 md:py-0">
              <h4 className="text-xs font-black text-zinc-600 uppercase tracking-[0.5em] mb-10 italic">CONEXÃO DIRETA</h4>
              <a 
                href="https://www.instagram.com/babelstudiobar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative p-8 bg-zinc-900/80 rounded-[2.5rem] text-zinc-400 group-hover:text-white border border-white/5 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl scale-100 group-hover:scale-110">
                    <Instagram className="w-12 h-12" />
                  </div>
                </div>
                <span className="mt-8 text-yellow-400 font-black uppercase italic tracking-[0.3em] text-sm group-hover:text-white transition-colors">
                  @babelstudiobar
                </span>
                <span className="mt-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Siga no Instagram</span>
              </a>
            </div>

            {/* Coluna 3: Localização */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-8 text-center md:text-right">
              <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] w-full max-w-xs space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-zinc-600 uppercase tracking-[0.3em]">LOCALIZAÇÃO</h4>
                  <p className="text-white text-2xl font-black italic tracking-tighter flex items-center justify-center md:justify-end gap-2">
                    PASSO FUNDO <MapPin className="w-5 h-5 text-purple-500" />
                  </p>
                  <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Rio Grande do Sul</p>
                </div>
                <div className="h-[1px] bg-white/5 w-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-zinc-600 uppercase tracking-[0.3em]">STATUS ATUAL</h4>
                  <div className="flex items-center justify-center md:justify-end gap-2 text-yellow-400 font-black italic text-sm">
                    <Clock className="w-4 h-4" /> EM CONSTRUÇÃO
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.3em]">
                Babel Studio Bar © 2026
              </span>
              <div className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
              <span className="text-zinc-700 text-[9px] uppercase font-bold tracking-[0.2em]">
                O XIS MAIS ROCK N' ROLL DO PLANALTO MÉDIO
              </span>
            </div>
            
            <div className="flex items-center gap-4 bg-black/40 px-6 py-3 rounded-full border border-white/5 group hover:border-orange-500/30 transition-colors">
              <span className="text-zinc-500 text-[9px] font-black uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                Powered by AI Experience
              </span>
              <Flame className="w-4 h-4 text-orange-600 fill-current animate-pulse" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
