import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import FormHeading from "../../components/FormHeading/FormHeading";
import FirstName from "../../components/inputs/FirstName";
import LastName from "../../components/inputs/LastName";
import Email from "../../components/inputs/Email";
import Password from "../../components/inputs/Password";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";
import Bottom from "../../components/Form/Bottom";

import "./register.css";

class Register extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <FormHeading text="Créer" redirectionTarget="Fricacoin" redirectionURL="https://fricacoin.com" />
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <FirstName />
              <LastName />
              <Email />
              <Password />
              <Password />
              <SubmitButton content="S'INSCRIRE" />
            </form>
            <Bottom primaryText="Vous avez déjà un compte?" url="/login" secondaryText="Connectez-vous" />
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Register;
