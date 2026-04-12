import React, { createContext, useState, useContext } from 'react';

// 1. Context banaya
const CartContext = createContext();

// 2. Provider Component (Ise export karna zaroori hai)
export function CartProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const isExist = prev.find(item => item.id === product.id);
      if (isExist) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const isExist = prev.find(item => item.id === product.id);
      if (isExist) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const updateQty = (id, type) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = type === 'inc' ? item.qty + 1 : item.qty - 1;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  return (
    <CartContext.Provider value={{ wishlist, toggleWishlist, cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom Hook (Yahi "useCart" missing bata raha tha Vite)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};