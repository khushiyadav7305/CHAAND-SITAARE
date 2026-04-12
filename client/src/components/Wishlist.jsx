import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, Heart } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useCart();

  return (
    <div className="min-h-screen py-20 px-6 md:px-14" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="mb-16 border-b border-slate-200 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-serif text-[#1A0B2E] italic">Your Wishlist</h1>
          <p className="text-[10px] text-[#E2C38E] font-bold uppercase tracking-[0.4em] mt-2">Saved Celestial Pieces</p>
        </div>
        <p className="text-slate-400 font-serif italic">{wishlist.length} Items found</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="mx-auto text-slate-200 mb-4" size={60} />
          <p className="text-slate-500 font-serif text-xl italic">Aapki wishlist abhi khali hai, sitaare dhundiye!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-3">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-red-500 shadow-md hover:scale-110 transition-transform"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className="mt-4 p-2">
                <h4 className="text-[#1A0B2E] font-serif text-lg">{item.name}</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#E2C38E] font-bold">{item.price}</p>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1A0B2E] hover:text-[#E2C38E] transition-colors">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;