import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={handleClose} appElement={document.getElementById('root')}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
