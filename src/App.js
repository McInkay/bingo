import React, { useState } from 'react';
import './App.css';
import Bingo from './bingo';
import styled from 'styled-components';

const BingoWrapper = styled.div`
  width: 50vw;
  height: 50vw;
`;

const ArgsWrapper = styled.div`
  width: 48vw;
  height: 48vw;
`;

const Args = styled.textarea`
  width: 80%;
  height: 100%;
  margin: 0 10%;
`;

function App() {
  const [args, setArgs] = useState("");
  const randomiseArgs = (argsToRandomise) => {
    return argsToRandomise.split("\n").sort(() => Math.random() - 0.5); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <BingoWrapper><Bingo args={randomiseArgs(args)}></Bingo></BingoWrapper>
        <ArgsWrapper><Args value={args} onChange={(event) => setArgs(event.target.value)} placeholder="Enter newline separated values" ></Args></ArgsWrapper>
      </header>
    </div>
  );
}

export default App;
