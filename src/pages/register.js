import React, { Component } from "react";
import Redirect from "react-router-dom/Redirect";

import Header from "../components/Header/HeaderAuth";
import Footer from "../components/Footer/FooterAuth";
import FormHeading from "../components/FormHeading/FormHeading";
import Input from "../components/inputs/Input/index";
import Country from "../components/inputs/Country";
import Button from "../components/Button/Button";
import Bottom from "../components/Form/Bottom";

import "./auth.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.onRedirect = this.onRedirect.bind(this);
  }

  onRedirect(e) {
    e.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/setup"} />;
    } else {
      return (
        <div className="auth with-background">
          <main>
            <Header />
            <div className="form-container">
              <FormHeading
                text="Créer"
                redirectionTarget="Fricacoin"
                redirectionURL="https://fricacoin.com"
              />

              <section className="auth-form">
                <form>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Entrez votre prénom"
                    onChange={this.onChange}
                  />
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Entrez votre nom"
                    onChange={this.onChange}
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Entrez votre adresse email"
                    onChange={this.onChange}
                  />
                  <Country />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Entrez votre numéro de téléphone"
                    onChange={this.onChange}
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    onChange={this.onChange}
                  />
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    onChange={this.onChange}
                  />
                  <Button content="S'INSCRIRE"  length="full" onClick={this.onRedirect} />
                </form>
                <Bottom
                  primaryText="Vous avez déjà un compte?"
                  url="/login"
                  secondaryText="Connectez-vous"
                />
              </section>
            </div>
            <Footer />
          </main>
        </div>
      );
    }
  }
}

export default Register;
