import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as resuableComponents from '../../reusable-components';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {addSatellite, updateSatellite} from '../../actions';
import styled from 'styled-components';

export const ErrorLabel = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SatelliteModal = (props) => {
  const {
    IconArea,
    ModalContainer,
    Modal,
    ModalHeader,
    TitleContainer,
    IconButton,
    ModalBody,
    FormGroup,
    InputForm,
    LabelForm,
    ModalFooter,
    Button
  } = resuableComponents;

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const selectedSatellite = useSelector(state => state.selectedSatellite)

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  }

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value)
  }

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value)
  }

  const handleOkClick = () => {
    const validationErrors = {};
    const satelliteData = {
      name,
      owner,
      latitude,
      longitude
    }

    if(!name) {
      validationErrors.name = "Name is Required";
    }

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      if(props.operationType === 'Add') {
        dispatch(addSatellite(satelliteData));
        setName('');
        setOwner('');
        setLatitude(0);
        setLongitude(0);
      } else {
        dispatch(updateSatellite(selectedSatellite.id, satelliteData));
      }
    }
  }

  useEffect(() => {
    if(props.operationType === 'Edit') {
      setName(selectedSatellite.name);
      setOwner(selectedSatellite.owner);
      setLatitude(selectedSatellite.latitude);
      setLongitude(selectedSatellite.longitude);
    }
  }, []);

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <TitleContainer>
            {props.operationType + ' Satellite'}
          </TitleContainer>
          <IconButton onClick = {props.onCancelClick}>
            <IconArea icon = {faClose} color='#566787' />
          </IconButton>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <LabelForm>
              Name
            </LabelForm>
            <InputForm value = {name} onChange={handleNameChange}>
            </InputForm>
            {errors.name && <ErrorLabel>{errors.name}</ErrorLabel>}
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Owner
            </LabelForm>
            <InputForm value = {owner} onChange={handleOwnerChange}>
            </InputForm>
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Latitude
            </LabelForm>
            <InputForm value = {latitude} onChange={handleLatitudeChange}>
            </InputForm>
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Longitude
            </LabelForm>
            <InputForm value = {longitude} onChange={handleLongitudeChange}>
            </InputForm>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onCancelClick}>
            Cancel
          </Button>
          <Button backgroundColor='#4611a7' color='white' onClick={handleOkClick}>
            {
              props.operationType === 'Add' ? 'Add' : 'Save'
            }
          </Button>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  );
}

export default SatelliteModal;