import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { 
        username, 
        email, 
        password 
      });
      alert("Registration Successful! Ab login kijiye. ✨");
      navigate("/login");
    } catch (err) {
      alert("Registration failed! Email ya Username shayad pehle se use mein hai.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-6">
      <div className="bg-[#1A0B2E] p-10 rounded-[2.5rem] text-white shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <Sparkles size={80} />
        </div>
        
        <h2 className="text-4xl font-serif mb-2 italic text-[#E2C38E]">Join Us!</h2>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8">Create your Designer Account</p>

        <form onSubmit={handleRegister} className="space-y-6">
          <input 
            type="text" 
            placeholder="USERNAME" 
            className="w-full bg-white/5 border-b border-white/20 py-3 px-2 outline-none focus:border-[#E2C38E] transition-all uppercase text-[10px] tracking-widest"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="w-full bg-white/5 border-b border-white/20 py-3 px-2 outline-none focus:border-[#E2C38E] transition-all uppercase text-[10px] tracking-widest"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="w-full bg-white/5 border-b border-white/20 py-3 px-2 outline-none focus:border-[#E2C38E] transition-all uppercase text-[10px] tracking-widest"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit" className="w-full mt-6 py-4 bg-[#E2C38E] text-[#1A0B2E] font-black rounded-xl flex items-center justify-center gap-3 hover:bg-white transition-all uppercase tracking-widest text-[10px]">
            Create Account <ArrowRight size={16}/>
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] tracking-widest text-slate-400 uppercase">
          Already a member? <Link to="/login" className="text-[#E2C38E] font-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;