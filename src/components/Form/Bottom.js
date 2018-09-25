import React, { Component } from "react";
import Link from "react-router-dom/Link";
import "./Bottom.css";
// Form Botton Component
class Bottom extends Component {
  render() {
    return (
      <section className="form-footer">
        <Link to={this.props.url} className="form-footer_text">
          {this.props.primaryText} 
					<span className="primary"> {this.props.secondaryText}</span>
        </Link>
      </section>
    );
  }
}

export default Bottom;
