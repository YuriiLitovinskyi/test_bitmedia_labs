import React from 'react';
import Group_13 from '../styles/Group_13.png';
import { Link } from 'react-router-dom'; 


class Main extends React.Component {
	  

	render(){
	  return (
	    <div className="App">
	    <header className="App-header">     
	      <h1 className="AppCo">AppCo</h1> 
	      <h1 className="Brainstorming"><b>Brainstorming</b> for desired perfect Usability</h1> 
	      <h3 className="About">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h3> 
	      <Link to="/users">
	        <button  className="statsButton">View Stats</button> 
	      </Link>        
	      <h2 className="Why">Why <b>small business owners love</b> AppCo?</h2>
	      <p className="LearnMore">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>  
	      </header>
	      <div className="Rectangle34">
	        <img className="Group_13" src={Group_13} alt="Clean design img"></img>
	        <h3 className="CleanD">Clean Design</h3>
	        <p className="Sales">Increase sales by showing true dynamics of your website.</p>
	      </div>
	      <h1>Main!</h1>     
	    </div>
  );

	}  
}


  

export default Main;
