import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import List from './components/List';
import Map from './components/Map';
import SatelliteModal from './components/SatelliteModal';
import DeletePopup  from './components/DeletePopup';

import 'mapbox-gl/dist/mapbox-gl.css';
import * as components from './reusable-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {getAllSatellites, deleteSatellite} from './actions';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBarContainer = styled.div`
  font-size: 15px;
  padding: 5px;
`

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SatelliteListContainer = styled.div`
  position: relative;
  width: 20%;
`

function App() {

  const {PlusButton, IconArea} = components;
  const dispatch = useDispatch();

  const [isFormOpen, setFormOpen] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [operationType, setOperationType] = useState('Add');

  useEffect(() => {
    dispatch(getAllSatellites());
  }, []);

  const handleOpenAddForm = () => {
    setFormOpen(true);
    setOperationType('Add');
  };

  const handleOpenEditForm = () => {
    setFormOpen(true);
    setOperationType('Edit');
  }

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteSatellite(id))
    setShowDeletePopup(false);
  }

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  }

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  }

  return (
    <AppContainer>
      <NavBarContainer>
        Satellite Tracking App
      </NavBarContainer>
      <MainContainer>
        <SatelliteListContainer>
          <SearchBar/>
          <List
            handleEditClick = {handleOpenEditForm}
            handleDeleteClick = {handleDeleteClick}
          />
          <PlusButton onClick={handleOpenAddForm}>
            <IconArea icon={faPlus} />
          </PlusButton>
        </SatelliteListContainer>
        <Map />
        {isFormOpen && (
          <SatelliteModal
            onCancelClick = {handleCloseForm}
            operationType = {operationType}
          />
        )}
        {showDeletePopup && (
          <DeletePopup
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </MainContainer>
    </AppContainer>
  );
}

export default App;
