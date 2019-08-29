import React, { useState } from 'react';
import './App.css';
import Bingo from './bingo';
import styled from 'styled-components';

const BingoWrapper = styled.div`
  width: 50vw;
  height: 50vw;
  padding: 25px;
`;

const ArgsWrapper = styled.div`
  width: 50vw;
  height: 50vw;
  padding: 25px;
`;

const Args = styled.textarea`
  width: 100%;
  height: 100%;
`;

const randomiseArgs = (argsToRandomise) => {
  return argsToRandomise.split("\n").filter((line) => line.trim() !== "").sort(() => Math.random() - 0.5); 
}

function App() {
  const [args, setArgs] = useState("");
  const [bingoEntries, setBingoEntries] = useState([]);
  const [completed, setCompleted] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <BingoWrapper><Bingo args={bingoEntries} completed={completed} complete={(index) => setCompleted({...completed, [index]: true})}></Bingo></BingoWrapper>
        <ArgsWrapper>
          <Args value={args} onChange={(event) => setArgs(event.target.value)} placeholder="Enter newline separated values" ></Args>
          <button onClick={() => {
            setBingoEntries(randomiseArgs(args));
            setCompleted({});
          }}>Generate</button>
        </ArgsWrapper>
      </header>
    </div>
  );
}

export default App;
