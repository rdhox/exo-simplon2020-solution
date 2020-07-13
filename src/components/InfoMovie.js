import React, {useContext} from 'react';
import styled from 'styled-components';
import {ModalContext, InfoContext} from '../layout/MainLayout';

const InfoMovie = props => {
  const { setModalInfoOn } = useContext(ModalContext);
  const { infoMovie, setInfoMovie } = useContext(InfoContext);
  console.log(infoMovie);
  return (
    <Container>
      <Close onClick={() => {
        setInfoMovie({});
        setModalInfoOn(false);
      }}
      >X</Close>
      <div>
        {infoMovie.overview}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export default InfoMovie;