import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      users: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount(){
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.post('http://localhost:4000/users',  {
      headers: {
        'Content-Type': 'application/json',
      },  
      body: {
        "pageNumber": 4,
        "numberOfUsers": 50
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
    </div>
  );
}

}
  

export default App;
