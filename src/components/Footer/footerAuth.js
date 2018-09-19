import React from 'react';
import './footerAuth.css';

{/* This component is for the footer of the duegho 
authentification platform*/}

class Footer extends React.Component
{

	render()
	{
		return (
			<footer class="footer footer_background footer_size">
				<a class="footer__item">À Propos</a>
				<a class="footer__item">Développeurs</a>
				<a class="footer__item">Blog</a>
				<a class="footer__item">Aide</a>
				<a class="footer__item">Cookies</a>
				<a class="footer__item">Confidentialité</a>
				<a class="footer__item">Conditions d'utilisations</a>
				<button class="footer__item footer__item_button">FR</button>
			</footer>
			);
	}
}
export default Footer;




				