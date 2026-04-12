import React, { useState, useContext } from 'react'; // useContext add kiya
import { User, Package, Settings, MapPin, LogOut, ChevronRight, Star, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext'; // AuthContext import kiya
import { useNavigate } from 'react-router-dom'; // useNavigate add kiya
import myPhoto from '../assets/myphoto.png';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { cart } = useCart();
  const { user, setUser } = useContext(AuthContext); // User data nikala
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    alert("Bhopal ki shaan, phir milenge! 👋");
    navigate("/login");
  };

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'orders', label: 'Celestial Orders', icon: <Package size={18} /> },
    { id: 'address', label: 'Shipping Address', icon: <MapPin size={18} /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard size={18} /> },
    { id: 'settings', label: 'Lab Settings', icon: <Settings size={18} /> },
  ];

  // Agar user login nahi hai, toh use access mat do
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6]">
        <h2 className="text-2xl font-serif italic text-[#1A0B2E] mb-4">Kripya pehle login karein.</h2>
        <button 
          onClick={() => navigate("/login")}
          className="bg-[#1A0B2E] text-[#E2C38E] px-8 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 md:px-16" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SIDE: Side Navigation Menu */}
        <aside className="w-full lg:w-1/3 space-y-8">
          <div className="bg-[#1A0B2E] p-8 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Star size={80} className="text-[#E2C38E]" />
             </div>
             <img src={myPhoto} className="w-24 h-24 rounded-full border-4 border-[#E2C38E] mx-auto mb-4 object-cover relative z-10" alt="User" />
             <h2 className="text-white font-serif text-2xl italic uppercase tracking-tighter">{user.username}</h2>
             <p className="text-[#E2C38E] text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Engineer & Designer</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-100">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-4 mb-2 rounded-2xl transition-all ${
                  activeTab === item.id 
                  ? 'bg-[#FAF9F6] text-[#1A0B2E] border-l-4 border-[#E2C38E] font-bold shadow-inner' 
                  : 'text-slate-400 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={activeTab === item.id ? 'text-[#E2C38E]' : ''}>{item.icon}</span>
                  <span className="text-xs uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={14} />
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-4 mt-4 text-red-400 hover:text-red-600 transition-all border-t border-slate-50"
            >
               <LogOut size={18} />
               <span className="text-xs uppercase tracking-widest font-bold">Sign Out</span>
            </button>
          </div>
        </aside>

        {/* RIGHT SIDE: Dynamic Content Area */}
        <main className="flex-grow bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-slate-100 min-h-[600px]">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-4xl font-serif text-[#1A0B2E] italic">Profile Details</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">Manage your celestial identity</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#E2C38E] uppercase tracking-widest">Full Name</label>
                  <p className="p-4 bg-[#FAF9F6] rounded-xl text-[#1A0B2E] font-medium border border-slate-100 font-serif text-lg uppercase tracking-tight">{user.username}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#E2C38E] uppercase tracking-widest">Email Address</label>
                  <p className="p-4 bg-[#FAF9F6] rounded-xl text-[#1A0B2E] font-medium border border-slate-100">{user.email}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#E2C38E] uppercase tracking-widest">Profession</label>
                  <p className="p-4 bg-[#FAF9F6] rounded-xl text-[#1A0B2E] font-medium border border-slate-100">Systems Engineering / Fashion Design</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#E2C38E] uppercase tracking-widest">Location</label>
                  <p className="p-4 bg-[#FAF9F6] rounded-xl text-[#1A0B2E] font-medium border border-slate-100 font-serif">Bhopal, India</p>
                </div>
              </div>
              <button className="mt-6 px-8 py-3 bg-[#1A0B2E] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#E2C38E] hover:text-[#1A0B2E] transition-all">
                Edit Profile
              </button>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-4xl font-serif text-[#1A0B2E] italic">Orders Archive</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">History of your calculated style</p>
              </div>
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                <Package size={60} className="text-slate-300 mb-4" />
                <p className="font-serif italic text-xl">No active orders found.</p>
                <p className="text-[10px] uppercase mt-2 tracking-widest">Your style journey starts here.</p>
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {activeTab !== 'profile' && activeTab !== 'orders' && (
            <div className="flex items-center justify-center h-full">
               <p className="text-slate-300 font-serif italic text-2xl uppercase tracking-[0.2em]">{activeTab} coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Account;