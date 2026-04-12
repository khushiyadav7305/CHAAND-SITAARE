import React from 'react';
import { Ruler, Scissors, BrainCircuit, Sparkles, Quote } from 'lucide-react';

// Assets Imports
import sketchImg2 from '../assets/sketch2.png'; 
import realImg2 from '../assets/real2.png'; 
import myPhoto from '../assets/myphoto.png';
// 1. Video import kiya
import brandVideo from '../assets/Vedio-Chaand-Sitaare.mp4'; 

const DesignerLab = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-16" style={{ backgroundColor: '#FAF9F6' }}>
      
      {/* 1. HEADER SECTION - Studio Title */}
      <header className="mb-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
          <BrainCircuit size={300} className="text-[#1A0B2E]" />
        </div>
        
        <p className="text-[#E2C38E] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">Where Logic Meets Couture</p>
        <h1 className="text-6xl md:text-7xl font-serif text-[#1A0B2E] tracking-tighter italic leading-tight relative z-10">
          Designer's Lab.
        </h1>
        <div className="w-24 h-[1px] bg-[#E2C38E] mx-auto mt-6"></div>
      </header>

      {/* 2. THE PROTOTYPE SECTION - Sketch & Real Photo */}
      <section className="mb-28 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: The Sketch (Blueprint) */}
            <div className="flex-1 space-y-4 group">
              <div className="relative aspect-[3/4] bg-white rounded-[3rem] overflow-hidden shadow-lg border border-slate-100 group-hover:shadow-2xl transition-all duration-700">
                <img src={sketchImg2} alt="Technical Sketch" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-inner border border-slate-100">
                   <Ruler size={14} className="text-[#1A0B2E]" />
                   <p className="text-[10px] font-bold text-[#1A0B2E] uppercase tracking-widest">The Blueprint (Logic)</p>
                </div>
              </div>
            </div>

            {/* Right: The Final Piece (Reality) */}
            <div className="flex-1 space-y-4 group">
              <div className="relative aspect-[3/4] bg-white rounded-[3rem] overflow-hidden shadow-lg border border-slate-100 mt-12 group-hover:shadow-2xl transition-all duration-700">
                <img src={realImg2} alt="Final Prototype" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in" />
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#FAF9F6] backdrop-blur-sm px-3 py-1.5 rounded-full shadow-inner border border-slate-100">
                   <Scissors size={14} className="text-[#1A0B2E]" />
                   <p className="text-[10px] font-bold text-[#1A0B2E] uppercase tracking-widest">The Prototype (Couture)</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 3. THE VIDEO STORY - Updated with Local Video tag */}
      <section className="mb-32 bg-[#1A0B2E] p-4 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E2C38E_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 text-center mb-10 max-w-2xl mx-auto space-y-3">
          <div className="flex items-center gap-2 justify-center text-[#E2C38E]">
              <Sparkles size={16}/> <p className="text-[9px] font-black uppercase tracking-[0.4em]">Celestial Journey</p>
          </div>
          <h2 className="text-4xl font-serif italic text-white leading-tight">Engineering the moonlight.</h2>
          <p className="text-slate-400 text-xs italic">A story of how calculations, stars, and threads met to create Prototype 01.</p>
        </div>

        {/* Local Video Player - Autoplay, Muted, Loop */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner border border-white/5 bg-black">
          <video 
            src={brandVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-[#1A0B2E]/10 pointer-events-none"></div>
        </div>
      </section>

      {/* 4. THE DESIGNER PROFILE - Photo & Bio */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Round Photo */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative p-1 border-4 border-[#E2C38E] rounded-full group cursor-pointer">
              <div className="absolute inset-0 bg-[#E2C38E] rounded-full scale-[1.03] opacity-30 blur-xl group-hover:opacity-70 transition-opacity"></div>
              <img src={myPhoto} alt="Khushi Yadav" className="w-64 h-64 object-cover rounded-full shadow-xl relative z-10 border-4 border-white" />
            </div>
            <p className="mt-5 text-[#E2C38E] text-[10px] font-bold uppercase tracking-[0.4em]">Khushi Yadav</p>
          </div>

          {/* Right: Bio & Quote */}
          <div className="w-full md:w-2/3 space-y-8 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <BrainCircuit size={20} className="text-[#E2C38E]" />
              <h2 className="text-4xl font-serif text-[#1A0B2E] italic">The Engineer's Code.</h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Me <span className="text-[#1A0B2E] font-bold">Khushi Yadav</span>, Bridging the gap between Logic and Luxury. As an engineer, I decode complexities; as a designer, I manifest dreams. 'Chand-Sitaare' is my lab where fabrics are engineered for comfort and patterns are architected for the celestial spirit. For me, couture is never a trial-and-error—it is a Calculated Masterpiece.
            </p>

            <div className="bg-[#FAF9F6] p-8 rounded-2xl border-l-4 border-[#E2C38E] space-y-4 shadow-inner">
               <Quote size={24} className="text-[#E2C38E] fill-[#E2C38E]/10" />
               <p className="text-xl font-serif text-[#1A0B2E] italic tracking-tight leading-snug">
                 "Engineering isn't just about building bridges; it's about structuring dreams, decoding aesthetics, and calculating the exact grace required for every thread to touch the stars."
               </p>
               <p className="text-[10px] text-right text-slate-400 uppercase font-bold tracking-widest">— The Designer's Algorithm</p>
            </div>
          </div>
      </section>

    </div>
  );
};

export default DesignerLab;