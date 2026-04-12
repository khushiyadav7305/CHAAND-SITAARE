import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'
import Collections from './components/Collections'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import DesignerLab from './components/DesignerLab'
import Account from './components/Account'
import MixMatch from './components/MisMatch'
// Naye pages import karein
import Login from './pages/Login' 
import Register from './pages/Register' 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAF9F6' }}>
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/designer-lab" element={<DesignerLab />} />
            <Route path="/account" element={<Account />} />
            <Route path="/mix-match" element={<MixMatch />} />
            
            {/* Login aur Register ke Routes yahan add ho gaye */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App;