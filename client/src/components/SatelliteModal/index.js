import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as resuableComponents from '../../reusable-components';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {addSatellite, updateSatellite} from '../../actions/satellitesActions';
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
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const selectedSatellite = useSelector(state => state.satellites.selectedSatellite)

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  }

  const handleLatitudeChange = (e) => {
    parseFloat(setLatitude(e.target.value));
  }

  const handleLongitudeChange = (e) => {
    parseFloat(setLongitude(e.target.value));
  }

  const handleOkClick = () => {
    const validationErrors = {};
    const satelliteData = {
      name,
      owner,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    };

    if(!name) {
      validationErrors.name = "Name is Required";
    }
    if (isNaN(parseFloat(latitude))) {
      validationErrors.latitude = "Input should be number";
    } else if (parseFloat(latitude) < -90 || parseFloat(latitude) > 90) {
      validationErrors.latitude = "Input should be between -90 and 90";
    }
    if (isNaN(parseFloat(longitude))) {
      validationErrors.longitude = "Input should be number";
    } else if (parseFloat(longitude) < -180 || parseFloat(longitude) > 180) {
      validationErrors.longitude = "Input should be between -180 and180";
    }

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      if(props.operationType === 'Add') {
        dispatch(addSatellite(satelliteData));
        setName('');
        setOwner('');
        setLatitude('');
        setLongitude('');
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
            <InputForm value = {name} onChange={handleNameChange} />
            {errors.name && <ErrorLabel>{errors.name}</ErrorLabel>}
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Owner
            </LabelForm>
            <InputForm value = {owner} onChange={handleOwnerChange} />
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Latitude
            </LabelForm>
            <InputForm value = {latitude} onChange={handleLatitudeChange} />
            {errors.latitude && <ErrorLabel>{errors.latitude}</ErrorLabel>}
          </FormGroup>
          <FormGroup>
            <LabelForm>
              Longitude
            </LabelForm>
            <InputForm value = {longitude} onChange={handleLongitudeChange} />
            {errors.longitude && <ErrorLabel>{errors.longitude}</ErrorLabel>}
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