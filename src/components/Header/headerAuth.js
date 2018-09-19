import React from 'react';
import './HeaderAuth.css';

{/* This component is for the header of the duegho 
authentification platform*/}

class Header extends React.Component
{

	render()
	{
		return (
			<header className="header">
				<div className="header_col_1">
					<a className="header__logo_style header__logo_size-small">Duegho</a>
				</div>

				<div className="header_col_2">
					<a>Connexion</a>
					<a className="header__inscription_color-w">Inscription</a>
				</div>
			</header>
			);
	}
}
export default Header;