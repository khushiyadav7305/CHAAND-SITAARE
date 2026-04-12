import React, { useContext } from 'react'; // useContext add kiya
import { ShoppingCart, Heart, User, Search, Menu, Sparkles, LogOut } from 'lucide-react'; // LogOut icon add kiya
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { useCart } from '../context/CartContext'; 
import { AuthContext } from '../context/AuthContext'; // AuthContext import kiya
import logoImg from '../assets/Logo-Chaand-Sitaare.png'; 

const Navbar = () => {
  const { wishlist, cart } = useCart();
  const { user, setUser } = useContext(AuthContext); // User data aur setter nikala
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    alert("Bhopal ki shaan, phir milenge! 👋");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50 border-b border-[#2D164D] shadow-2xl" style={{ backgroundColor: '#1A0B2E' }}>
      
      {/* 1. BRAND LOGO & NAME */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer min-w-fit">
        <img 
          src={logoImg} 
          alt="Chand Sitaare Logo" 
          className="w-12 h-auto hover:scale-110 transition-transform" 
        />
        <span 
          className="text-2xl font-serif font-bold tracking-widest uppercase italic hidden lg:block"
          style={{ color: '#E2C38E' }} 
        >
          Chand Sitaare
        </span>
      </Link>

      {/* 2. NAVIGATION LINKS */}
      <div className="hidden xl:flex items-center gap-6 font-medium text-sm">
        <Link to="/" className="text-white hover:text-[#E2C38E] transition-all tracking-wide whitespace-nowrap uppercase">
          Latest Drops
        </Link>

        <Link to="/collections" className="text-white hover:text-[#E2C38E] transition-all tracking-wide whitespace-nowrap uppercase">
          Collections
        </Link>

        <Link to="/designer-lab" className="text-white hover:text-[#E2C38E] transition-all tracking-wide whitespace-nowrap underline underline-offset-4 decoration-[#E2C38E]/30 text-xs uppercase">
          Designer's Lab <br/><span className="text-[10px] opacity-60 normal-case">(My Story)</span>
        </Link>
        
        <Link to="/mix-match" id="mix-match-tool" className="flex items-center gap-2 px-4 py-2 border border-[#E2C38E]/50 rounded-full text-[#E2C38E] hover:bg-[#E2C38E] hover:text-[#1A0B2E] transition-all font-bold text-xs">
          <Sparkles className="w-3 h-3" />
          MIX & MATCH TOOL
        </Link>
      </div>

      {/* 3. SEARCH & ICONS */}
      <div className="flex items-center gap-4 ml-4">
        
        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-[#2D164D] px-3 py-1.5 rounded-md border border-[#3D2163]">
          <input 
            type="text" 
            placeholder="Search celestial styles..." 
            className="bg-transparent border-none focus:outline-none text-xs text-white w-24 lg:w-40"
          />
          <Search className="w-4 h-4 text-[#E2C38E] cursor-pointer" />
        </div>

        {/* Icons Set */}
        <div className="flex items-center gap-4 border-l border-[#2D164D] pl-4">
          
          {/* Wishlist Icon with Dynamic Count */}
          <Link to="/wishlist" className="relative group">
            <Heart className="w-5 h-5 text-white group-hover:text-[#E2C38E] cursor-pointer hover:scale-110 transition-transform" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          
          {/* Cart Icon with Dynamic Count */}
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-5 h-5 text-white group-hover:text-[#E2C38E] cursor-pointer hover:scale-110 transition-transform" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E2C38E] text-[#1A0B2E] text-[9px] font-bold px-1.5 rounded-full shadow-md">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Account / Login-Logout Logic */}
          {user ? (
            <div className="flex items-center gap-4 border-l border-white/10 pl-4">
              <Link to="/account" className="flex items-center gap-2 text-[#E2C38E] text-[10px] font-bold uppercase tracking-tighter">
                <User className="w-5 h-5" />
                <span className="hidden md:block">{user.username}</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="text-white hover:text-red-400 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <User className="w-5 h-5 text-white hover:text-[#E2C38E] cursor-pointer hover:scale-110 transition-transform" />
            </Link>
          )}
          
          <Menu className="w-6 h-6 text-white xl:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;