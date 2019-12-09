import React from 'react';
import axios from 'axios';


class UserInfo extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }
  componentDidMount() {
  	  this.getUserStatistics(this.state.id);
      //var id = {this.state.id}
    }


  //console.log(data);
  //console.log(data.match.params.id);

  getUserStatistics = (userId) => {
    //let userId = 999;

    axios.post('http://localhost:4000/user/' + userId, {}, {
      headers: {
        'Content-Type': 'application/json',
      },  
      data: {
        "beginDate": "2019-01-01",
        "endDate": "2019-10-11"
      }
    })
    .then((res) => {      
      console.log(res);
      //this.setState({
       // users: res.data.users
      //})
    })
    .catch((err) => {
      console.log(err);
    })
  } 

render(){
	 return (
    <div className="UserInfo">
      <h1>User Info!</h1>       
    </div>
  );

}
 
}


  

export default UserInfo;