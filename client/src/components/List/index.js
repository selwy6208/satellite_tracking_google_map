import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faMapMarkerAlt, faUserAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as resuableComponents from '../../reusable-components';
import { getSatellite } from '../../actions/satellitesActions'
import styled, {css} from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const ListItem = styled.div`
  cursor: pointer;
  padding: 8px 20px;
  border-bottom: 1px solid #cebbf1;
  ${(props) =>
    props.selected &&
    css`
      background-color: #dcd2ef;
    `}
  &:hover {
    border-left: 6px solid #4611a7;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ActionContainer = styled.div`
  display: flex;
`

const MainContentContainer = styled.div`
  margin-top: 3px;
  font-size: 15px;
`

const TailContainer = styled.div`
  margin-top: 12px;
  font-size: 10px;
`

const List = ({ handleEditClick, handleDeleteClick }) => {

  const dispatch = useDispatch();
  const satellites = useSelector(state => state.satellites.satellites);
  const searchQuery = useSelector(state => state.satellites.searchQuery);
  const selectedSatellite = useSelector(state => state.satellites.selectedSatellite);
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
    IconArea,
    IconButton,
    TitleContainer
  } = resuableComponents;

  const onEditClick = (satellite, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(getSatellite(satellite, false));
    handleEditClick();
  }

  const onRemoveClick = (satellite, e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(getSatellite(satellite, false));
    handleDeleteClick();
  }

  const onSatelliteClick = (satellite, e) => {
    e.preventDefault();
    dispatch(getSatellite(satellite, true));
  }

  return (
    <ListContainer data-testid='list-container'>
      {filteredSatellites.map(satellite => (
        <ListItem
          key={satellite.id}
          selected={selectedSatellite === satellite}
          onClick={(e) => onSatelliteClick(satellite, e)}
          data-testid={`satellite-${satellite.id}`}
        >
          <HeaderContainer>
            <TitleContainer color='#4611a7' data-testid={`name-${satellite.id}`}>
              {satellite.name}
            </TitleContainer>
            <ActionContainer>
              <IconButton data-testid={`edit-${satellite.id}`} onClick={(e) => onEditClick(satellite, e)}>
                <IconArea icon={faEdit} color='#FFC107'/>
              </IconButton>
              <IconButton data-testid={`remove-${satellite.id}`} onClick={(e) => onRemoveClick(satellite, e)}>
                <IconArea icon={faTrash} color='#F44336'/>
              </IconButton>
            </ActionContainer>
          </HeaderContainer>
          <MainContentContainer>
            <IconArea icon={faUserAlt} fontSize='13px' color='#909090' data-testid={`owner-${satellite.id}`}/>
            {satellite.owner}
          </MainContentContainer>
          <TailContainer data-testid={`latitude-longitude-${satellite.id}`}>
            <IconArea icon={faMapMarkerAlt} fontSize='10px' color='#909090'/>
            {satellite.latitude}, {satellite.longitude}
          </TailContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default List;