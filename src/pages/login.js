import React, { Component } from 'react'
import Header from '../components/Header/HeaderAuth';
import Footer from '../components/Footer/FooterAuth';
import DescriptionForm from '../components/DescriptionForm/DescriptionForm';
import Form from '../components/Form/Form';

import './login.css';

class Login extends Component {
  state = {  }
  render() {
    return (
      <span>
        <Header></Header>
        <section className="login__form-container">
          <DescriptionForm />
          <Form />
        </section>
        <Footer></Footer>
      </span>
    )
  }
}

export default Login;