import React,{Component} from 'react';
import Email from '../inputs/Email/Email';
import Password from '../inputs/Password/Password';
import DescriptionForm from '../DescriptionForm/DescriptionForm';
import './Login.css';
import Form from '../Form/Form';
// Login Component
class Login extends Component
{
	 render()
	 {
		return(
			<section className="login__form-container">
					<DescriptionForm />
					<Form/>
			</section>
			);
	 }
}

export default Login;