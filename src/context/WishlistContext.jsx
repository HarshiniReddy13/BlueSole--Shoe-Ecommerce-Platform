// context/WishlistContext.jsx
import { createContext, useState } from 'react';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find(item => item.id === product.id && item.size === product.size)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId, size) => {
    setWishlist((prev) =>
      prev.filter(item => !(item.id === productId && item.size === size))
    );
  };

  const isInWishlist = (productId, size) => {
    return wishlist.some(item => item.id === productId && item.size === size);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
