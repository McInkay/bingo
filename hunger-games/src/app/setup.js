export const state = {
	on: { SETUP: "initial" },
};

export function component({ state, send }) {
	return (
		<div>
			Welcome. To the Hunger Games. State: {state.value}
			<button onClick={() => send("SETUP")}>
				Setup! Click to go back to initial
			</button>
		</div>
	);
}
