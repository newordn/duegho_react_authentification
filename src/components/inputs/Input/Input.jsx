import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Input.css";

// the basic input, that will be the mother
// class of every other
class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="input-field">
        <input
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.onChange}
        />
        <span className="message" />
      </div>
    );
  }

  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
  };
}

export default Input;
