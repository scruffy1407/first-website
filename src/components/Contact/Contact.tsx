import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-subtitle">Feel Free to <u>Contact</u> Me! 📩</h2>
      <div className="contact-info">
        <div className="contact-item">
          <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Location Icon" className="contact-icon" />
          <div className="contact-text">
            <h4 className="contact-text-title">Location</h4>
            <p className="contact-text-description">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="contact-item">
          <img src="https://cdn-icons-png.flaticon.com/512/3690/3690706.png" alt="Mail Icon" className="contact-icon" />
          <div className="contact-text">
            <h4 className="contact-text-title">Mail</h4> 
            <a href="mailto:pratama.thomas@gmail.com" target="_blank" className="contact-text-description">pratama.thomas@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/thomas-pratama/" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://github.com/scruffy1407" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="social-logo" />
        </a>
        <a href="https://instagram.com/pratamathomas" target="_blank" rel="noopener noreferrer">
          <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" className="social-logo" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
