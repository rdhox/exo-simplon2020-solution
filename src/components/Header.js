import React from 'react';
import styled from 'styled-components';

const Header = props => {
  return (
    <Container>
      <h1>Movies Collection</h1>
    </Container>
  );
}

const Container = styled.header`
  height: 130px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;