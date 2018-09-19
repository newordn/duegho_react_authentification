import React,{Component} from 'react';
import './SubmitButton.css';
// Submit button Component
class SubmitButton extends Component
{
	 render()
	 {
		return(
		<button className="form__connect-button" id="submitButton">
		{this.props.content}</button>
			);
	 }
}

export default SubmitButton;