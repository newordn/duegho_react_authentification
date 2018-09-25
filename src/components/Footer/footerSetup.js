import React, { Component } from "react";
import Button from "../../components/Button/Button";
import "./footer.css";

// setup's footer
class FooterSetup extends Component {
  render() {
    return (
    <footer className="footer footer_background">
        <Button content="Ignore" />
        <Button content="Suivant" />
    </footer>
    )
  }
}

export default FooterSetup;
