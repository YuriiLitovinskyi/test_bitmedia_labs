import React from 'react';
import { Link } from 'react-router-dom'; 
import Mobile from '../styles/Images/mobile.png';
import Group_13 from '../styles/Images/Group_13.png';
import Group_15 from '../styles/Images/Group_15.png';
import Group_14 from '../styles/Images/Group_14.png';
import Jimmy_Huh from '../styles/Images/Jimmy_Huh.png';
import keyboard_base from '../styles/Images/keyboard_base.png';
import Rectangle_4 from '../styles/Images/Rectangle_4.png';
import undraw_online from '../styles/Images/undraw_online.png';
import undraw_file from '../styles/Images/undraw_file.png';
import undraw_quiz from '../styles/Images/undraw_quiz.png'; 



class Main extends React.Component {
	  

	render(){
	  return (
	    <div className="App">
			<header className="header-main">
				<div className="header">
					<div className="row">
						<div className="col-6 header-col">
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
				<div className="row rowInfo">				
					<div className="col-3 colInfo">
						<div className="clean-design">
							<img className="Group_13" src={ Group_13 } alt="Clean design img"></img>
							<h3>Clean Design</h3>
							<p>Increase sales by showing true dynamics of your website.</p>
						</div>					
					</div>
					<div className="col-3 colInfo">
						<div className="clean-design">
							<img className="Group_15" src={ Group_15 } alt="Secure Data img"></img>
							<h3>Secure Data</h3>
							<p>Increase sales by showing true dynamics of your website.</p>
						</div>										
					</div>
					<div className="col-3 colInfo">
						<div className="clean-design">
							<img className="Group_14" src={ Group_14 } alt="Retina ready img"></img>
							<h3>Retina Ready</h3>
							<p>Realize importance of social proof in customer’s purchase decision.</p>
						</div>										
					</div>									
				</div>	
			</div>
			<div className="row learn-container">
				<div className="col-6 learn-col">
					<h2>Start Managing your apps business, more faster</h2>	
					<p>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
					<button>Learn more</button>				
				</div>
				<div className="col-6">
					<div className="Jimmy-wrap">
						<img className="Jimmy_Huh" src={ Jimmy_Huh } alt="Jimmy Huh"></img>
					</div>	
					<img className="keyboard_base" src={ keyboard_base } alt="keyboard base"></img>	
					<img className="Rectangle_4" src={ Rectangle_4 } alt="Rectangle_4"></img>				
				</div>
			</div>
			<div className="wrap-img">
			<div className="question">				
				<h3 className="h3Question"><b>Afforadble Pricing and Packages</b> choose your best one</h3>				
			</div>	
			<div className="about2">
				<p>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
			</div>			
			<div className="Info">
				<div className="row rowInfo">				
					<div className="col-3 colInfo">
						<div className="clean-design">
						    <h3>Basic</h3>
							<img className="undraw_online" src={ undraw_online } alt="undraw_online"></img>
							<h2>$29</h2>
							<p>Push Notifications</p>
							<p>Data Transfer</p>
							<p>SQL Database</p>
							<p>Search & SEO Analytics</p>
							<p>2 months technical support</p>
							<p>2+ profitable keyword</p>
							<button className="purchase-btn">Purchase now</button>			
						</div>					
					</div>
					<div className="col-3 colInfo">
						<div className="clean-design">
							<h3>Standard</h3>
							<img className="undraw_file" src={ undraw_file } alt="undraw_file"></img>
							<h2 className="standard">$149</h2>
							<p>Push Notifications</p>
							<p>Data Transfer</p>
							<p>SQL Database</p>
							<p>Search & SEO Analytics</p>
							<p>2 months technical support</p>
							<p>2+ profitable keyword</p>
							<button className="purchase-btn">Purchase now</button>
						</div>										
					</div>
					<div className="col-3 colInfo">
						<div className="clean-design">
							<h3>Unlimited</h3>
							<img className="undraw_quiz" src={ undraw_quiz } alt="Retina ready img"></img>
							<h2>$39</h2>
							<p>Push Notifications</p>
							<p>Data Transfer</p>
							<p>SQL Database</p>
							<p>Search & SEO Analytics</p>
							<p>2 months technical support</p>
							<p>2+ profitable keyword</p>
							<button className="purchase-btn">Purchase now</button>
						</div>										
					</div>									
				</div>
			</div>
			<div className="contact-us">
				<p>If you need custom services or Need more? <span>Contact us</span></p>
			</div> 	
			
			</div>  
					
			<footer className="main-footer">
				<div className="row">
					<div className="col-12">
						<input type="email" placeholder="Enter your email"></input>
						<button>Subscribe</button>
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<h3>AppCo</h3>
					</div>
					<div className="col-4">
						<p>All rights reserved by ThemeTags</p>						
					</div>
					<div className="col-4">
						<p>Copyrights © 2019. </p>						
					</div>
				</div>

			</footer> 
	    </div>
  );

	}  
}
  

export default Main;
