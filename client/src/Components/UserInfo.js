import React from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';


class UserInfo extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id,
            user: [],
            options: {
            chart: {
                  zoom: {
                      enabled: false
                  }
              },
              dataLabels: {
                  enabled: false
              },
              stroke: {
                  curve: 'straight'
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
          series: [{
              name: "",
              data: []//this.state.user.clicks                   //[10, 41, 35, 51, 49, 62, 69, 91, 148, 0, 5, 88]
          }],
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
        "endDate": "2019-10-12"
      }
    })
    .then((res) => {      
      console.log(res);
      this.setState({
        user: res.data.user,
        series: [{
        	name: "Clicks",
        	data: res.data.user.map(user => user.clicks),                              //res.data.user.clicks//.filter(user => user.clicks === "clicks")
        }],
        options: {
        	xaxis: {
        	    categories: res.data.user.map(user => user.date)
            }
        }        
      }, () => {
      	console.log(this.state.series);
      	//console.log(res.data.user.clicks);
      	console.log(this.state.user);
      	console.log(this.state.options.xaxis);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  } 

render(){
	 return (
    <div className="UserInfo">
      <h1>User Info!</h1>
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />       
    </div>
  );

}
 
}


  

export default UserInfo;