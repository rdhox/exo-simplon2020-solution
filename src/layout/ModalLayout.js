import React, { useContext} from 'react';
import styled from 'styled-components';
import { ModalContext } from './MainLayout';

import Modal from '../components/Modal';

const ModalLayout = props => {

  const { modalInfoOn } = useContext(ModalContext);

  return (
    <>
      {modalInfoOn && <Modal />}
    </>
  );
}

export default ModalLayout;