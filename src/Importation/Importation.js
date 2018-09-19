import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect,Route, Switch } from 'react-router-dom';
import Header from '../components/Header/HeaderSetup';
import Footer from '../components/Footer/FooterSetup';
import './Importation.css';


// 
class Importation extends Component {
    render() {
        return (
            <Router>
                <div class="importation">
                    <Header />
                    <Switch>
                    {/*Importation routes*/}
                    <Route path="/importation/finish" component={<div />}></Route>
                    <Route path="/importation/contact" component={<div />}></Route>
                    <Route path="/importation/infos" component={<div />}></Route>
                    {/*Importation routes*/}                                                            
                   </Switch>
                    <Footer />
                    <Redirect to="/importation/infos" />
                </div>
            </Router>
        );
    }
}

export default Importation;