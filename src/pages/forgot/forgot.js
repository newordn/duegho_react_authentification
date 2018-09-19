import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import FormHeading from "../../components/FormHeading/FormHeading";
import Email from "../../components/inputs/Email";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";

import "./forgot.css";

class Forgot extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <FormHeading text="Changer le mot de passe de" redirectionTarget="PayKap" redirectionURL="https://payKap.com" />
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <Email />
              <SubmitButton content="ENVOYER" />
            </form>
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Forgot;
