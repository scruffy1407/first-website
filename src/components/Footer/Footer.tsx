import "./footer.css"
function Footer() {
    return (
        <footer className="footer-container">
          <div className="copyright"> Thomas Pratama &copy; 2024. All rights reserved.</div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/thomas-pratama/" target="_blank" className="social-icon">
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
            </a>
            <a href="https://github.com/scruffy1407" target="_blank" className="social-icon">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
            </a>
          </div>
        </footer>
      );
    }
export default Footer