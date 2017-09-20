import "../scss/cart.scss";
export default{
	loadHeader(){
		$("#header").load("views/cart.html #cartHeader",function(){
			console.log("cart")
		})
	},
	loadContent(){
		$("#content").load("views/cart.html #cartContent",function(){
			console.log("carts")
		})
	}
}
