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
							<button className="stats">View Stats</button>
						</div>	
						<div className="col-6">
							<div className="mobile-wrap">
								<img className="mobile" src={ Mobile } alt="Mobile"></img>
							</div>							
						</div>
					</div>									
				</div>
			</header> 	    
	    </div>
  );

	}  
}
  

export default Main;
