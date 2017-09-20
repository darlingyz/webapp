import "../scss/detail.scss";
export default{
	loadHeader(){
		$("#header").load("views/detail.html #detailHeader",function(){
			console.log("ok");
		})
	},
	loadContent(){
		$("#content").load("views/detail.html #deatilContent",function(){
			console.log("okk");
		})
	}
}
