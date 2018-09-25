import React from "react";
import Link from "react-router-dom/Link";
import "./FormHeading.css";

const FormHeanding = (props) => (
  <section className="form-heading">
    <h1>
      {props.text} 
      <span> votre compte </span>
      <Link to="/" className="brand">
        Duegho
      </Link>
    </h1>

    <span className="incoming_platform">
      continuer vers {props.redirectionTarget !== "" ?
      <a
        href={props.redirectionURL}
        target="_blank"
        className="platform_name"
        rel="noopener noreferrer">
        {props.redirectionTarget}
      </a> : "" }
    </span>

    <h1> Un seul compte, tout l'univers à vous. </h1>
  </section>
)

export default FormHeanding;
