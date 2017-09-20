import "../scss/more.scss";
export default{
	loadHeader(){
		$("#header").load("views/more.html #moreHeader",function(){
			console.log("more")
		})
	},
	loadContent(){
		$("#content").load("views/more.html #moreContent",function(){
			if(localStorage.getItem("isLogin")== "1"){
				$(".cancel").on("tap",function(){
					localStorage.getItem("isLogin" == "0");
					$(".cancel").hide()
				})
				}else{
					$(".cancel").hide();
				
			}
			
		})
	}
}
