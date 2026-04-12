import React, { useState } from 'react';
import { Sparkles, RotateCcw, Scissors, Plus, Star, Box, Ruler, PencilRuler } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Assets Mapping - Standard PNGs (Transparent Background Preferred)
import shirt1 from '../assets/shirt1.png';
import shirt2 from '../assets/shirt2.png';
import kurt1 from '../assets/kurt1.png';
import kurt2 from '../assets/kurt2.png';
import dress1 from '../assets/dress1.png';
import dress3 from '../assets/dress3.png';
import bot1 from '../assets/bot1.png'; 
import bot2 from '../assets/bot2.png'; 
import bot3 from '../assets/bot3.png'; 

const wardrobe = {
  tops: [
    { id: 't1', name: 'Luna Cami', img: shirt1, price: "₹1,800", type: 'top' },
    { id: 't2', name: 'Corset Shirt', img: shirt2, price: "₹2,500", type: 'top' },
  ],
  kurtis: [
    { id: 'k1', name: 'Halter Kurti', img: kurt1, price: "₹3,200", type: 'kurti' },
    { id: 'k2', name: 'Silk Fusion', img: kurt2, price: "₹3,800", type: 'kurti' },
  ],
  bottoms: [
    { id: 'b1', name: 'Classic Jeans', img: bot1, price: "₹2,400", type: 'bottom' },
    { id: 'b2', name: 'Satin Skirt', img: bot2, price: "₹2,100", type: 'bottom' },
    { id: 'b3', name: 'Cargo Pants', img: bot3, price: "₹2,600", type: 'bottom' },
  ],
  dresses: [
    { id: 'd1', name: 'Gown Prototype', img: dress1, price: "₹5,500", type: 'dress' },
    { id: 'd3', name: 'Mini Tiered', img: dress3, price: "₹4,900", type: 'dress' },
  ]
};

const MixMatch = () => {
  const { addToCart } = useCart();
  const [selectedTop, setSelectedTop] = useState(wardrobe.tops[0]); // Default Top
  const [selectedBottom, setSelectedBottom] = useState(wardrobe.bottoms[0]); // Default Jeans
  const [activeTab, setActiveTab] = useState('tops');

  const selectItem = (item) => {
    if (item.type === 'dress') {
      setSelectedTop(item);
      setSelectedBottom(null); 
    } else if (item.type === 'top' || item.type === 'kurti') {
      setSelectedTop(item);
      if (!selectedBottom) setSelectedBottom(wardrobe.bottoms[0]);
    } else if (item.type === 'bottom') {
      if(selectedTop?.type === 'dress') setSelectedTop(null);
      setSelectedBottom(item);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-16" style={{ backgroundColor: '#FAF9F6' }}>
      
      {/* 1. Header (Updated with Compact Vibe) */}
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end border-b border-slate-200 pb-10">
        <div className="space-y-2">
          <p className="text-[#E2C38E] text-[10px] font-bold tracking-[0.5em] uppercase">Style Lab v5.0</p>
          <h1 className="text-6xl font-serif text-[#1A0B2E] italic tracking-tighter uppercase leading-tight">Virtual Fitting Room.</h1>
        </div>
        <button onClick={() => {setSelectedTop(wardrobe.tops[0]); setSelectedBottom(wardrobe.bottoms[0]);}} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-all">
          <RotateCcw size={16}/> Default Outfit
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* 2. THE CENTRAL FITTING CANVAS (Strict Grid Fix) */}
        <div className="lg:col-span-5 relative flex justify-center items-start">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 h-[750px] w-[400px] relative overflow-hidden flex flex-col items-center justify-center p-12 overflow-hidden">
            
            {/* Visual Grid Aesthetic */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1A0B2E_1px,transparent_1px)] [background-size:25px_25px]"></div>
            <div className="absolute w-80 h-[500px] bg-[#F3EEF9] rounded-full blur-[100px] opacity-40"></div>

            {/* THE FIX: Parent Container with Fixed Stacking Area */}
            <div className="relative w-full h-full flex flex-col items-center pt-10">
              
              {/* Silhouette Base (Central Axis) */}
              <div className="absolute w-52 h-[600px] bg-slate-50 border border-slate-100 rounded-full -z-10 opacity-60 flex flex-col items-center pt-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-full mb-3"></div>
                  <div className="w-32 h-40 bg-slate-100 rounded-t-3xl"></div>
              </div>

              {/* CLOTHING LAYERS (Absolute Stacking with h-limit) */}

              {/* Top / Dress Layer (z-30) */}
              <div className="absolute inset-x-0 flex justify-center z-30 pointer-events-none transition-all duration-700">
                {selectedTop && (
                  <img 
                    src={selectedTop.img} 
                    className={`object-contain mix-blend-multiply drop-shadow-lg animate-in fade-in zoom-in duration-700 ${selectedTop.type === 'dress' ? 'h-[630px] mt-[10px]' : 'h-[280px] mt-[100px]'}`} 
                    alt="topwear" 
                  />
                )}
              </div>

              {/* Bottom Layer (z-20) */}
              {selectedBottom && selectedTop?.type !== 'dress' && (
                <div className="absolute inset-x-0 flex justify-center z-20 mt-[340px] pointer-events-none transition-all duration-700 animate-in fade-in slide-in-from-bottom-10">
                  <img 
                    src={selectedBottom.img} 
                    className="h-[380px] object-contain mix-blend-multiply drop-shadow-xl" 
                    alt="bottomwear" 
                  />
                </div>
              )}
            </div>

            {/* Active Look Label (Gold Card) */}
            {selectedTop && (
              <div className="absolute bottom-10 inset-x-10 bg-[#E2C38E] p-6 rounded-[2.5rem] shadow-2xl flex justify-between items-center z-40 border-4 border-white/50">
                <div className="flex items-center gap-4">
                  <Star size={18} fill="#1A0B2E" className="text-[#1A0B2E] animate-pulse" />
                  <div>
                    <p className="text-[9px] text-[#1A0B2E] font-bold uppercase tracking-widest">Calculated Look</p>
                    <h4 className="text-[#1A0B2E] font-serif italic text-sm">{selectedTop.name} {selectedBottom ? `& ${selectedBottom.name}` : ''}</h4>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(selectedTop)}
                  className="p-3 bg-white text-[#1A0B2E] rounded-full hover:bg-[#1A0B2E] hover:text-[#E2C38E] transition-all"
                >
                  <Plus size={20}/>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3. WARDROBE SECTION (Right Part) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Category Tabs */}
          <div className="flex gap-6 border-b border-slate-100 pb-2 overflow-x-auto no-scrollbar">
            {['tops', 'kurtis', 'bottoms', 'dresses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all pb-2 border-b-2 ${activeTab === tab ? 'text-[#1A0B2E] border-[#E2C38E]' : 'text-slate-300 border-transparent hover:text-slate-400'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Catalog Grid (Strict Sizing) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 overflow-y-auto pr-4 h-[480px] no-scrollbar">
            {wardrobe[activeTab].map((item) => (
              <div 
                key={item.id}
                onClick={() => selectItem(item)}
                className="group cursor-pointer"
              >
                <div className={`relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 ${ (selectedTop?.id === item.id || selectedBottom?.id === item.id) ? 'border-[#E2C38E] bg-[#F3EEF9] shadow-2xl scale-[1.02]' : 'border-white bg-white shadow-sm hover:shadow-xl'}`}>
                  <img src={item.img} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-[#1A0B2E] shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="text-center mt-4 px-2">
                  <p className="text-[10px] font-bold text-[#1A0B2E] uppercase tracking-widest">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI CONTROL PANEL */}
          <div className="mt-12 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="absolute -left-10 -top-10 opacity-[0.03] pointer-events-none">
                <PencilRuler size={200} />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#E2C38E] mb-2">
                   <Scissors size={18}/> <h3 className="text-xl font-serif italic uppercase tracking-widest">Calculated Harmony</h3>
                </div>
                <p className="text-slate-400 text-xs italic">"Let the lab engineer your perfect combination."</p>
             </div>
             <button 
               onClick={() => {
                 const all = [...wardrobe.tops, ...wardrobe.dresses];
                 const rand = all[Math.floor(Math.random() * all.length)];
                 selectItem(rand);
               }}
               className="relative z-10 px-10 py-4 bg-[#1A0B2E] text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#E2C38E] hover:text-[#1A0B2E] transition-all shadow-xl shadow-[#1A0B2E]/20"
             >
               Auto-Match
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MixMatch;