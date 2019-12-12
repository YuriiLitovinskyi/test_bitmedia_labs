import React from 'react';
import Mobile from '../styles/Images/mobile.png';
import Group_13 from '../styles/Images/Group_13.png';
import Group_15 from '../styles/Images/Group_15.png';
import Group_14 from '../styles/Images/Group_14.png';
import { Link } from 'react-router-dom'; 


class Main extends React.Component {
	  

	render(){
	  return (
	    <div className="App">
			<header className="header-main">
				<div className="header">
					<div className="row">
						<div className="col-6">
							<h2>AppCo</h2>
							<h1><b>Brainstorming</b> for desired perfect Usability</h1>
							<p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
							<Link to="/users">
							    <button className="stats">View Stats</button>							 
							</Link>							
						</div>	
						<div className="col-6">
							<div className="mobile-wrap">
								<img className="mobile" src={ Mobile } alt="Mobile"></img>
							</div>							
						</div>
					</div>									
				</div>
			</header> 
			<div className="question">				
				<h3>Why <b>small business owners</b> love AppCo?</h3>				
			</div>	
			<div className="about">
				<p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
			</div> 
			<div className="Info">
				<div className="row">				
					<div className="col-3">
						<div className="clean-design">
							<img className="Group_13" src={Group_13} alt="Clean design img"></img>
							<h3 className="CleanD">Clean Design</h3>
							<p className="Sales">Increase sales by showing true dynamics of your website.</p>
						</div>					
					</div>
					<div className="col-3">
						<div className="clean-design">
							<img className="Group_15" src={Group_15} alt="Secure Data img"></img>
							<h3 className="SecureD">Secure Data</h3>
							<p className="OnlineStore">Increase sales by showing true dynamics of your website.</p>
						</div>										
					</div>
					<div className="col-3">
						<div className="clean-design">
							<img className="Group_14" src={Group_14} alt="Retina ready img"></img>
							<h3 className="RetinaR">Retina Ready</h3>
							<p className="SocialProof">Realize importance of social proof in customer’s purchase decision.</p>
						</div>										
					</div>									
				</div>
			</div>   
	    </div>
  );

	}  
}
  

export default Main;
