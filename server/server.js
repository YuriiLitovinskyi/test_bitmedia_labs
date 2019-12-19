const express = require('express');
const cors = require('cors');
const app = express();

const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Production
const origin = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'prod-url';
app.use(cors({ origin }));


//Getting data from files
const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
const users_statistic = JSON.parse(fs.readFileSync('data/users_statistic.json', 'utf8'));
//console.log(users);
//console.log(users_statistic);

let totalNumberOfUsers = users.length;


//GET data from users.json
app.post('/users', (req, res) => {
	let pageNumber = parseInt(req.body.pageNumber || 1);
	let numberOfUsers = parseInt(req.body.numberOfUsers);
	//console.log(req.body);	

	//Counts number of all pages according to number of users per page
	const pageCount = Math.ceil(users.length / numberOfUsers);
	if (pageNumber > pageCount){
		pageNumber = pageCount;
	}	
	
	//Users per page
	let usersArray = users.slice(pageNumber * numberOfUsers - numberOfUsers, pageNumber * numberOfUsers);
	//Gets all users with the same id from users_statistic array according to users per page
	let total_clicks_views_Array = users_statistic.filter(user1 => usersArray.some(user2 => user1.user_id === user2.id));
	//Total clicks for users per page
	let total_clicks = total_clicks_views_Array.reduce((c, i)=>{c[i.user_id]=(c[i.user_id]||0)+parseFloat(i.clicks); return c}, {});
	//Total views for users per page
	let totalViews = total_clicks_views_Array.reduce((c, i)=>{c[i.user_id]=(c[i.user_id]||0)+parseFloat(i.page_views); return c}, {});
	
	//console.log(total_clicks);
	//console.log(totalViews);		
	
	if (pageNumber < 0 || pageNumber === 0){
		response = {
			"error": true,
			"message": "invalid page number, should start with 1"
		};
		return res.json(response); 
	} 
	try {
		res.json({			
			//"pageCount": pageCount,
			"users": usersArray,
			"total_clicks": total_clicks,
			"total_page_views": totalViews,
			"totalUsers": totalNumberOfUsers
		});
	} catch(err){
		console.log(err);
	}
});


//GET data from users_statistic.json
app.post('/user/:id', (req, res) => {
	let userId = parseInt(req.params.id);	
	let beginDate = req.body.beginDate;
	let endDate = req.body.endDate;
	//console.log(userId);		

	//Check if user with such id is present on the server (users array)
	let userIsPresent = users.filter( user => user.id === userId).length > 0;

    //Getting object of user with min and max date from users_statistic
	let maxDateUser = users_statistic.reduce((a, b) => {
	  return new Date(a.date) > new Date(b.date) ? a : b;
	});
	let minDateUser = users_statistic.reduce((a, b) => {
	  return new Date(a.date) < new Date(b.date) ? a : b;
	});
	//console.log(maxDateUser);
	//console.log(minDateUser);  

    //Get array of user statistics for required dates
	let begin = new Date(beginDate).getTime();
	let end = new Date(endDate).getTime();
	let userStatisticDateArray = users_statistic.filter(x => {let time = new Date(x.date).getTime(); return (x.user_id === userId && (begin < time && time < end));});

	//Get first and last name of the user according to his id
	let firstName = users.find(x => x.id === userId).first_name;
	let lastName = users.find(x => x.id === userId).last_name;

	if (userIsPresent === true){
		try {
			res.json({
				"user":	userStatisticDateArray,
				"firstName": firstName,
				"lastName": lastName				                                        
		        });			
		} catch(err){
			console.log(err);
		}		
	} else {
		response = {
			"error": true,
			"message": "no user with such id"
		};
		return res.json(response); 			
	} 	
});



const port = 4000;
app.listen(port, () => {
	console.log('Server started on port ' + port + '...');
});
