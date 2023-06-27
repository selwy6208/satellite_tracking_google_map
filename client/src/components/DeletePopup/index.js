import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as reusableComponents from '../../reusable-components';

const DeletePopup = ({ onCancel, onConfirm }) => {

  const {
    PopupContainer,
    MessageContainer,
    ButtonContainer,
    ModalButton,
    ModalContainer
  } = reusableComponents;

  const satelliteToDelete = useSelector(state => state.selectedSatellite);

  return (
    <ModalContainer>
      <PopupContainer>
        <MessageContainer>
          Are you sure you want to delete the satellite - {satelliteToDelete.name}?
        </MessageContainer>
        <ButtonContainer>
          <ModalButton onClick={onCancel} >Cancel</ModalButton>
          <ModalButton onClick={() => onConfirm(satelliteToDelete.id)} backgroundColor='#4611a7' color='white'>Continue</ModalButton>
        </ButtonContainer>
      </PopupContainer>
    </ModalContainer>
  );
};

export default DeletePopup;