import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './components/Header/headerAuth';
import Footer from './components/Footer/footerAuth';
import Login from './components/Login/Login';
import './App.css';


// the main spa page
class App extends Component
{
	 render()
	 {
	 	return(
			 <Router>
		 		<div class="app">
					  <Header />
					<Switch>
						{/*Account routes*/}
		 				<Route path="/login" component={Login}></Route>
						<Route path="/registration" component={}></Route>
						<Route path="/forget_password" component={}></Route>
						<Route path="/num_verification" component={}></Route>
						{/*Account routes*/}

						{/*Importation routes*/}
						<Route path="/importation/finish" component={}></Route>
						<Route path="/importation/contact" component={}></Route>
						<Route path="/importation/infos" component={}></Route>
						{/*Importation routes*/}
						  <Route path="/" component={Login}></Route>
					</Switch>
		 			<Footer/>
	 			</div>
	 		</Router>
			 );
	 }
}

export default App;