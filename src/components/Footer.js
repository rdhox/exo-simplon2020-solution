import React from 'react';
import styled from 'styled-components';

const Footer = props => {
  return (
    <Container>
      <span>©2020</span>
    </Container>
  );
}

const Container = styled.footer`
  height: 50px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;