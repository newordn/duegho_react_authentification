import React, { Component } from "react";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import FormHeading from "../../components/FormHeading/FormHeading";
import Password from "../../components/inputs/Password";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";

import "./recover.css";

class Recover extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <FormHeading text="Reinitialiser le mot de passe de" redirectionTarget="PayKap" redirectionURL="https://payKap.com"/>
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <Password />
              <Password placeholder="Confirm the password" />
              <SubmitButton content="REINITIALISER LE MOT DE PASSE"/>
            </form>
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Recover;
