import home from "./home.js";
import MainFooter from "./Mainfooter.js";
import cart from "./cart.js";
import user from "./user.js";
import more from "./more.js";
export default{
	loadFooterStyle(inde){
		$("#footer").find("li").eq(inde).addClass("active").siblings().removeClass("active");
	},
	loadFooter(){
		$("#footer").load("views/MainFooter.html",function(){
			$("#footer").find("li").on("tap",function(){
				var index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			
			switch(index){
				case 0:
					home.loadHeader();
					home.loadContent();
				break;
				case 1:
				cart.loadHeader();
				cart.loadContent();
				break;
				case 2:
				user.loadHeader();
				user.loadContent();
				break;
				case 3:
				more.loadHeader();
				more.loadContent();
				break;
				default:
				break;				
			}
			
			
			})
		})
	}
}
