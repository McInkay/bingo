import styled from "styled-components";
import { useMachine } from "@xstate/react";

import { hungerGamesMachine } from "./state";
import { component as Initial } from "./initial";
import { component as Setup } from "./setup";

const Header = styled.header`
	background-color: #282c34;
	height: 5vh;
	min-height: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	height: 95vh;
	max-height: calc(100vh - 50px);
	padding: 10px;
`;

function App() {
	const [state, send] = useMachine(hungerGamesMachine);

	const renderSwitch = (state) => {
		let Component;
		switch (state) {
			case "initial":
				Component = Initial;
				break;
			case "setup":
				Component = Setup;
				break;
			default:
				Component = Initial;
		}
		return <Component state={state} send={send}></Component>;
	};

	return (
		<div>
			<Header>Hunger Games Simulator</Header>
			<Main>{renderSwitch(state.value)}</Main>
		</div>
	);
}

export default App;
