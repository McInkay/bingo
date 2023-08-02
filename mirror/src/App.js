import "./App.css";
import Canvas from "./Canvas";

function App() {
	return (
		<div className="App">
			<header className="App-header">Mirror</header>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "50px 50px",
					gridTemplateRows: "50px 50px",
				}}
			>
				<Canvas x={true} y={true} />
				<Canvas x={false} y={true} />
				<Canvas x={true} y={false} />
				<Canvas x={false} y={false} />
			</div>
		</div>
	);
}

export default App;
