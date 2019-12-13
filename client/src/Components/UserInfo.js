import React from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';


class UserInfo extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id,
            user: [],
            firstName: "",
            lastName: "",
            beginDate: "2019-10-02",
            endDate: "2019-10-08",
            optionsClicks: {
                stroke: {
                width: 5,
                curve: 'smooth'
              },
              markers: {
                size: 6,
                opacity: 0.9,
                colors: ["#039BE5"],
                strokeColor: "#fff",
                strokeWidth: 2,                 
                hover: {
                  size: 8,
                }
              },        
              title: {
                  text: 'Clicks',
                  align: 'left'
              },
              grid: {
                  row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.2
                  },
              },
              xaxis: {
                  categories: [],
              }
            },
            seriesClicks: [{
                name: "Clicks",
                data: []                  
            }],
            optionsViews: {
              stroke: {
                width: 6,
                curve: 'smooth'
              }, 
              markers: {
                size: 6,
                opacity: 0.9,
                colors: ["#039BE5"],
                strokeColor: "#fff",
                strokeWidth: 2,                 
                hover: {
                  size: 8,
                }
              },         
              title: {
                  text: 'Views',
                  align: 'left'
              },
              grid: {
                  row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.2
                  },
              },
              xaxis: {
                  categories: [],
              }
            },
            seriesViews: [{
                name: "Views",
                data: []                  
            }],
        }
  }
    
  componentDidMount() {
  	  this.getUserStatistics(this.state.id);      
  }

  onChangeBeginDate = (event) => {
    this.setState({beginDate: event.target.value});
  }

  onChangeEndDate = (event) => {
    this.setState({endDate: event.target.value});
  }  

  //Get User statistic data from server according to begin/end date 
  getUserStatistics = (userId) => { 
    axios.post('http://localhost:4000/user/' + userId, {}, {
      headers: {
        'Content-Type': 'application/json',
      },  
      data: {
        "beginDate": this.state.beginDate,
        "endDate": this.state.endDate
      }
    })
    .then((res) => {      
      //console.log(res);
      this.setState({
        user: res.data.user,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        seriesClicks: [{        	
        	data: res.data.user.map(user => user.clicks),                              
        }],
        optionsClicks: {
        	xaxis: {
        	    categories: res.data.user.map(user => user.date)
          }
        },
        seriesViews: [{          
          data: res.data.user.map(user => user.page_views),                              
        }],
        optionsViews: {
          xaxis: {
              categories: res.data.user.map(user => user.date)
          }
        }        
      }, () => {    	
      	//console.log(this.state);      	
      })
    })
    .catch((err) => {
      console.log(err);
    })
  } 

render(){
	 return (	 	
    <div className="UserInfo">      
      <ul className="Nav">
        <Link to='/'>
            <li>Main page ></li>
        </Link>
        <Link to='/users'>
            <li>> User statistics ></li>
        </Link>
        <Link to='#'>
            <li>> {this.state.firstName} {this.state.lastName}</li>
        </Link>         
	  </ul>  
      <h2>{ this.state.firstName } { this.state.lastName }</h2>
      <ReactApexChart options={this.state.optionsClicks} series={this.state.seriesClicks} type="line" height="350" />  
      <ReactApexChart options={this.state.optionsViews} series={this.state.seriesViews} type="line" height="350" />
      <input  
            type="date"           
            value={ this.state.beginDate } 
            onChange={ this.onChangeBeginDate.bind(this) }
      />
      <input  
            type="date"           
            value={ this.state.endDate } 
            onChange={ this.onChangeEndDate.bind(this) }
      /> 
      <button onClick={ () => {this.getUserStatistics(this.state.id)} }>Apply</button>     
    </div>
  );

}
 
}
  

export default UserInfo;