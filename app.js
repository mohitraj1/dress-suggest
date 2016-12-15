var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
	console.log("request received");
	var data= [{'name':'AE Checks','image':'Picture1.jpg','outOfService':0},{'name':'Bossni','image':'Picture2.jpg','outOfService':0},{'name':'Gucci','image':'Picture3.jpg','outOfService':0}];//data;
    res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*'); //THIS IS MUST. Ate my 2 days :(
	res.send(JSON.stringify(data));

     // res.end();
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server started at port 3000");
});
