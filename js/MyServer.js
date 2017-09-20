var http = require("http");

var MyServer = {
	server:function(str){
		http.createServer(function(req,res){
			res.setHeader("Access-Control-Allow-Origin","*");
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(str);
			res.end();
		}).listen(8000);
		console.log("your server is running at http://localhost:8000");
	}
}
module.exports = MyServer;

