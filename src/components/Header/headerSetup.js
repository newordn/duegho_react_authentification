import React from "react";
import "./header.css";

/* This component is for the header authentification*/

class HeaderSetup extends React.Component {
  render() {
    return (
      <header className="header bordered">
        <div className="container setup">
          <a>Validation de compte</a>
          <a>Informations supplémentaires</a>
          <a>Import de contacts</a>
          <a>Terminé</a>
        </div>
      </header>
    );
  }
}
export default HeaderSetup;
