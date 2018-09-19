import React from "react";
import Input from "./Input/index";

let NumVerification = () => {
  return (
    <Input
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      placeholder="Numéro de téléphone"
      style="form__input"
    />
  );
};

export default NumVerification;
