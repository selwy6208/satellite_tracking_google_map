import React from 'react';
import { useSelector } from 'react-redux';
import * as reusableComponents from '../../reusable-components';
import styled from 'styled-components';

export const PopupContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
`;

export const MessageContainer = styled.p`
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DeletePopup = ({ onCancel, onConfirm }) => {

  const {
    Button,
    ModalContainer
  } = reusableComponents;

  const satelliteToDelete = useSelector(state => state.satellites.selectedSatellite);
  console.log(satelliteToDelete);

  return (
    <ModalContainer>
      <PopupContainer>
        <MessageContainer>
          Are you sure you want to delete the satellite - {satelliteToDelete?.name}?
        </MessageContainer>
        <ButtonContainer>
          <Button onClick={onCancel} >Cancel</Button>
          <Button onClick={() => onConfirm(satelliteToDelete?.id)} backgroundColor='#4611a7' color='white'>Continue</Button>
        </ButtonContainer>
      </PopupContainer>
    </ModalContainer>
  );
};

export default DeletePopup;