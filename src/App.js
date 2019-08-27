import React from 'react';
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
  return (
    <div className="App">
      <header className="App-header">
        <BingoWrapper><Bingo></Bingo></BingoWrapper>
        <ArgsWrapper><Args></Args></ArgsWrapper>
      </header>
    </div>
  );
}

export default App;
