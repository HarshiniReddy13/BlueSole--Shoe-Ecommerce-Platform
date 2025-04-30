import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleRemove = (productId, size) => {
    removeFromCart(productId, size); // Call the remove function from the context
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p class="centered-message"><span>Your cart is empty.</span></p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={`${item.id}-${item.size}-${index}`} className="cart-item">
                <img src={item.image} alt={item.name} width="80" />
                <span className="cart-details">
                  {item.name} (Size: {item.size}) - ${item.price} x {item.quantity}
                </span>
                {/* Add remove button */}
                <button className="remove-button" onClick={() => handleRemove(item.id, item.size)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="billing">
            <h2>Billing Details</h2>
            <div className="billing-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="billing-item">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="billing-item total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div>
              <button className="checkout-button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
