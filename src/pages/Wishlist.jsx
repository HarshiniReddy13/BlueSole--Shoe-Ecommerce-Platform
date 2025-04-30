import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import './Wishlist.css';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const moveToCart = (item) => {
    addToCart(item); // item already includes size
    removeFromWishlist(item.id, item.size); // use size in removal
  };

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item, index) => (
            <li key={`${item.id}-${item.size}-${index}`}>
              <div className="item-details">
                <img src={item.image} alt={item.name} width="80" />
                <span>{item.name} (Size: {item.size}) - ${item.price}</span>
              </div>
              <div className="wishlist-buttons">
                <button className="remove-btn" onClick={() => removeFromWishlist(item.id, item.size)}>
                  Remove
                </button>
                <button className="move-btn" onClick={() => moveToCart(item)}>
                  Move to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
