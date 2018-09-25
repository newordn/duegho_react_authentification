import React from "react";
import Link from "react-router-dom/Link";
import "./header.css";

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

  render() {
    return (
      <header className="header">
          <Link to="/" className="brand .brand-header">
            Duegho
          </Link>

        <div className="right">
          <Link to="/login" className="active">
            Connexion
          </Link>
          <Link to="/register">Inscription</Link>
        </div>
      </header>
    );
  }
}
export default Header;
