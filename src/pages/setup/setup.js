import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";

import "./setup.css";

class Setup extends Component {
  render() {
    return (
      <span>
        <Header />
        <section>
          <h1>Setup Page</h1>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Setup;
