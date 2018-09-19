import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Forgot from "./pages/forgot/forgot";
import Code from "./pages/code/code";
import Setup from "./pages/setup/setup";
import Importation from "./Importation/Importation";
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
          <Route path="/setup" component={Setup} />
          <Route path="/import" component={Importation} />
        </Switch>
      </Router>
    );
  }
}

export default App;
