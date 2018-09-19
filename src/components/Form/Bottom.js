import React,{Component} from 'react';
import Link from 'react-router-dom/Link';
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
						<Link to={this.props.url}>{this.props.primaryText} <span className="form-bottom__inscription-button">{this.props.secondaryText}</span></Link>
					</div>	
				</div>
			);
	 }
}

export default Bottom;