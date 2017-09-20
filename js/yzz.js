var https = require("https");
var MyServer = require("./MyServer.js");
//https://m.nuomi.com/webapp/tuan/list?pn=1&pageSize=10；
//https://m.nuomi.com/webapp/tuan/homeAjax?cid=wise_shouye_nuomi&city=zz
//https://m.nuomi.com/webapp/tuan/homeAjax?city=zz
var options = {
  hostname: 'm.nuomi.com',
  port: 443,//如果是https协议均为443，如果为http协议，此值为80
  path: '/webapp/tuan/homeAjax?city=zz',
  method: 'GET'
};
var req = https.request(options,function(res){
	var htmlStr = "";
	res.on("data",function(html){
		htmlStr += html;
	});
	res.on("end",function(){
		MyServer.server(htmlStr)
	});	
});
req.on("error",function(err){
	console.log(err);
});
req.end();
