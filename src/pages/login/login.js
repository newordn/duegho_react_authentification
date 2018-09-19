import React, { Component } from "react";
import Link from "react-router-dom/Link";

import Header from "../../components/Header/HeaderAuth";
import Footer from "../../components/Footer/FooterAuth";
import DescriptionForm from "../../components/DescriptionForm/DescriptionForm";
import Email from "../../components/inputs/Email/Email";
import Password from "../../components/inputs/Password/Password";
import SubmitButton from "../../components/inputs/SubmitButton/SubmitButton";

import "./login.css";

class Login extends Component {
  render() {
    return (
      <span>
        <Header />
        <section className="login__form-container">
          <DescriptionForm />
          <div className="login__form-container__2 login__form-container__2_background">
            <form>
              <Email />
              <Password />
              <Link to="/forgot" className="form_forgot-password"
              >
                mot de passe oublié?
              </Link>
              <SubmitButton content="SE CONNECTER" />
            </form>
          </div>
        </section>
        <Footer />
      </span>
    );
  }
}

export default Login;
