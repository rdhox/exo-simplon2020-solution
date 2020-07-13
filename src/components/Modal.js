import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

import InfoMovie from './InfoMovie';

const Modal = () => {
  return ReactDom.createPortal(
    <Container>
      <InfoMovie />
    </Container>
  ,
  document.getElementById('modal')
  );
}

const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  background: rgba(97,97,97 , 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;  

export default Modal;