import React,{Component} from 'react';
import Link from 'react-router-dom/Link';
import './DescriptionForm.css';

// the main spa page
class DescriptionForm extends Component
{
	 render()
	 {
	 	return(
	 		<div className="form-title ">Connectez-vous à
						<span className="account"> votre compte</span>
						<Link to="/" className="header__logo_style header__logo_size-medium"> Duegho</Link>
						<br></br>
						<span className="to-paykap_style">continuer vers</span>
						<a href="https://paykap.com" target="_blank" className="paykap_style" rel="noopener noreferrer"> PayKap</a>
			 </div>
	 		);
	 }
}

export default DescriptionForm;