import "../scss/login.scss";
import MainFooter from "./MainFooter.js";
import home from "./home.js";
import cart from "./cart.js"
import user from "./user.js";
import register from "./register.js"
import MyAjax from "./MyAjax.js";
export default{
	loadHeader(){		
		$("#header").load("views/login.html #loginHeader",function(){				
			console.log("ok")
		})	
	},
	loadContent(type){
		$("#content").load("views/login.html #loginContent",function(){
		$(".login_Ret").on("tap",function(){
			user.loadHeader();
			user.loadContent();	
			$("#footer").css("display","block")
		})
		$(".login_Regist").on("tap",function(){
			register.loadHeader();
			register.loadContent();
			$("#footer").css("display","none")
		})
	$("#btn1").on("tap",function(){
		var username=$("#username").val();
		var psw=$("#psw").val();
		if(username==""||psw==""){
			alert("信息填写不完整，请仔细填写~`~")
		}else{
			
			$("#btn1").attr("disabled","disabled");
			$("#btn1").val("正在登录...")
			var userObj={
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					username:username,
					psw:psw
				},
				dataType:"JSON"
			}
			MyAjax.zeptoAjax(userObj,function(data){
				$("#btn1").removeAttr("disabled")//保证用户不可以连续点击
						$("#btn1").val("登录");
				if(data=="0"){
					alert("查无此人")
				}else if(data=="2"){
					alert("密码错误")
				}else{
					localStorage.setItem("isLogin","1");
					localStorage.setItem("username",username)
				if(type =="home"){
					home.loadHeader();
					home.loadContent();
					MainFooter.loadFooterActive(0);
					$("#footer").css("display","block")
				}else if(type=="cart"){
					cart.loadHeader();
					cart.loadContent();
					MainFooter.loadFooterActive(1);
					$("#footer").css("display","block")
				}else if(type=="user"){
					user.loadHeader();
					user.loadContent();
					MainFooter.loadFooterActive(2);
					$("#footer").css("display","block");
				}
					
			}	
			},function(err){
				$("#btn1").removeAttr("disabled");
				$("#btn1").val("登录");
				console.log(err)
			});
		}
	})
			
			
			
			
		})
	}	
}
