import styled from 'styled-components';

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
  return (
    <div>
      <Header>
        Hunger Games Simulator
      </Header>
      <Main>
        Welcome. To the Hunger Games.
      </Main>
    </div>
  );
}

export default App;
