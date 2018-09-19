import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import DescriptionForm from "../../components/DescriptionForm/DescriptionForm";
import Email from "../../components/inputs/Email/Email";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";

import "./forgot.css";

class Forgot extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <DescriptionForm />
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <Email />
              <SubmitButton content="S'INSCRIRE" />
            </form>
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Forgot;
