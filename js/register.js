import "../scss/register.scss";
import MyAjax from "./MyAjax.js";
import user from "./user.js";
import login from "./login.js";
import MainFooter from "./MainFooter.js"

export default{
	loadHeader(){
		$("#header").load("views/register.html #registerHeader",function(){
			console.log("00")
		})
	},
	loadContent(){
		$("#content").load("views/register.html #registerContent",function(){
			$(".fanhui").on("tap",function(){
				user.loadHeader();
				user.loadContent();
				$("#footer").css("display","block")
			})
			$(".den_register").on("tap",function(){
				login.loadHeader();
				login.loadContent();
				$("#footer").css("display","none")
			});
		$("#butt_Btn").on("tap",function(){
			var username=$("#username").val();
			var psw=$("#psw").val();
			if(username=="" ||psw ==""){
				alert("信息填写不完整，请重新填写！")
			}else{
			var userObj={
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					username:username,
					psw:psw
				},
				dataType:"JSON"
			}
			MyAjax.zeptoAjax(userObj,function(data){
				if(data=="0"){
					alert("用户名重名，请重新填写")
				}else if(data=="1"){
					alert("注册成功！")
				}else{
					alert("注册失败！")
			  }
			})				
		   }			
		 })						
	  })
	}
}
