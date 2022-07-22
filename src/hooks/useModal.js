import React, { useState } from 'react';
import Modal from 'components/organisms/Modal/Modal';

const useModal = (initialState = false) => {
  const [isModalOpen, setModalOpen] = useState(initialState);

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return {
    Modal,
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
  };
};

useModal.propTypes = {};

export default useModal;
