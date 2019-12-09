import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UsersList extends React.Component {
	constructor(props){
      super(props);

    this.state={
      users: [],
      pageNumber: 1,
      numberOfUsers: 10,
      total_clicks: [],
      total_page_views: []

    };
    this.getAllUsers = this.getAllUsers.bind(this);
    //this.getUserStatistics = this.getUserStatistics.bind(this);   
  }

  componentDidMount(){
    this.getAllUsers();
    //this.getUserStatistics();
  }

  getAllUsers = () => {
    axios.post('http://localhost:4000/users', {}, {
      headers: {
        'Content-Type': 'application/json',
      },  
      data: {
        "pageNumber": this.state.pageNumber,
        "numberOfUsers": this.state.numberOfUsers
      }
    })
    .then((res) => {      
      console.log(res);
      this.setState({
        users: res.data.users,
        total_clicks: res.data.total_clicks,
        total_page_views: res.data.total_page_views

      }, () => {
        console.log(this.state.users);
        //console.log(this.state.total_clicks);
        //console.log(this.state.total_page_views);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // getUserStatistics = () => {
  //   let userId = 999;

  //   axios.post('http://localhost:4000/user/' + userId, {}, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },  
  //     data: {
  //       "beginDate": "2019-01-01",
  //       "endDate": "2019-10-11"
  //     }
  //   })
  //   .then((res) => {      
  //     console.log(res);
  //     this.setState({
  //      // users: res.data.users
  //     })
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

 
  render(){
  	  return (
    <div className="UsersList">      
      <h1>Users statistics</h1> 
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
	        		<tr key={ user.id }>
	        		    <td><Link to={`/user/${user.id}`}>{ user.id }</Link></td>
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
      </div> 
       
    </div>
   );

  }
}


  

export default UsersList;
