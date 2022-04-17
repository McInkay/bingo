import styled from 'styled-components';
import { useMachine } from '@xstate/react';

import { hungerGamesMachine } from './state'

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

  return (
    <div>
      <Header>
        Hunger Games Simulator
      </Header>
      <Main>
        Welcome. To the Hunger Games.

        State: {state.value}

        <button onClick={() => send('SETUP')}>
          {state.value === 'initial'
            ? 'Click to setup'
            : 'Setup! Click to go back to initial'}
        </button>
      </Main>
    </div>
  );
}

export default App;
