import React, { Component } from "react";
import Link from "react-router-dom/Link";

import Header from "../components/Header/HeaderAuth";
import Footer from "../components/Footer/FooterAuth";
import FormHeading from "../components/FormHeading/FormHeading";
import Input from "../components/inputs/Input/index";
import Button from "../components/Button/Button";
import Bottom from "../components/Form/Bottom";

import "./auth.css";

class Login extends Component {
  render() {
    return (
      <div className="auth with-background">
        <main>
          <Header />
          <div className="form-container">
            <FormHeading text="Connectez-vous à" redirectionTarget="PayKap"
              redirectionURL="https://payKap.com"/>
            <section className="auth-form">
              <form>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre adresse email"
                onChange={this.onChange}
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                onChange={this.onChange}
              />
                <Link to="/forgot" className="forgot-password">
                  mot de passe oublié?
                </Link>
                <Button content="SE CONNECTER" length="full" />
              </form>
              <Bottom primaryText="Vous n'avez pas encore de compte?" url="/register" secondaryText="Inscrivez-vous"/>
            </section>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Login;
