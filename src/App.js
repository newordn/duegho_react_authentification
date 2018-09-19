import React,{Component} from 'react';
import './App.css';
import Header from './components/Header/headerAuth';
import Footer from './components/Footer/footerAuth';
import Login from './components/Login/Login';

// the main spa page
class App extends Component
{
	 render()
	 {
	 	return(
		 		<div class="app">
		 			<Header/>
		 			<Login/>
		 			<Footer/>
	 			</div>
	 		);
	 }
}

export default App;