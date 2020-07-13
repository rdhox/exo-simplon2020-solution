import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import MainLayout from './layout/MainLayout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainLayout />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
