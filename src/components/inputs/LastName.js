import React from "react";
import Input from "./Input/index";

let LastName = () => {
  return (
    <Input
      type="text"
      id="lastname"
      name="lastname"
      placeholder="Nom"
      style="form__input"
    />
  );
};

export default LastName;
