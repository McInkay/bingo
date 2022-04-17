import { createMachine } from "xstate";
import { state as initialState } from "./initial";
import { state as setupState } from "./setup";

export const hungerGamesMachine = createMachine({
	id: "hungerGames",
	initial: "initial",
	states: {
		initial: initialState,
		setup: setupState,
	},
});
