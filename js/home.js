import "../scss/home.scss";
import MyAjax from "./MyAjax.js";
import MyServer from "./MyServer.js";
import Search from "./Search.js";
import detail from "./detail.js";
import AddCart from "./AddCart.js"
export default{
	loadHeader(){
		$("#header").load("views/home.html #homeHeader",function(){

		})
	},
	loadContent(){								
		$("#content").load("views/home.html #homeContent",function(){
			$(".tit_Search").on("tap",function(){
			Search.loadHeader("home");
			Search.loadContent();
			$("#footer").css("display","none")
		})				
			//obj.offset().top
		/*
			$(window).on("touchmove",function(e){
				var evt=e||event;
				var scrollTop=document.body.scrollTop;
				console.log(scrollTop)
				//var scroll=document.body.scrollTop;
				//var scroll=$(".title").scrollTop();
				//console.log(scroll);
				if(scroll>0){
				$(".tit_Search").css("display","none")
			}else{
				$(".tit_Search").css("display","block")
			}
			})*/																				
			if(scroll>40){
				$(".tit_Search").css("display","none")
			}else{
				$(".tit_Search").css("display","block")
			}			
			var bannerData={
			url:'http://mcebackup.mogucdn.com/jsonp/get/3%3Fpid=51822&callback=jsonp51822backup',
			data:"",
			dataType:"JSONP"			
		}		
		$("#homeWrapper").html("<img src='../img/load.gif'>")
		MyAjax.zeptoAjax(bannerData,function(res){
			$("#homeWrapper").html("");	//eval可以去掉括号		
				var obj=res.replace("jsonp51822backup"," ");
				var strs=eval(obj);			
				var objs=strs.data.list;	
				var result=eval(objs);								
				var arr= [];
				for(var item of result){
					arr.push(item.image_800);				
				}							
				for(var i in result){
					$("#homeWrapper").append('<div class="swiper-slide">'+
						'<img src="'+arr[i]+'"/>'+
					'</div>')
				}
				var mySwiper = new Swiper("#homeBanner",{
					pagination:".swiper-pagination",
					autoplay:3000,
					loop:true,
					autoplayDisableOnInteraction:false
				})													
		})
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:8000/",
			success:function(data){				
				var obj=JSON.parse(data);
				console.log(obj);
				var objs=obj.data.goods.lists;
				console.log(objs);
			
			for(var item of objs){
			if(item.link == undefined){							
					$(".home_Chang ul").append("<li goodId="+item.id+" class='addCart'><img src="+item.image+" class='proItem'><span class='business_title'>"+item.business_title+"</span><span class='dealBizArea'>"+item.dealBizArea+"</span><p class='dealTitle'>"+item.dealTitle+"</p><p class='current_price'>"+'￥'+item.current_price/100+"</p><span class='sellCount'>"+'已售'+""+item.bought_weeekly+"</span></li>")
			}							
		}		
	$(".addCart").on("tap",function(ev){
		var goodsID=$(this).attr("goodId");
		ev.stopPropagation();
		AddCart.addCart(goodsID,1,"home");
	})
	
	$(".proItem").on("tap",function(){
		var goodsID=$(this).attr("goodId");
		detail.loadHeader("home");
		detail.loadContent(goodsID);
		//detail.loadFooter();
	}),function(err){
		console.log(err)
	}
	
	
	
	}
 });
	
	
		
		
		
		
		
  })
 }
}
