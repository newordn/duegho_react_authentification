import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import DescriptionForm from "../../components/DescriptionForm/DescriptionForm";
import FirstName from "../../components/inputs/FirstName/FirstName";
import LastName from "../../components/inputs/LastName/LastName";
import Email from "../../components/inputs/Email/Email";
import Password from "../../components/inputs/Password/Password";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";

import "./register.css";

class Register extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <DescriptionForm />
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <FirstName />
              <LastName />
              <Email />
              <Password />
              <Password />
              <SubmitButton content="S'INSCRIRE" />
            </form>
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Register;
