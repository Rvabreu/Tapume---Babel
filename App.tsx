
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
  Clock,
  ChevronDown
} from 'lucide-react';
import { XisGenerator } from './components/XisGenerator';

const BrandText: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-3xl md:text-4xl",
    lg: "text-5xl md:text-6xl",
    hero: "text-7xl md:text-9xl lg:text-[180px]"
  };

  return (
    <div className="flex flex-col items-center select-none text-center">
      <h2 className={`${sizeClasses[size]} font-black italic tracking-tighter font-heading leading-none text-white transition-all hover:text-yellow-400 cursor-default`}>
        BABEL
      </h2>
      <div className="flex items-center gap-2 w-full max-w-sm md:max-w-none justify-center">
        <div className="flex-1 h-[2px] bg-purple-600"></div>
        <span className={`${size === 'hero' ? 'text-xl md:text-3xl' : 'text-[10px]'} font-black text-yellow-400 uppercase tracking-[0.4em] leading-none whitespace-nowrap px-4`}>
          STUDIO BAR
        </span>
        <div className="flex-1 h-[2px] bg-purple-600"></div>
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
    if (email) { 
      setSubscribed(true); 
      setEmail(''); 
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#080808] text-white selection:bg-yellow-400 selection:text-black">
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale scale-110 blur-sm"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-black/60 to-[#080808]"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <nav className="absolute top-0 w-full flex justify-between items-center px-10 py-8 max-w-7xl">
          <BrandText size="sm" />
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] text-zinc-500 font-bold tracking-[0.4em] uppercase">PASSO FUNDO • RS</span>
            <a href="https://www.instagram.com/babelstudiobar/" target="_blank" className="hover:text-yellow-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </nav>

        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-black uppercase tracking-widest animate-bounce">
            <Flame className="w-4 h-4 fill-current" />
            Em breve: O novo templo do Xis
          </div>

          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-purple-600/30 blur-[100px] opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none"></div>
            <BrandText size="hero" />
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] font-heading mb-12">
            CONSTRUINDO O <br />
            <span className="text-yellow-400 text-glow-yellow">SABOR SUPREMO</span>
          </h1>

          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-12 uppercase tracking-tight italic">
            Estamos reformando a cozinha, afinando as guitarras e preparando a chapa. O Babel Studio Bar volta com o Xis que você respeita.
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex items-center gap-3 px-8 py-4 bg-zinc-900/80 border border-white/5 rounded-2xl backdrop-blur-md">
              <Zap className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-black italic uppercase tracking-widest text-sm">Estreia 20/01/2026</span>
            </div>
            
            <a href="#countdown" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-xs font-black uppercase tracking-[0.3em] group">
              Role para ver mais <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* Countdown Section */}
      <section id="countdown" className="relative z-10 py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20">
            <div className="h-20 w-[2px] bg-gradient-to-b from-transparent to-purple-600 mb-8"></div>
            <h3 className="text-xs font-black text-purple-500 uppercase tracking-[0.6em] italic mb-4">CRONÔMETRO DO ROCK</h3>
            <div className="text-4xl md:text-6xl font-black italic font-heading tracking-tighter text-white">FALTAM APENAS...</div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-zinc-900/40 border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm transition-all hover:border-yellow-400/30">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Music className="w-24 h-24 rotate-12" />
                </div>
                <div className="text-7xl md:text-9xl font-black text-white italic font-heading tracking-tighter leading-none mb-4">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.5em]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Experience Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-[#050505] to-[#080808]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-1 bg-purple-600 text-white text-[10px] font-black uppercase italic rounded-md mb-6">
              IA EXPERIENCE
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter font-heading mb-8 uppercase">
              Descubra seu <span className="text-purple-500">Próximo Xis</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              Enquanto a chapa não esquenta, peça para nossa Inteligência Artificial criar uma sugestão de Xis personalizada para sua vibe de hoje.
            </p>
            
            <XisGenerator />
          </div>
        </div>
      </section>

      {/* Backstage Access */}
      <section className="relative z-10 py-32 bg-yellow-400 text-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="text-[300px] font-black italic font-heading opacity-10 absolute -top-40 -left-20 select-none">BABEL</div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter font-heading mb-6 uppercase leading-none">
            ACESSO AO BACKSTAGE
          </h2>
          <p className="text-black/80 text-xl font-bold italic mb-12 uppercase tracking-tight">
            Seja avisado no minuto que abrirmos as portas.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="SEU MELHOR E-MAIL" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black text-white rounded-2xl px-8 py-5 focus:outline-none focus:ring-4 focus:ring-black/20 font-black uppercase tracking-widest text-sm"
              />
              <button className="bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-2xl">
                GARANTIR LUGAR <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="bg-black text-white p-12 rounded-[2.5rem] font-black italic uppercase tracking-[0.2em] animate-in zoom-in duration-500 shadow-2xl inline-block">
              🤘 VOCÊ ESTÁ NA SETLIST! AGUARDE O SHOW.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#050505] border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <BrandText size="sm" />
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
                PASSO FUNDO • RIO GRANDE DO SUL
              </p>
            </div>

            <div className="flex gap-8">
              <a href="https://www.instagram.com/babelstudiobar/" target="_blank" className="flex flex-col items-center group">
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-500 group-hover:text-yellow-400 group-hover:bg-zinc-800 transition-all">
                  <Instagram className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-50">Instagram</span>
              </a>
              <a href="https://linktr.ee/babelstudiobar" target="_blank" className="flex flex-col items-center group">
                <div className="p-5 bg-zinc-900 rounded-2xl text-zinc-500 group-hover:text-yellow-400 group-hover:bg-zinc-800 transition-all">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-50">Linktree</span>
              </a>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 text-yellow-400 font-black italic text-sm uppercase tracking-widest mb-2">
                <Clock className="w-4 h-4" /> EM CONSTRUÇÃO
              </div>
              <p className="text-zinc-700 text-[9px] font-bold uppercase tracking-widest">
                BABEL STUDIO BAR © 2026 • TODOS OS DIREITOS RESERVADOS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
