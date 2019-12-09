import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './styles/App.css';
import Main from './Components/Main';
import UsersList from './Components/UsersList';
import UserInfo from './Components/UserInfo';


class App extends React.Component {  

render(){
  return (
    <Router>     
      <Switch>
        <Route path="/" exact component={ Main } />        
        <Route path="/users" exact component={ UsersList } />
        <Route path="/user/:id" component={ UserInfo } />       
      </Switch>    
    </Router>
  );
}

}
  

export default App;
