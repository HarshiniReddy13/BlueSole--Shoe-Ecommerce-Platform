import React, { useState, useEffect } from 'react';
import './Community.css';

function Community() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    size: '',
    price: '',
    image: '',
  });

  const [listings, setListings] = useState([]);

  // Load from localStorage on component mount
  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('resaleItems')) || [];
    setListings(storedListings);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = { ...formData };
    const updatedListings = [newListing, ...listings];

    setListings(updatedListings);
    localStorage.setItem('resaleItems', JSON.stringify(updatedListings));

    setFormData({
      name: '',
      brand: '',
      size: '',
      price: '',
      image: '',
    });
  };

  return (
    <div className="community-container">
      <h2>Community Shoe Resale</h2>

      <form className="resell-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Shoe Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">List for Resale</button>
      </form>

      <div className="listings">
        {listings.length === 0 ? (
          <p>No shoes listed yet. Be the first!</p>
        ) : (
          listings.map((shoe, index) => (
            <div className="listing-card" key={index}>
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p><strong>Brand:</strong> {shoe.brand}</p>
              <p><strong>Size:</strong> {shoe.size}</p>
              <p><strong>Price:</strong> ${shoe.price}</p>
              <button className="contact-btn">Contact Seller</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Community;
