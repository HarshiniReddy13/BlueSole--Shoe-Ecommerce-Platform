import { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'card',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <div className="form-section">
          <h2>Shipping Address</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />

          <h2>Payment Method</h2>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={handleChange}
              />
              UPI
            </label>
          </div>
        </div>

        <div className="summary-section">
          <h2>Order Summary</h2>
          <p><strong>Item:</strong> LV Trainer Sneaker (Size: 7)</p>
          <p><strong>Subtotal:</strong> $84.00</p>
          <p><strong>Tax (8%):</strong> $6.72</p>
          <p><strong>Total:</strong> <span className="total-amount">$90.72</span></p>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
