import { useEffect, useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import './Catalog.css';

function Catalog() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Load resale products from localStorage
    const resaleItems = JSON.parse(localStorage.getItem('resaleItems')) || [];

    // Assign unique IDs to resale items if they don't have one
    const resaleFormatted = resaleItems.map((item, index) => ({
      id: `resale-${index}`,
      name: item.name,
      price: Number(item.price),
      image: item.image,
      isResale: true
    }));

    // Merge resale with original
    setAllProducts([...products, ...resaleFormatted]);
  }, []);

  return (
    <div className="catalog">
      <div className="i">
        <img src="https://i.pinimg.com/736x/b4/a3/75/b4a3754a763b11e2c89f4c4a17ed8088.jpg" alt="Trending Shoe" />
        <div className="trending-text">
          <h2>Trending Now!</h2>
          <p><b>The Air Jordan 1 Retro High OG “University Blue”</b> featuring a white leather base, blue suede overlays, and black accents.</p>
        </div>
      </div>

      <div className="catalog-grid">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
