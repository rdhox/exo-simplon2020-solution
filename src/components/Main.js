import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';

const Main = props => {

  return (
    <Container>
      <Gallery />
    </Container>
  );
};

const Container = styled.main`
  padding: 15px;
  border: black 1px solid;
  border-radius: 10px;
`;


export default Main;