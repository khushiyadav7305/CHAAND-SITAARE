import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Product = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Authentication Guard
        if (!user) {
            alert("Pehle Login kijiye Bhopal ki shaan! ✨");
            navigate("/login"); 
        } else {
            // Aapka asli logic yahan aayega
            console.log("Success! Added to cart.");
        }
    };

    return (
        <div className="p-10">
            {/* Aapka product UI yahan rahega */}
            <button 
                onClick={handleAddToCart}
                className="bg-[#1A0B2E] text-[#E2C38E] px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Product;