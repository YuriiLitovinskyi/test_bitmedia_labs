import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../index';


class UsersList extends React.Component {
	constructor(props){
      super(props);

    this.state={
      users: [],
      pageNumber: 1,
      numberOfUsers: 20,
      total_clicks: [],
      total_page_views: [],
      totalUsers: 0
    };
    this.getAllUsers = this.getAllUsers.bind(this);       
  }

  componentDidMount(){
    this.getAllUsers();   
  } 

  onChangeNumberOfUsers = (event) => {
    this.setState({numberOfUsers: event.target.value});
  }

  //GET users from server
  getAllUsers = (e) => {
    if(e) e.preventDefault();
    axios.post(`${BASE_URL}/users`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },  
      data: {
        "pageNumber": this.state.pageNumber,
        "numberOfUsers": this.state.numberOfUsers
      }
    })
    .then((res) => {      
      //console.log(res);
      this.setState({
        users: res.data.users,
        total_clicks: res.data.total_clicks,
        total_page_views: res.data.total_page_views,
        totalUsers: res.data.totalUsers
      }, () => {
        //console.log(this.state);        
      })
    })
    .catch((err) => {
      console.log(err);
    })
  } 

  //Pagination
  prevPage() {
    if (this.state.pageNumber > 1) {
        this.setState({
          pageNumber: this.state.pageNumber - 1
        }, () => {
          this.getAllUsers();
          //console.log(this.state.pageNumber);
    });      
    }         
  }

  nextPage() {
    if ((this.state.totalUsers/this.state.pageNumber) > this.state.numberOfUsers) {
      this.setState({
        pageNumber: this.state.pageNumber + 1
      }, () => {
        this.getAllUsers();
        //console.log(this.state.pageNumber);        
    });
    }        
  }

 
  render(){
  	  return (
    <div className="UsersList">
      <div className="header-statistics">
        <h2>AppCo</h2>
      </div>      
      <ul className="Nav">
          <Link to='/'>
              <li>Main page ></li>
          </Link>
          <Link to='#'>
              <li>> User statistics</li>
          </Link>         
      </ul>    
      <h2>Users statistics</h2>
      <div className="row">
        <div className="col-12 form-users">
          <form onSubmit={ this.getAllUsers }>
            <label>Display Users per page: </label>
            <input  
                  type="number"
                  min={10}
                  max={50}           
                  value={ this.state.numberOfUsers } 
                  onChange={ this.onChangeNumberOfUsers.bind(this) }
            />
            <button type="submit">Apply</button>
          </form> 
        </div>
      </div>      
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, id) => {
	        	return (	        		
	        		<tr key={ user.id } onClick={() => this.props.history.push(`/user/${user.id}`)}>
	        		    <td>{ user.id }</td>
	        		    <td>{ user.first_name }</td> 
	        		    <td>{ user.last_name }</td> 
	        		    <td>{ user.email }</td>
	        		    <td>{ user.gender }</td>
	        		    <td>{ user.ip_address }</td>
		                <td>{ this.state.total_clicks[user.id] }</td>
		                <td>{ this.state.total_page_views[user.id] }</td>
	        		</tr>	        		      	  
	        	)        	
            })}
          </tbody>
        </table> 
        <div className="row">
          <div className="col-12 pagin-buttons">
            <button className="pagin-btn" onClick={this.prevPage.bind(this)}>Prev</button>
            <button className="pagin-num-btn" disabled >{ this.state.pageNumber }</button> 
            <button className="pagin-btn" onClick={this.nextPage.bind(this)}>Next</button>          
          </div>
        </div>                 
      </div> 
      <div className="footer-statistics">
        <div className="row">
          <div className="col-4">
            <h4>AppCo</h4>
          </div>
          <div className="col-4">
            <p>All rights reserved by ThemeTags</p>						
          </div>
          <div className="col-4">
            <p>Copyrights © 2019. </p>						
          </div>
        </div>
      </div>            
    </div>
   );

  }
}  

export default UsersList;
