import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";

import "./code.css";

class Code extends Component {
  render() {
    return (
      <span>
        <Header />
          <h1>Verification Code Page</h1>
        <Footer />
      </span>
    );
  }
}

export default Code;
