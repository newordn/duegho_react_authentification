import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Input.css";

// the basic input, that will be the mother
// class of every other
class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      inputText: "",
      inputStyle: [this.props.style, this.props.errorBorderColor],
      errorMessage: [this.props.showError, this.props.errorMessage]
    };
  }

  onChange(e) {
    const val = e.target.value;
    e.preventDefault(); // prevent any type of default behavior
    this.setState({ inputText: val });
    this.props.onChange(val);
  }
  // to update the component where there is a error
  componentWillReceiveProps(nextProps) {
    this.setState({
      inputStyle: ["form__input", nextProps.errorBorderColor],
      errorMessage: [nextProps.showError, nextProps.errorMessage]
    });
  }
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          className={this.state.inputStyle.join(" ")}
          onChange={this.onChange}
          value={this.state.inputText}/>
        <label
          class="input__label"
          htmlFor={this.props.id}
          display={this.state.errorMessage[0]}>
          {this.state.errorMessage[1]}
        </label>
      </div>
    );
  }

  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
  };
  static defaultProps = {
    showError: "none"
  };
}

export default Input;