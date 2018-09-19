import React,{Component} from 'react';
import './Bottom.css';
// Form Botton Component
class Bottom extends Component
{
	 render()
	 {
		return(
				<div>
					<div className="form-bottom_phone">
						Vous n'avez pas encore de compte? Inscrivez-vous
					</div>
					<div className="form-bottom form-bottom_size">
						Vous n'avez pas encore de compte?<a  className="form-bottom__inscription-button">Inscrivez-vous</a>
					</div>	
				</div>
			);
	 }
}

export default Bottom;