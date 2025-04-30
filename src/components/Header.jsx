import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; // ✅ NEW

function Header() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext); // ✅ NEW

  return (
    <div className="header">
      <div className="head1">
        {/* Wrap the logo image with a Link to home page */}
        <Link to="/">
          <img src="https://i.postimg.cc/pX47Sjss/Blew.png" alt="Logo" />
        </Link>
      </div>
      <div className="head3">
        <input type="text" className="search-input" placeholder="Search for anything"/>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <div className="head2"><Link to="/">Home</Link></div>
      <div className="head5"><Link to="/catalog">Shop Now</Link></div>
      <div className="head4"><Link to="/plans-pricing">Plans & Pricing</Link></div>
      <div className="head6"><Link to="/contact">Contact US</Link></div>
      <Link to="/signin">
        <button className="head8"><b>Login</b></button>
      </Link>
      <Link to="/signup">
        <button className="head8"><b>Sign Up</b></button>
      </Link>

      {/* Wishlist Icon with Count */}
      <Link to="/wishlist">
        <button className="head7 wishlist-button">
          <span style={{ color: '#213555', position: 'relative' }}>
            <i className="fa-solid fa-heart"></i>
            {wishlist.length > 0 && (
              <span className="wishlist-count">{wishlist.length}</span>
            )}
          </span>
        </button>
      </Link>

      {/* Cart Icon with Count */}
      <Link to="/cart">
        <button className="head7 cart-button">
          <span style={{ color: '#213555', position: 'relative' }}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </span>
        </button>
      </Link>

      <Link to="/account">
        <button className="head7">
          <span style={{ color: '#213555' }}>
            <i className="fa-solid fa-user"></i>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Header;
