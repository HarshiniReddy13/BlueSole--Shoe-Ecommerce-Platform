import './Footer.css';

function Footer() {
  return (
    <div className="footer2">
      <div className="w w1">
        <ul>
          <li>BlueSole Business</li>
          <li>Partner with BlueSole</li>
          <li>Explore our Collection</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="w w2">
        <ul>
          <li>Shipment</li>
          <li>Returns and Cancellations</li>
          <li>Help and Support</li>
          <li>Retailers & Partners</li>
        </ul>  
      </div>
      <div className="w w3">
        <ul> 
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie settings</li>
        </ul>  
      </div>
      <button className="language-button">
        <i className="fa-solid fa-globe" style={{ marginRight: '8px', color: 'white' }}></i> 
        English
      </button>
      <p>@2025 BlueSole, Inc.</p>
    </div>
  );
}

export default Footer;
