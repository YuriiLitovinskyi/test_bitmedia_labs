import React from 'react';
import Group_13 from '../styles/Images/Group_13.png';
import Group_15 from '../styles/Images/Group_15.png';
import Group_14 from '../styles/Images/Group_14.png';
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
		  <div className="Rectangle35">
	        <img className="Group_15" src={Group_15} alt="Secure Data img"></img>
	        <h3 className="SecureD">Secure Data</h3>
	        <p className="OnlineStore">Increase sales by showing true dynamics of your website.</p>
	      </div>
		  <div className="Rectangle36">
	        <img className="Group_14" src={Group_14} alt="Retina ready img"></img>
	        <h3 className="RetinaR">Retina Ready</h3>
	        <p className="SocialProof">Realize importance of social proof in customer’s purchase decision.</p>
	      </div>
		  <div className="Rectangle37">   
			<div className="Rectangle39">
				<h2 className="AppBusiness">Start Managing your apps business, more faster</h2>
			</div> 
		  </div>   
	    </div>
  );

	}  
}
  

export default Main;
