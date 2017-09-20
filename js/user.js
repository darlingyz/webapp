import "../scss/user.scss";
import register from "./register.js";
import login from "./login.js";
import MainFooter from "./MainFooter.js";
export default{
	loadHeader(){
		$("#header").load("views/user.html #userHeader",function(){
			console.log("user")
		})
	},
	loadContent(){
		$("#content").load("views/user.html #userContent",function(){
		if(localStorage.getItem("isLogin")=="1"){
			$(".successlogin").show();
			$(".noLogin").hide();
			$("#user").html(localStorage.getItem("username"))
			}else{
				$(".noLogin").show();
				$(".successlogin").hide();
			}
		
		$("#reg_Btn").on("tap",function(){
			register.loadHeader();
			register.loadContent();	
			$("#footer").css("display","none")
		})
		$("#login_Btn").on("tap",function(){
			login.loadHeader("user");
			login.loadContent();
			$("#footer").css("display","none")
		})
		
		
		
		
	})
	}
	
}
