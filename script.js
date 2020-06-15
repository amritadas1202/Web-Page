const express=require("express");
const request=require("request");
const http=require("http");
const app=express();


app.get("/",function(req,res){
	const url="http://node.uttarakhandtraveller.com/places/1";
	

	const request= http.get(url,function(response){
		response.on("data",function(data){
			const apiData=JSON.parse(data);			
			console.log(apiData);
			res.write("<h1>"+apiData.place.name+"</h1>")
			res.write("<h3>Located at "+apiData.place.location+"</h3>")
			res.write("<p>"+apiData.place.detail+"</p>");
			res.send();
	});

});

	request.end();
});


app.listen(process.env.PORT || 3000, function(){	
	console.log("Server started  .......");
});