import { createMachine } from 'xstate';

export const hungerGamesMachine = createMachine({
  id: 'hungerGames',
  initial: 'initial',
  states: {
    initial: {
      on: { SETUP: 'setup' }
    },
    setup: {
      on: { SETUP: 'initial' }
    }
  }
});