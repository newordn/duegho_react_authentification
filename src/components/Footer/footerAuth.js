import React from "react";
import Link from "react-router-dom/Link";
import "./FooterAuth.css";

/* This component is for the footer of the duegho 
authentification platform*/

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer footer_background footer_size">
        <Link to="/about" className="footer__item">
          À Propos
        </Link>
        <a
          href="http://developers.duegho.com"
          target="_blank"
          className="footer__item">
          Développeurs
        </a>
        <a href="http://blog.duegho.com" className="footer__item">
          Blog
        </a>
        <a href="http://help.duegho.com" className="footer__item">
          Aide
        </a>
        <a href="http://cgu.duegho.com/cookies" className="footer__item">
          Cookies
        </a>
        <a
          href="http://cgu.duegho.com/confidentiality"
          className="footer__item">
          Confidentialité
        </a>
        <a href="http://cgu.duegho.com/" className="footer__item">
          Conditions d'utilisations
        </a>
        <button class="footer__item footer__item_button">fr</button>
      </footer>
    );
  }
}
export default Footer;
