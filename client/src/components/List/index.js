import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faMapMarkerAlt, faUserAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as components from '../../reusable-components';
import { getSatellite, updateSelectedSatellite } from '../../actions'

const List = ({ handleEditClick, handleDeleteClick }) => {

  const dispatch = useDispatch();

  const satellites = useSelector(state => state.satellites);
  const searchQuery = useSelector(state => state.searchQuery);
  const selectedSatellite = useSelector(state => state.selectedSatellite);
  
  const [filteredSatellites, setFilteredSatellites] = useState([]);

  const trimedQuery = searchQuery?.toLowerCase().trim();

  useEffect(() => {
    if(trimedQuery === '') {
      setFilteredSatellites(satellites);
    } else {
      setFilteredSatellites(satellites.filter(satellite =>
        satellite.id === trimedQuery ||
        satellite.name?.toLowerCase().includes(trimedQuery) ||
        satellite.owner?.toLowerCase().includes(trimedQuery)
        )
      );
    }
  }, [trimedQuery, satellites, selectedSatellite]);


  const {
    ListContainer,
    ListItem,
    MainContentContainer,
    TitleContainer,
    MarkerIcon,
    TailContainer,
    HeadContainer,
    ActionContainer,
    EditButton,
    IconArea,
    RemoveButton
  } = components;

  const onEditClick = (satellite, e) => {
    e.preventDefault();

    dispatch(getSatellite(satellite));
    handleEditClick();
  }

  const onRemoveClick = (e) => {
    e.preventDefault();

    handleDeleteClick();
  }

  const onSatelliteClick = (satellite) => {
    dispatch(updateSelectedSatellite(satellite));
  }

  return (
    <ListContainer>
      {filteredSatellites.map(satellite => (
        <ListItem
          key={satellite.id}
          selected={selectedSatellite === satellite}
          onClick={() => onSatelliteClick(satellite)}
        >
          <HeadContainer>
            <TitleContainer color='#4611a7'>
              {satellite.name}
            </TitleContainer>
            <ActionContainer>
              <EditButton onClick={(e) => onEditClick(satellite, e)}>
                <IconArea icon={faEdit} color='#FFC107'/>
              </EditButton>
              <RemoveButton onClick={(e) => onRemoveClick(e)}>
                <IconArea icon={faTrash} color='#F44336'/>
              </RemoveButton>
            </ActionContainer>
          </HeadContainer>
          <MainContentContainer>
            <MarkerIcon icon={faUserAlt} fontSize="13px"/> {satellite.owner}
          </MainContentContainer>
          <TailContainer>
            <MarkerIcon icon={faMapMarkerAlt} />
            {satellite.latitude}, {satellite.longitude}
          </TailContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default List;