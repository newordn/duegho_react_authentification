import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Authentification from './Authentification/Authentification';
import Importation from './Importation/Importation';
import './App.css';


class App extends Component
{
	 render()
	 {
	 	return(
			 <Router>
				 <div>
		 			<Route path="/importation" component={Importation}></Route>	
		 			<Route path="/" component={Authentification}></Route>	
				  </div>
			 </Router>
			 );
	 }
}

export default App;