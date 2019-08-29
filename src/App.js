import React, { useState } from 'react';
import './App.css';
import Bingo from './bingo';
import styled from 'styled-components';

const BingoWrapper = styled.div`
  width: 50vw;
  height: 50vw;
  padding: 10vw;
`;

const ArgsWrapper = styled.div`
  width: 48vw;
  height: 48vw;
`;

const Args = styled.textarea`
  width: 80%;
  height: 80%;
  margin: 0 10%;
`;

const randomiseArgs = (argsToRandomise) => {
  return argsToRandomise.split("\n").filter((line) => line.trim() !== "").sort(() => Math.random() - 0.5); 
}

function App() {
  const [args, setArgs] = useState("");
  const [bingoEntries, setBingoEntries] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <BingoWrapper><Bingo args={bingoEntries}></Bingo></BingoWrapper>
        <ArgsWrapper>
          <Args value={args} onChange={(event) => setArgs(event.target.value)} placeholder="Enter newline separated values" ></Args>
          <button onClick={() => setBingoEntries(randomiseArgs(args))}>Generate</button>
        </ArgsWrapper>
      </header>
    </div>
  );
}

export default App;
