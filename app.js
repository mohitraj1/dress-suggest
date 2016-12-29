console.log("DRESS log - reached point 1");
var express = require('express');
console.log("DRESS log - reached point 2");
var app = express();

console.log("DRESS log - reached point 3");
app.get('/hello', function(req, res) {
	console.log("request received");
	var data= [{'name':'AE Checks','image':'Picture1.jpg','outOfService':0},{'name':'Bossni','image':'Picture2.jpg','outOfService':0},{'name':'Gucci','image':'Picture3.jpg','outOfService':0}];//data;
    res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*'); //THIS IS MUST. Ate my 2 days :(
	res.send(JSON.stringify(data));

     // res.end();
});

console.log("DRESS log - reached point 4");
app.listen(process.env.PORT || 3000, function(){
	console.log("Server started at port 3000");
});
