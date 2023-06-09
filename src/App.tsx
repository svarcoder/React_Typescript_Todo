import React from "react";
import GlobalStyle from "./Style/global";
import "./App.css";
import Home from "./Component/Home/index";

const App: React.FC = (props) => {
	return (
		<>
			<GlobalStyle />
			<Home />
		</>
	);
};

export default App;
