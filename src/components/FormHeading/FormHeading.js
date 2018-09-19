import React from "react";
import Link from "react-router-dom/Link";
import "./FormHeading.css";

const FormHeanding = (props) => (
  <div className="form-title ">
    {props.text}
		<span className="account"> votre compte </span>
    <Link to="/" className="header__logo_style header__logo_size-medium">
      Duegho
    </Link>
    <br />
    <span className="to-paykap_style">continuer vers </span>
		{props.redirectionTarget !== "" ?
    <a
      href={props.redirectionURL}
      target="_blank"
      className="paykap_style"
      rel="noopener noreferrer">
      {props.redirectionTarget}
    </a>
		:
		""
		}
  </div>
);

export default FormHeanding;
