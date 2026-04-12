import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Sparkles, Scale, Layers3 } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Context import kiya

// Assets Imports
import shirt1 from '../assets/shirt1.png'; import shirt2 from '../assets/shirt2.png'; import shirt3 from '../assets/shirt3.png'; import shirt4 from '../assets/shirt4.png';
import kurt1 from '../assets/kurt1.png'; import kurt2 from '../assets/kurt2.png'; import kurt3 from '../assets/kurt3.png'; import kurt4 from '../assets/kurt4.png'; import kurt5 from '../assets/kurt5.png';
import top1 from '../assets/top1.png'; import top2 from '../assets/top2.png'; import top3 from '../assets/top3.png'; import top4 from '../assets/top4.png';
import dress1 from '../assets/dress1.png'; import dress2 from '../assets/dress2.png'; import dress3 from '../assets/dress3.png'; import dress4 from '../assets/dress4.png'; import dress5 from '../assets/dress5.png';

const Collections = () => {
  // useCart se saare functions aur data nikale
  const { wishlist, toggleWishlist, addToCart, cart } = useCart(); 
  
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [predictedSize, setPredictedSize] = useState('');

  const predictSize = () => {
    if (!height || !weight) return setPredictedSize('Please enter info');
    const index = (parseFloat(height) * 0.7) + (parseFloat(weight) * 1.5);
    let size = index < 180 ? "S" : index < 200 ? "M" : "L";
    setPredictedSize(`Your Size Buddy suggests: ${size}`);
  };

  const categories = [
    { 
      name: "Shirts", id: "cat-shirts", items: [
        { id: 's1', img: shirt1, price: "₹2,500", fabric: "Premium Crepe", color: "Olive Green", colorHex: "#556B2F", texture: "Smooth Matte", name: "Corset-Fit Shirt" },
        { id: 's2', img: shirt2, price: "₹2,800", fabric: "Linen-Cotton", color: "Mocha Brown", colorHex: "#A52A2A", texture: "Breathable Weave", name: "Lace-Up Shirt" },
        { id: 's3', img: shirt3, price: "₹2,200", fabric: "Cotton Twill", color: "Soft Taupe", colorHex: "#8B8589", texture: "Structured Fit", name: "Bow-Tie Utility" },
        { id: 's4', img: shirt4, price: "₹3,100", fabric: "Silk Blend", color: "Dusty Rose", colorHex: "#DCAE96", texture: "Satin Finish", name: "Oversized Classic" },
      ] 
    },
    { 
      name: "Kurtis", id: "cat-kurtis", items: [
        { id: 'k1', img: kurt1, price: "₹3,200", fabric: "Silk", color: "Lime Punch", colorHex: "#D7E672", texture: "Glossy Embroidery", name: "Halter-Neck Fusion" },
        { id: 'k2', img: kurt2, price: "₹3,800", fabric: "Cotton Voile", color: "Candy Pink", colorHex: "#F2C7C7", texture: "Soft Hand-feel", name: "Square-Neck Ethnic" },
        { id: 'k3', img: kurt3, price: "₹2,900", fabric: "Chikankari", color: "Sage Green", colorHex: "#9DC183", texture: "Sheer Threadwork", name: "Tassel-Hem Kurti" },
        { id: 'k4', img: kurt4, price: "₹4,100", fabric: "Banarasi Weave", color: "Forest Green", colorHex: "#228B22", texture: "Heavy Jacquard", name: "Lace-Back Premium" },
      ] 
    },
    { 
      name: "Tops", id: "cat-tops", items: [
        { id: 't1', img: top1, price: "₹1,800", fabric: "Floral Chiffon", color: "Azure Blue", colorHex: "#007FFF", texture: "Ruffled Hem", name: "Peplum Top" },
        { id: 't2', img: top2, price: "₹2,000", fabric: "Satin Silk", color: "Terracotta", colorHex: "#E2725B", texture: "Wrap-Around Corset", name: "Stellar Top" },
        { id: 't3', img: top3, price: "₹1,600", fabric: "Rayon Blend", color: "Powder Blue", colorHex: "#B0E0E6", texture: "Knotted Front", name: "Skyline Top" },
        { id: 't4', img: top4, price: "₹2,400", fabric: "Sheer Mesh", color: "Midnight", colorHex: "#191970", texture: "Off-Shoulder", name: "Moonlight Top" },
      ] 
    },
    { 
      name: "Dresses", id: "cat-dresses", items: [
        { id: 'd1', img: dress1, price: "₹5,500", fabric: "Heavy Satin", color: "Blush Pink", colorHex: "#F6C7C7", texture: "Luxurious Sheen", name: "Giant Bow Gown" },
        { id: 'd2', img: dress2, price: "₹6,200", fabric: "Lace Net", color: "Ivory Floral", colorHex: "#FAF9F6", texture: "Delicate Mesh", name: "Vintage Corset" },
        { id: 'd3', img: dress3, price: "₹4,900", fabric: "Ribbed Knit", color: "Dark Brown", colorHex: "#5C4033", texture: "Stretchy Comfort", name: "Mini Tiered Dress" },
        { id: 'd4', img: dress4, price: "₹5,100", fabric: "Sateen", color: "Deep Maroon", colorHex: "#800000", texture: "Polished Finish", name: "Pleated A-Line" },
      ] 
    }
  ];

  const scroll = (id, direction) => {
    const container = document.getElementById(id);
    if (container) container.scrollLeft += direction === 'left' ? -350 : 350;
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-14" style={{ backgroundColor: '#FAF9F6' }}>
      
      {/* 1. AI SIZE PREDICTOR */}
      <section className="mb-24 bg-[#1A0B2E] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_60px_-15px_rgba(26,11,46,0.4)] border border-white/5 relative">
        <div className="p-12 lg:w-1/2 flex flex-col justify-center relative bg-gradient-to-br from-[#1A0B2E] to-[#2D164D]">
          <div className="absolute top-0 left-0 p-8 opacity-5">
            <Layers3 size={200} className="text-[#E2C38E]" />
          </div>
          <div className="flex items-center gap-3 mb-6 text-[#E2C38E]">
            <Sparkles size={24} /> 
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Architecture of Fit</span>
          </div>
          <h2 className="text-5xl font-serif mb-6 italic text-white leading-tight">Calculated <br/> <span className="text-[#E2C38E]">Comfort.</span></h2>
          <p className="text-slate-400 text-sm italic max-w-sm leading-relaxed">
            "Har dhage ke piche ek calculation hai. Hum sirf kapde nahi silte, hum comfort ko architecture karte hain."
          </p>
        </div>
        
        <div className="p-12 lg:w-1/2 flex flex-col justify-center gap-8 bg-white/5 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-4 text-[#E2C38E]">
             <Scale size={40}/>
             <h3 className="text-2xl font-serif text-white uppercase tracking-widest">Size Buddy Lab</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] text-[#E2C38E] uppercase tracking-widest block opacity-70">Height (CM)</label>
              <input type="number" placeholder="170" onChange={(e)=>setHeight(e.target.value)} className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none focus:border-[#E2C38E] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-[#E2C38E] uppercase tracking-widest block opacity-70">Weight (KG)</label>
              <input type="number" placeholder="60" onChange={(e)=>setWeight(e.target.value)} className="w-full bg-white/10 border border-white/20 p-4 rounded-2xl text-white outline-none focus:border-[#E2C38E] transition-all" />
            </div>
          </div>
          <button onClick={predictSize} className="w-full py-4 bg-[#E2C38E] text-[#1A0B2E] font-bold rounded-2xl hover:bg-white transition-all uppercase text-xs tracking-[0.2em] shadow-lg">Architecture My Fit</button>
          {predictedSize && (
            <div className="mt-4 p-4 border-2 border-dashed border-[#E2C38E] rounded-xl text-center text-[#E2C38E] font-serif text-2xl italic animate-pulse">
              {predictedSize}
            </div>
          )}
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="space-y-32">
        {categories.map((cat) => (
          <div key={cat.id} className="relative group/row">
            <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-6">
              <div className="space-y-2">
                <h2 className="text-4xl font-serif text-[#1A0B2E] italic uppercase">{cat.name}</h2>
                <p className="text-[9px] text-[#E2C38E] uppercase tracking-[0.4em] font-bold">Phase 01: The Prototype</p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => scroll(cat.id, 'left')} className="p-3 border border-slate-200 rounded-full hover:bg-[#1A0B2E] hover:text-white transition-all"><ChevronLeft size={20}/></button>
                <button onClick={() => scroll(cat.id, 'right')} className="p-3 border border-slate-200 rounded-full hover:bg-[#1A0B2E] hover:text-white transition-all"><ChevronRight size={20}/></button>
              </div>
            </div>

            <div id={cat.id} className="flex gap-8 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
              {cat.items.map((item) => (
                <div key={item.id} className="min-w-[240px] max-w-[240px] flex-shrink-0 group/card relative">
                  <div className="relative aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-sm group-hover/card:shadow-2xl transition-all duration-700 border border-slate-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-1000" />
                    
                    {/* Glassmorphism Detail Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md h-[55%] opacity-0 group-hover/card:opacity-100 translate-y-full group-hover/card:translate-y-0 transition-all duration-500 p-6 flex flex-col justify-between z-20 border-t border-slate-100 rounded-t-[2rem]">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#E2C38E]">Specifications</p>
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full border border-slate-200 shadow-inner" style={{ backgroundColor: item.colorHex }}></div>
                           <p className="text-[10px] text-[#1A0B2E] font-bold uppercase">{item.fabric} | {item.color}</p>
                        </div>
                        <p className="text-[9px] text-slate-400 italic font-medium leading-none">Texture: {item.texture}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                        <div className="flex gap-4">
                           <Heart 
                             className={`cursor-pointer transition-all ${wishlist.find(i => i.id === item.id) ? 'fill-[#E2C38E] text-[#E2C38E] scale-125' : 'text-slate-300 hover:text-[#E2C38E]'}`} 
                             onClick={() => toggleWishlist(item)} 
                             size={20} 
                           />
                           {/* Add To Cart Logic Connect Kiya */}
                           <ShoppingBag 
                             className="text-slate-300 hover:text-[#E2C38E] cursor-pointer transition-all active:scale-90" 
                             onClick={() => addToCart(item)} 
                             size={20} 
                           />
                        </div>
                        <div className="flex gap-1">
                          {['S','M','L'].map(s => <button key={s} className="w-7 h-7 border border-slate-100 text-[#1A0B2E] text-[9px] font-bold hover:border-[#E2C38E] hover:bg-[#E2C38E]/5 transition-all rounded-md uppercase">{s}</button>)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-[#1A0B2E] px-3 py-1 rounded-full text-[10px] font-bold text-[#E2C38E] shadow-xl z-10 uppercase tracking-widest">
                      {item.price}
                    </div>
                  </div>

                  <div className="mt-5 px-2">
                    <h4 className="text-[#1A0B2E] font-serif text-lg tracking-wide leading-tight">{item.name}</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-2 italic">Moonlight Edition</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Floating Cart Indicator - Ab ye Central Cart ki length dikhayega */}
      {cart.length > 0 && (
        <div className="fixed bottom-12 right-12 bg-[#1A0B2E] text-[#E2C38E] px-8 py-4 rounded-full font-bold shadow-[0_20px_50px_rgba(26,11,46,0.3)] flex items-center gap-4 animate-bounce cursor-pointer z-50 border border-[#E2C38E]/20">
          <ShoppingBag size={20} /> View Cart ({cart.length})
        </div>
      )}
    </div>
  );
};

export default Collections;