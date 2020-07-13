import React,  { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ModalLayout from './ModalLayout';

export const ModalContext = React.createContext();
export const InfoContext = React.createContext();

const MainLayout = props => {

  const [ modalInfoOn, setModalInfoOn ] = useState(false);
  const [ infoMovie, setInfoMovie ] = useState({});

  return (
    <ModalContext.Provider value={{ modalInfoOn, setModalInfoOn }}>
      <InfoContext.Provider value={{ infoMovie, setInfoMovie }}>
        <Container>
          <Header />
          <Main />
          <Footer />
          <ModalLayout/>
        </Container>
      </InfoContext.Provider>
    </ModalContext.Provider>
  );
}

const Container = styled.div`
  width: 60vw;
  min-height: 400px;
`;

export default MainLayout;