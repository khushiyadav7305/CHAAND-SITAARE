import React, { useState } from 'react';
// Yahan Layers3 add kiya hai import mein
import { Mail, ArrowRight, Sparkles, X, Scissors, ScrollText, Layers3 } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

// Assets Imports
import sketchImg from '../assets/sketch.png'; 
import fabricImg from '../assets/real.png'; 
import prod1 from '../assets/prod1.png'; 
import prod2 from '../assets/prod2.png';
import prod3 from '../assets/prod3.png';

const HomeContent = () => {
  const navigate = useNavigate();
  const [activeMessage, setActiveMessage] = useState(null);

  const latestDrops = [
    { id: 1, img: prod1, name: "Luna Cami Top", fabric: "Georgette", wash: "Dry Clean Only", price: "₹1,800" },
    { id: 2, img: prod2, name: "A-Line Kurti", fabric: "Organic Cotton", wash: "Machine Cold", price: "₹3,200" },
    { id: 3, img: prod3, name: "Floral Print Dress", fabric: "Polyester Silk", wash: "Dry Clean Only", price: "₹4,500" },
  ];

  const handleEnvelopeClick = (msg) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E2C38E', '#1A0B2E', '#ffffff']
    });
    setActiveMessage(msg);
  };

  return (
    <div className="flex flex-col w-full pb-20 overflow-hidden" style={{ backgroundColor: '#FAF9F6' }}>
      
      {/* 1. HERO SECTION - Celestial Minimalism (Updated) */}
      <section className="py-36 text-center px-4 relative overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none">
          <Layers3 size={500} className="text-[#1A0B2E]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E2C38E]/30 mb-8">
            <Sparkles size={12} className="text-[#E2C38E]" />
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1A0B2E]/60">
              The Architecture of Couture
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-serif text-[#1A0B2E] tracking-tighter leading-[0.85] mb-8">
            Engineering <br /> 
            <span className="italic font-light italic" style={{ color: '#E2C38E' }}>Celestial Grace.</span>
          </h1>

          {/* Subtext */}
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed tracking-wide">
              Where the <span className="text-[#1A0B2E] font-bold underline underline-offset-4 decoration-[#E2C38E]">precision of an engineer</span> meets the soul of a designer. 
              Our Moonlight Edition Prototype 01 is now live for the dreamers.
            </p>

            {/* CTA Button - Upgraded */}
            <div className="pt-6">
              <button 
                onClick={() => navigate('/collections')}
                className="group relative inline-flex items-center gap-4 px-14 py-5 bg-[#1A0B2E] text-white rounded-full font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#1A0B2E]/30"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-[#E2C38E] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <span className="relative z-10 group-hover:text-[#1A0B2E] transition-colors">Shop the Collection</span>
                <ArrowRight size={16} className="relative z-10 group-hover:text-[#1A0B2E] group-hover:translate-x-2 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Side Text */}
        <div className="hidden lg:block absolute left-10 bottom-20 -rotate-90 origin-left">
          <p className="text-[9px] font-bold tracking-[0.5em] uppercase text-slate-300">Edition 01 / 2026</p>
        </div>
      </section>
      
      {/* 2. LATEST DROPS - Modern Glass Cards */}
      <section className="px-6 md:px-14 py-24 bg-white/40 border-y border-slate-100">
        <div className="flex items-end justify-between mb-16 max-w-7xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-[#1A0B2E] font-serif italic text-4xl tracking-tight uppercase">Latest Drops</h2>
              <div className="h-[2px] w-20 bg-[#E2C38E]"></div>
            </div>
            <button onClick={() => navigate('/collections')} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1A0B2E] transition-all">
              View All <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {latestDrops.map((prod) => (
            <div key={prod.id} className="group">
              <div className="relative aspect-[3/4] bg-[#F3EEF9] overflow-hidden rounded-[2.5rem] shadow-sm group-hover:shadow-2xl transition-all duration-1000">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                
                {/* Price Tag */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-[#1A0B2E] shadow-sm">
                  {prod.price}
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-[#1A0B2E]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-12">
                   <div className="border-l-2 border-[#E2C38E] pl-6 text-white space-y-3">
                      <p className="text-[#E2C38E] text-[10px] font-black uppercase tracking-widest">Architecture</p>
                      <p className="text-xl font-serif italic">{prod.name}</p>
                      <p className="text-[10px] opacity-60 uppercase leading-loose">{prod.fabric} • {prod.wash}</p>
                   </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-sm font-bold text-[#1A0B2E] uppercase tracking-widest group-hover:text-[#E2C38E] transition-colors">{prod.name}</h3>
                <p className="text-[9px] text-slate-400 mt-1 italic tracking-widest uppercase">Engineered Fit</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DESIGNER JOURNAL - The Story Preview */}
      <section className="px-6 md:px-14 py-32 flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-3">
             <Scissors size={20} className="text-[#E2C38E]" />
             <p className="text-slate-400 text-[10px] font-bold tracking-[0.4em] uppercase font-serif italic">From the Lab</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[#1A0B2E] leading-[0.9] tracking-tighter">
            Sketch <br/> to <span className="italic" style={{ color: '#E2C38E' }}>Stitch.</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg italic border-l-4 border-[#F3EEF9] pl-8">
            "Har dhage ke piche ek calculation hai. Hum sirf kapde nahi silte, hum comfort ko architecture karte hain."
          </p>
          <button 
            onClick={() => navigate('/designer-lab')}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A0B2E] hover:gap-6 transition-all"
          >
            Read the Story <ArrowRight size={16} className="text-[#E2C38E]"/>
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-8 w-full">
            <div className="space-y-4">
              <img src={sketchImg} className="w-full h-[450px] object-cover rounded-[3.5rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-100" />
              <p className="text-[9px] text-center text-slate-400 uppercase tracking-[0.2em] font-bold">The Blueprint</p>
            </div>
            <div className="space-y-4 mt-16">
              <img src={fabricImg} className="w-full h-[450px] object-cover rounded-[3.5rem] shadow-xl hover:scale-[1.02] transition-all duration-1000 border border-slate-100" />
              <p className="text-[9px] text-center text-slate-400 uppercase tracking-[0.2em] font-bold">The Reality</p>
            </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ENVELOPES - The Moon Boxes */}
      <section className="px-6 md:px-14 py-24 bg-[#1A0B2E] rounded-[4rem] mx-4 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-12 shadow-2xl relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#E2C38E_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {[
          { id: 1, title: "The Rewards", desc: "Exclusive Moon-Codes", msg: "Aapke liye 20% OFF! Code: CHAND20 ✨" },
          { id: 2, title: "Mix & Match", desc: "AI Styling Engine", msg: "MixMatch Tool par jayein aur naye combinations try karein 💥 🌙" },
          { id: 3, title: "Personal Note", desc: "Notes from the Lab", msg: "Har design ek sapna hai, jo aapke saath aur khoobsurat ho jata hai ✨" }
        ].map((box) => (
          <div 
            key={box.id} 
            onClick={() => handleEnvelopeClick(box.msg)}
            className="p-12 border border-white/5 bg-white/5 rounded-[3rem] flex flex-col items-center text-center group cursor-pointer hover:bg-[#E2C38E] transition-all duration-500 relative z-10"
          >
            <Mail className="w-10 h-10 mb-6 text-[#E2C38E] group-hover:text-[#1A0B2E] transition-colors" />
            <h3 className="text-xl font-serif mb-2 text-white group-hover:text-[#1A0B2E] uppercase tracking-widest">{box.title}</h3>
            <p className="text-slate-400 text-[10px] tracking-widest uppercase group-hover:text-[#1A0B2E]/60">{box.desc}</p>
          </div>
        ))}
      </section>

      {/* MESSAGE MODAL - The Glass Popup */}
      {activeMessage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A0B2E]/90 backdrop-blur-md p-4">
          <div className="bg-white p-12 max-w-sm w-full relative text-center rounded-[3.5rem] shadow-2xl border-t-[12px] border-[#E2C38E]">
            <button onClick={() => setActiveMessage(null)} className="absolute top-8 right-8 text-slate-300 hover:text-[#1A0B2E] transition-colors">
              <X size={24} />
            </button>
            <Sparkles className="w-12 h-12 text-[#E2C38E] mx-auto mb-8 animate-pulse" />
            <p className="text-[#1A0B2E] font-serif text-2xl italic tracking-tight leading-snug">{activeMessage}</p>
            <button onClick={() => setActiveMessage(null)} className="mt-10 px-10 py-3.5 bg-[#1A0B2E] text-white text-[10px] uppercase font-black tracking-widest rounded-full hover:bg-[#E2C38E] hover:text-[#1A0B2E] transition-all">
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;