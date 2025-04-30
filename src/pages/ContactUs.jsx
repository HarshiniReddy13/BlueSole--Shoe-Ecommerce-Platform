import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Hey Sneakerheads 👋</h1>
      <p className="brand-message">
        Hope you enjoyed exploring <strong>BlueSole</strong> — we built this platform to solve one annoying problem:
        <br /><br />
        <em>Finding the best price for the sneaker you love, in your size, across SO MANY resellers.</em>
        <br /><br />
        Annoying, isn’t it?
        <br /><br />
        Thanks to the overwhelming love from the community, we're just getting started. We'll keep building, improving, and dropping updates to serve you better.
        <br /><br />
        Got feedback or want to collaborate?
      </p>

      <div className="email-section">
        <a
          href="mailto:BlueSole@gmail.com?subject=Feedback/Collaboration Request"
          className="email-button"
        >
          📧 Send Us an Email
        </a>
      </div>

      <p className="signoff">
        Till then, <strong>keep dripping 🥶</strong><br />
        <span>— Team BlueSole</span>
      </p>
    </div>
  );
}

export default ContactUs;
