import React from "react";
import Link from "react-router-dom/Link";
import "./footer.css";

/* This component is for the footer of the duegho 
authentification platform*/
const Footer = () => (
  <footer className="footer footer_background">
    <Link to="/about" className="footer__item">
      À Propos
    </Link>
    <a
      href="http://developers.duegho.com"
      target="_blank"
      className="footer__item"
      rel="noopener noreferrer">
      Développeurs
    </a>
    <a href="http://blog.duegho.com" className="footer__item" rel="noopener noreferrer">
      Blog
    </a>
    <a href="http://help.duegho.com" className="footer__item" rel="noopener noreferrer">
      Aide
    </a>
    <a href="http://cgu.duegho.com/cookies" className="footer__item" rel="noopener noreferrer">
      Cookies
    </a>
    <a href="http://cgu.duegho.com/confidentiality" className="footer__item" rel="noopener noreferrer">
      Confidentialité
    </a>
    <a href="http://cgu.duegho.com/" className="footer__item" rel="noopener noreferrer">
      Conditions d'utilisations
    </a>
    <button className="footer__item footer__item_button">fr</button>
  </footer>
);

export default Footer;
