import "../scss/search.scss";
import home from  "./home.js";
export default{
	loadHeader(){
		$("#header").load("views/Search.html #searchHeader",function(){
			console.log("serch")
		})
	},
	loadContent(){
		$("#content").load("views/Search.html #searchContent",function(){
			$(".cancel").on("tap",function(){
				home.loadHeader("Search");
				home.loadContent();
				$("#footer").css("display","block")
			})
			
			$.ajax({
			type:"get",
			url:"http://127.0.0.1:8000/",
			success:function(data){				
				var obj=JSON.parse(data);
				console.log(obj);
				var objs=obj.data.hotword.list;
				console.log(objs);
				for(var i in objs){
					$(".hot_Key ul").append("<li>"+objs[i]+"</li>")
				}
			}
		});					
				
			
		
			
			
			
			
			
			
			
			
			
		})
	}
}
