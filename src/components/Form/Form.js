import React,{Component} from 'react';
import './Form.css';
import Bottom from './Bottom';
import Email from '../inputs/Email/Email';
import Password from '../inputs/Password/Password';
import SubmitButton from '../inputs/SubmitButton/SubmitButton';

class Form extends Component
{
	render()
	{
		return(
				<div>
				<div className="login__form-container__2 login__form-container__2_background">
							<form className="form_align_right ">
								<Email/>
								<Password/>
								<span className="form_forgot-password form__input_margin">mot de passe oublié?</span>
								<SubmitButton content="SE CONNECTER"/>
							</form>
					</div>
				<Bottom/>
				</div>
			);
	}
}
export default Form;