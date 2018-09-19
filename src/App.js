import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './pages/login';
import Importation from './Importation/Importation';
import './App.css';


class App extends Component
{
	 render()
	 {
	 	return(
			 <Router>
					 <Switch>
		 				<Route path="/" component={Login}></Route>	
						<Route path="/importation" component={Importation}></Route>	
				  	</Switch>
			 </Router>
			 );
	 }
}

export default App;