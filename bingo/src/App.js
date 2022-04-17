import React, { useState, useEffect } from "react";
import "./App.css";
import Bingo from "./bingo";
import styled from "styled-components";

const Header = styled.header`
	display: grid;
	width: 100%;
	height: 100%;
	align-items: stretch;
	justify-content: stretch;
	grid-auto-rows: 1fr 1fr;
	@media (min-aspect-ratio: 1/1) {
		grid-auto-flow: column;
		grid-auto-columns: 1fr 1fr;
	}
`;

const BingoWrapper = styled.div`
	display: grid;

	@media (min-aspect-ratio: 1/1) {
		margin: auto 0;
		height: 50vw;
	}
`;

const ArgsWrapper = styled.div`
	@media (min-aspect-ratio: 1/1) {
		margin: auto 0;
		height: 50vw;
	}
	display: grid;
	grid-auto-rows: 7fr 1fr;
`;

const GenerateButton = styled.button`
	width: 200px;
	margin: auto;
	height: 50px;
`;

const Args = styled.textarea`
	margin: 40px;
`;

const randomiseArgs = (argsToRandomise) => {
	return argsToRandomise
		.split("\n")
		.filter((line) => line.trim() !== "")
		.sort(() => Math.random() - 0.5);
};

const usePersistedState = (localStorageKey) => {
	const [value, setValue] = useState(
		localStorage.getItem(localStorageKey) || ""
	);

	useEffect(() => {
		localStorage.setItem(localStorageKey, value);
	}, [value, localStorageKey]);

	return [value, setValue];
};

function App() {
	const [args, setArgs] = usePersistedState("bingo.args");
	const [bingoEntries, setBingoEntries] = useState([]);
	const [completed, setCompleted] = useState({});

	return (
		<div className="App">
			<Header className="App-header">
				<BingoWrapper>
					<Bingo
						args={bingoEntries}
						completed={completed}
						complete={(index) => setCompleted({ ...completed, [index]: true })}
						needMore={args.split("\n").filter((arg) => arg !== "").length < 24}
					></Bingo>
				</BingoWrapper>
				<ArgsWrapper>
					<Args
						value={args}
						onChange={(event) => setArgs(event.target.value)}
						placeholder="Enter newline separated values"
					></Args>
					<GenerateButton
						onClick={() => {
							setBingoEntries(randomiseArgs(args));
							setCompleted({});
						}}
					>
						Generate
					</GenerateButton>
				</ArgsWrapper>
			</Header>
		</div>
	);
}

export default App;
