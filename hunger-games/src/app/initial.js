export const state = {
	on: { SETUP: "setup" },
};

export function component({ state, send }) {
	return (
		<div>
			Welcome. To the Hunger Games. State: {state.value}
			<button onClick={() => send("SETUP")}>Click to setup</button>
		</div>
	);
}
