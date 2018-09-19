import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Forgot from "./pages/forgot/forgot";
import Code from "./pages/code/code";
import Recover from "./pages/recover/recover";
import Setup from "./pages/setup/setup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/code" component={Code} />
          <Route path="/recover" component={Recover} />
          <Route path="/setup" component={Setup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
