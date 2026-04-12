import React, { useContext } from 'react';
import { useCart } from '../context/CartContext'; // Sahi rasta: ../ use kiya
import { AuthContext } from '../context/AuthContext'; // Sahi rasta: ../ use kiya
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    if (!cart) return 0;
    return cart.reduce((acc, item) => {
      const priceStr = item.price ? String(item.price).replace(/[^0-9.-]+/g, "") : "0";
      const price = Number(priceStr);
      return acc + (price * (item.qty || 1));
    }, 0);
  };

  const handleCheckout = () => {
    if (!user) {
      alert("Aapko checkout karne ke liye login karna hoga! ✨");
      navigate("/login");
    } else {
      console.log("Proceeding to payment...");
      // Future payment logic yahan aayega
    }
  };

  const subtotal = calculateSubtotal();
  const shipping = (subtotal > 5000 || subtotal === 0) ? 0 : 150;
  const total = subtotal + shipping;

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen py-20 px-6 flex flex-col items-center justify-center" style={{ backgroundColor: '#FAF9F6' }}>
        <ShoppingBag className="text-slate-200 mb-6" size={100} />
        <h2 className="text-3xl font-serif text-[#1A0B2E] italic mb-4">Aapka jhola abhi khali hai, isme kuch khubsurat pal jodiye…</h2>
        <Link to="/collections" className="bg-[#1A0B2E] text-[#E2C38E] px-10 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all">
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 md:px-14" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="mb-16 border-b border-slate-200 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-serif text-[#1A0B2E] italic uppercase tracking-tighter">Shopping Bag</h1>
          <p className="text-[10px] text-[#E2C38E] font-bold uppercase tracking-[0.4em] mt-2 italic">Engineering your style</p>
        </div>
        <p className="text-slate-400 font-serif italic">{cart.length} Items</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start max-w-7xl mx-auto">
        <div className="flex-grow space-y-6 w-full lg:max-w-3xl">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 items-center">
              <img src={item.img} alt={item.name} className="w-28 h-40 object-cover rounded-2xl shadow-inner" />
              <div className="flex-grow flex flex-col justify-between h-full py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif text-[#1A0B2E] mb-1">{item.name}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {item.fabric} | {item.color}
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors p-2">
                    <Trash2 size={20}/>
                  </button>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-6 bg-[#FAF9F6] px-4 py-2 rounded-xl border border-slate-100">
                    <button onClick={() => updateQty(item.id, 'dec')} className="text-[#1A0B2E] hover:scale-125 transition-transform"><Minus size={16}/></button>
                    <span className="font-bold text-base min-w-[20px] text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 'inc')} className="text-[#1A0B2E] hover:scale-125 transition-transform"><Plus size={16}/></button>
                  </div>
                  <p className="text-xl font-bold text-[#1A0B2E]">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[400px] lg:sticky lg:top-28">
          <div className="bg-[#1A0B2E] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Sparkles size={120} />
            </div>

            <h2 className="text-3xl font-serif mb-8 border-b border-white/10 pb-4 italic text-[#E2C38E]">Summary</h2>
            <div className="space-y-5">
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-60 uppercase tracking-widest">Subtotal</span>
                <span className="font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-60 uppercase tracking-widest">Shipping</span>
                <span className="font-bold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="h-[1px] bg-white/10 my-6"></div>
              <div className="flex justify-between items-center text-[#E2C38E]">
                <span className="font-bold uppercase tracking-widest text-xs">Total</span>
                <span className="text-3xl font-serif">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <button 
                onClick={handleCheckout}
                className="w-full mt-10 py-5 bg-[#E2C38E] text-[#1A0B2E] font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all uppercase tracking-widest text-[10px] shadow-xl"
            >
              Proceed to Pay <ArrowRight size={18}/>
            </button>
            <div className="mt-8 flex items-center justify-center gap-2 text-[9px] text-slate-500 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-[#E2C38E]"/> Secured Lab Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;