const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Getting data from files
const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
const users_statistic = JSON.parse(fs.readFileSync('data/users_statistic.json', 'utf8'));

//console.log(users);
//console.log(users_statistic);

//GET data from users.json
app.post('/users', (req, res) => {
	let pageNumber = parseInt(req.body.pageNumber || 1);
	let numberOfUsers = parseInt(req.body.numberOfUsers);	
	const pageCount = Math.ceil(users.length / numberOfUsers);
	if (pageNumber > pageCount){
		pageNumber = pageCount;
	}
	console.log(pageNumber);
	console.log(numberOfUsers);
	console.log(req.body);
	console.log(pageCount);
	console.log(users.slice(pageNumber * numberOfUsers - numberOfUsers, pageNumber * numberOfUsers) );
	let usersArray = users.slice(pageNumber * numberOfUsers - numberOfUsers, pageNumber * numberOfUsers);
	
	let total_clicks_views_Array = users_statistic.filter(user1 => usersArray.some(user2 => user1.user_id === user2.id));
	
	let total_clicks = total_clicks_views_Array.reduce((c, i)=>{c[i.user_id]=(c[i.user_id]||0)+parseFloat(i.clicks); return c}, {});
	console.log("----");
	console.log(total_clicks_views_Array);
	console.log("----");
	console.log(total_clicks);
	console.log("----end----");
	console.log(users.length);	
	console.log(Object.keys(users).length);
	if (pageNumber < 0 || pageNumber === 0){
		response = {
			"error": true,
			"message": "invalid page number, should start with 1"
		};
		return res.json(response); 
	} 
	try {
		res.json({
			"page": pageNumber,
			"pageCount": pageCount,
			"users": users.slice(pageNumber * numberOfUsers - numberOfUsers, pageNumber * numberOfUsers),
			"total_clicks": total_clicks_views_Array.reduce((c, i)=>{c[i.user_id]=(c[i.user_id]||0)+parseFloat(i.clicks); return c}, {}),
			"total_page_views": total_clicks_views_Array.reduce((c, i)=>{c[i.user_id]=(c[i.user_id]||0)+parseFloat(i.page_views); return c}, {})
		});
	} catch(err){
		console.log(err);
	}
});

//GET data from users_statistic.json
app.post('/user/:id', (req, res) => {
	let userId = parseInt(req.params.id);
	//let userId = parseInt(req.body.userId);
	//let userId = 38;
	let beginDate = req.body.beginDate;
	let endDate = req.body.endDate;
	console.log(userId);
	console.log(beginDate);
	console.log(endDate);   
	console.log(new Date(beginDate).getTime()); 
	console.log(new Date(endDate).getTime());	
	console.log(users.filter((user) => user.id === userId).length > 0);

	begin = new Date(beginDate).getTime();
	end = new Date(endDate).getTime();


	if (users.filter( user => user.id === userId).length > 0){
		try {
			res.json({
				"user":	users_statistic.filter(x => {let time = new Date(x.date).getTime(); return (x.user_id === userId && (begin < time && time < end));})				                                        
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
