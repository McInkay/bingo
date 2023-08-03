import { useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import ReactSlider from "react-slider";

function App() {
	const [rotate, setRotate] = useState(0);
	return (
		<div className="App">
			<header className="App-header">Mirror</header>
			<ReactSlider
				className="horizontal-slider"
				thumbClassName="example-thumb"
				trackClassName="example-track"
				max={360}
				onChange={(value) => setRotate(value)}
				renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
			/>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "400px 400px",
					gridTemplateRows: "300px 300px",
					width: "1000px",
					margin: "auto",
				}}
			>
				<Canvas rotate={rotate + 0} />
				<Canvas rotate={-rotate} />
				<Canvas rotate={-rotate + 180} />
				<Canvas rotate={rotate + 180} />
			</div>
		</div>
	);
}

export default App;
