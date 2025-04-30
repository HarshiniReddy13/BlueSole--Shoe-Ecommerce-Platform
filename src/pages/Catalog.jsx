// Catalog.jsx
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import './Catalog.css'; // Assuming you have CSS for Catalog

function Catalog() {
  console.log('Products data in Catalog:', products); // Confirm data here

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
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;