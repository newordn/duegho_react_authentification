import React,{Component} from 'react';
import Input from '../Input';

// the password input
class Password extends Component
{
	constructor(props)
	{
		super(props);
		this.state={};
		this.onChange= this.onChange.bind(this);
		this.regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{8,})");
		
	}
	// checking if the password is well wrote
	onChange(value)
	{
		if(value!=null)
		{
			if(!this.regEx.test(value))
			{
				this.setState({errorMessage:"Doit contenir au minimum 8 caractères dont au moins une minisucle, une majuscule et un chiffre.",
					errorBorderColor:"input__border_error-color",showError:"inline"});
			}
			else
			{
				this.setState({errorMessage:"",
					errorBorderColor:"input__border_success-color",showError:"none"});
			}
		}		
	}

	 render()
	 {
		return(
			<Input id="password" name="password"
		type="text" placeholder="Mot de passe" style="form__input" 
		onChange={this.onChange} errorBorderColor={this.state.errorBorderColor}
		errorMessage={this.state.errorMessage} showError={this.state.showError}/>
	);
	 }
}

export default Password;