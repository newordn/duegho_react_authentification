import React from "react";
import Input from "./Input/index";

let FirstName = () => {
  return (
    <Input
      type="text"
      id="firstname"
      name="firstname"
      placeholder="Prenom"
      style="form__input"
    />
  );
};

export default FirstName;
