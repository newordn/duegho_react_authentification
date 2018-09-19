import React from 'react';
import Link from 'react-router-dom/Link';
import './HeaderAuth.css';

/* 
* This component is for the header of 
* the duegho authentification platform
*/

class Header extends React.Component {
	// activer le lien cliquer
	/*
	* Lorsque tu cliques sur un lien,
	* Remove "header-active" sur le précedent
	* insere le sur le lien cliqué 
	 */

	render()	{
		return (
			<header className="header">
				<div className="header_col_1">
					<Link to="/" className="header__logo_style header__logo_size-small">Duegho</Link>
				</div>

				<div className="header_col_2">
					<Link to="/login" className="header-active">Connexion</Link>
					<Link to="/register">Inscription</Link>
				</div>
			</header>
			)
	}
}
export default Header;