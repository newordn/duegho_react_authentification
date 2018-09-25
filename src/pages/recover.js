import React, { Component } from "react";

import Header from "../components/Header/HeaderAuth";
import Footer from "../components/Footer/FooterAuth";
import FormHeading from "../components/FormHeading/FormHeading";
import Input from "../components/inputs/Input/index";
import Button from "../components/Button/Button";

import "./auth.css";

class Recover extends Component {
  render() {
    return (
      <div className="auth with-background">
      <main>
        <Header />
        <section className="form-container">
          <FormHeading text="Reinitialiser le mot de passe de" redirectionTarget="PayKap" redirectionURL="https://payKap.com"/>
          <section className="auth-form">
            <form>
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="Entrez le nouveau mot de passe"
                onChange={this.onChange}/>
            <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirmez le nouveau mot de passe"
                onChange={this.onChange}/>
              <Button content="REINITIALISER LE MOT DE PASSE"  length="full"/>
            </form>
          </section>
        </section>
        <Footer />
      </main>
      </div>
    );
  }
}

export default Recover;
