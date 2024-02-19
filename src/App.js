import logo from "./logo.svg";
import Home from "./Home";
import SptintTasks from "./SprintTasks";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<div className="max-w-[600px] mx-[auto] my-[40px] p-[20px] m-0 font-[Quicksand] text-[#000000]">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/SprintTasks">
							<SptintTasks />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
