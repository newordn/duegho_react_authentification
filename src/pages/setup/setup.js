import React, { Component } from "react";

import { Stepper, Step } from "../../templates/Stepper";
import Input from "../../components/inputs/Input/index";

import "./setup.css";

const MoreInformations = () => (
  <div className="form-container">
    <div>
      <form>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Entrez votre seconde adresse email"
          onChange={this.onChange}
        />
        <Input
          id="second_phone"
          name="second_phone"
          type="tel"
          placeholder="2ème numéro de téléphone"
          onChange={this.onChange}
        />
        <Input
          id="third_phone"
          name="third_phone"
          type="tel"
          placeholder="3ème numéro de téléphone"
          onChange={this.onChange}
        />
      </form>
    </div>
  </div>
);

const ContactsImport = () => <h1 className="setup_heading">Import de contacts</h1>;

const Finish = () => <h1 className="setup_heading">Votre compte a bien été configuré</h1>;

class Setup extends Component {
  render() {
    return (
      <Stepper>
        <Step>
          <h1  className="setup_heading">Votre compte a bien été validé</h1>
        </Step>
        <Step component={MoreInformations} />
        <Step component={ContactsImport} />
        <Step component={Finish} />
      </Stepper>
    );
  }
}

export default Setup;
