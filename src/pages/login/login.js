import React, { Component } from "react";
import Link from "react-router-dom/Link";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import FormHeading from "../../components/FormHeading/FormHeading";
import Email from "../../components/inputs/Email";
import Password from "../../components/inputs/Password";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";
import Bottom from "../../components/Form/Bottom";

import "./login.css";

class Login extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <FormHeading text="Connectez-vous à" redirectionTarget="PayKap" redirectionURL="https://payKap.com"/>
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <Email />
              <Password />
              <Link to="/forgot" className="form_forgot-password">
                mot de passe oublié?
              </Link>
              <SubmitButton content="SE CONNECTER"/>
            </form>
            <Bottom primaryText="Vous n'avez pas encore de compte?" url="/register" secondaryText="Inscrivez-vous" />
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Login;
