// components/ProductCard.jsx
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const cartItem = cart.find(item => item.id === product.id && item.size === selectedSize);
  const inWishlist = isInWishlist(product.id, selectedSize);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div className="size-selector">
        <label htmlFor="shoe-size">Choose a size:</label>
        <select
          id="shoe-size"
          value={selectedSize}
          onChange={handleSizeChange}
          className="size-dropdown"
        >
          <option value="">Select Size (UK)</option>
          {[6, 7, 8, 9, 10, 11, 12].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className="product-buttons">
        {cartItem ? (
          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(product.id, selectedSize)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => increaseQuantity(product.id, selectedSize)}>+</button>
          </div>
        ) : (
          <button
            onClick={() => {
              if (selectedSize) {
                addToCart({ ...product, size: selectedSize });
              } else {
                alert('Please select a size!');
              }
            }}
          >
            Add to Cart
          </button>
        )}

        <button
          onClick={() => {
            if (!selectedSize) return alert('Please select a size!');
            inWishlist
              ? removeFromWishlist(product.id, selectedSize)
              : addToWishlist({ ...product, size: selectedSize });
          }}
        >
          {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
