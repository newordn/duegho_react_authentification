import React, { Component } from "react";

import Header from "../components/Header/HeaderAuth";
import Footer from "../components/Footer/FooterAuth";
import FormHeading from "../components/FormHeading/FormHeading";
import Input from "../components/inputs/Input/index";
import Button from "../components/Button/Button";

import "./auth.css";

class Code extends Component {
  render() {
    return (
      <div className="auth with-background">
        <main>
          <Header />
          <section className="form-container">
            <FormHeading
              text="Changer le mot de passe de"
              redirectionTarget="PayKap"
              redirectionURL="https://payKap.com"
            />
            <section className="auth-form">
              <form>
              <Input
                id="code"
                name="code"
                type="tel"
                placeholder="Entrez le code que vous avez reçu"
                onChange={this.onChange}
              />
                <Button content="ENVOYER" length="full" />
              </form>
            </section>
          </section>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Code;
