import React,{Component} from 'react';
import './DescriptionForm.css';

// the main spa page
class DescriptionForm extends Component
{
	 render()
	 {
	 	return(
	 		<div className="form-title ">Connectez-vous à
						<span className="account"> votre compte</span>
						<a className="header__logo_style header__logo_size-medium">Duegho
						</a><br></br>
						<span className="to-paykap_style">continuer vers</span>
						<a className="paykap_style">PayKap</a>
			 </div>
	 		);
	 }
}

export default DescriptionForm;