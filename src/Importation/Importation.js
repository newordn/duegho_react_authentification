import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/HeaderSetup';
import Footer from '../components/Footer/FooterSetup';
import ImportationContact from './ImportationContact/ImportationContact';
import ImportationFinish from './ImportationFinish/ImportationFinish';
import ImportationInfos from './ImportationInfos/ImportationInfos';
import './Importation.css';


class Importation extends Component {
    render() {
        return (
            <Router>
                <div class="importation">
                    <Header />
                    <Switch>
                    {/*Importation routes*/}
                    <Route path="/importation/finish" component={ImportationFinish}></Route>
                    <Route path="/importation/contact" component={ImportationContact}></Route>
                    <Route path="/importation/infos" component={ImportationInfos}></Route>
                    {/*Importation routes*/}                                                            
                   </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Importation;