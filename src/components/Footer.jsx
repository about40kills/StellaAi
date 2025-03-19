import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <img src="/logo.svg" alt="Insilico Medicine" />
            <p>
              Generative AI Software for Drug Discovery, Scientific Research &
              Sustainability
            </p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Products</h4>
              <ul>
                <li>
                  <a href="/pharma-ai">Pharma.ai</a>
                </li>
                <li>
                  <a href="/chemistry42">Chemistry42</a>
                </li>
                <li>
                  <a href="/biology42">Biology42</a>
                </li>
                <li>
                  <a href="/pipeline">Pipeline</a>
                </li>
                <li>
                  <a href="/preciousGPT">PreciousGPT</a>
                </li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/news">News & Media</a>
                </li>
                <li>
                  <a href="/sustainability">Sustainability</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="/publications">Publications</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/documentation">Documentation</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Connect</h4>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="contact-info">
                <p>Email: contact@insilico.com</p>
                <p>Tel: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} Insilico Medicine. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
