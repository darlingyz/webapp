import React from "react";
import ReactDom from "react-dom";

import sass from "./scss/main.scss";
import Home from "./md/Home.js"
import MainFooter from "./md/MainFooter.js"

class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div id="container">
				<header className="header" id="header"></header>
				<div id="content"></div>
				<footer className="footer" id="footer"></footer>
			</div>
		)
	}	
}

ReactDom.render(<App />,document.getElementById("app"));
ReactDom.render(<MainFooter/>,document.getElementById("footer"));
ReactDom.render(<Home />,document.getElementById("content"))
