import React from 'react';
import axios from 'axios';
import './styles/App.css';
import Group_13 from './styles/Group_13.png';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      users: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getUserStatistics = this.getUserStatistics.bind(this);
  }

  componentDidMount(){
    this.getAllUsers();
    this.getUserStatistics();
  }

  getAllUsers = () => {
    axios.post('http://localhost:4000/users', {}, {
      headers: {
        'Content-Type': 'application/json',
      },  
      data: {
        "pageNumber": 5,
        "numberOfUsers": 6
      }
    })
    .then((res) => {      
      console.log(res);
      this.setState({
       // users: res.data.users
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getUserStatistics = () => {
    let userId = 999;

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
      this.setState({
       // users: res.data.users
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

render(){
  return (
    <div className="App">    
      <header className="App-header">     
      <h1 className="AppCo">AppCo</h1> 
      <h1 className="Brainstorming"><b>Brainstorming</b> for desired perfect Usability</h1> 
      <h3 className="About">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</h3>  
      <button className="statsButton">View Stats</button>  
      <h2 className="Why">Why <b>small business owners love</b> AppCo?</h2>
      <p className="LearnMore">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>  
      </header>
      <div className="Rectangle34">
        <img className="Group_13" src={Group_13}></img>
        <h3 className="CleanD">Clean Design</h3>
        <p className="Sales">Increase sales by showing true dynamics of your website.</p>
      </div>
    </div>
  );
}

}
  

export default App;
