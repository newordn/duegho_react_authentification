import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/HeaderAuth';
import Footer from '../components/Footer/FooterAuth';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import './Authentification.css';


// 
class Authentification extends Component {
    render() {
        return (
            <Router>
                <div class="authentification">
                    <Header />
                    <Switch>
                        {/*Account routes*/}
                        <Route path="/auth/login" component={Login}></Route>
                        <Route path="/auth/registration" component={Registration}></Route>
                        <Route path="/auth/forget_password" component={Login}></Route>
                        <Route path="/auth/num_verification" component={Login}></Route>
                        {/*Account routes*/}
                    </Switch>
                    <Footer />

                    <Redirect to="/auth/login" />
                </div>
            </Router>
        );
    }
}

export default Authentification;