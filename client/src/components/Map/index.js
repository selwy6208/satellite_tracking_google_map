import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map, { Marker, Popup } from 'react-map-gl';
import styled from 'styled-components';
import * as resuableComponents from '../../reusable-components';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { setModalInvisible, getSatellite } from '../../actions/satellitesActions'
import { fetchCitiesRequest, fetchCities } from '../../actions/citiesActions';

const MarkerButton = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ selected }) => (selected ? 'red' : 'blue')};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const CityMarker = styled.div`
  width: 5px;
  height: 5px;
  background-color: green;
  border-radius: 50%;
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  color: #4611a7;
  font-size: 15px;
  transform: translate(-50%, -50%);
`;

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapApp = () => {

  const mapboxToken = MAPBOX_ACCESS_TOKEN;
  const {ModalContainer, Modal, ModalHeader, ModalBody, IconArea, TitleContainer, IconButton, FormGroup, LabelForm} = resuableComponents;

  const dispatch = useDispatch();

  const satellites = useSelector(state => state.satellites.satellites);
  const searchQuery = useSelector(state => state.satellites.searchQuery);
  const selectedSatellite = useSelector(state => state.satellites.selectedSatellite);
  const modalVisible = useSelector(state => state.satellites.modalVisible)
  const citiesResponse = useSelector(state => state.cities.cities);
  const citiesLoading = useSelector(state => state.cities.loading);

  const [filteredSatellites, setFilteredSatellites] = useState([]);
  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100vh',
    latitude: 0,
    longitude: 0,
    zoom: 5,
  });
  const [cities, setCities] = useState([]);

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
    
    if(selectedSatellite !== null) {
      setViewState({
        ...viewState,
        latitude: selectedSatellite.latitude || 0,
        longitude: selectedSatellite.longitude || 0,
      });
    }

    setCities(citiesResponse);
    console.log(citiesResponse.length);
  }, [trimedQuery, satellites, selectedSatellite, citiesResponse]);

  const handleMarkerClick = (satellite) => {
    dispatch(getSatellite(satellite, true));
  }

  const handleHoverClick = (satellite) => {
    dispatch(fetchCitiesRequest());
    dispatch(fetchCities(satellite));
  }

  const handleCloseClick = () => {
    dispatch(setModalInvisible());
  }

  

  return (
    // <div data-testid='map-container'>
      <Map
        {...viewState}
        style={{width: '100%', height: '100vh'}}
        onMove={e => setViewState(e.viewState)}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={mapboxToken}
      >
        {filteredSatellites.map(satellite => (
          <Marker
            key={satellite.id}
            latitude={satellite.latitude}
            longitude={satellite.longitude}
          >
            <MarkerButton
              id={`marker-${satellite.id}`}
              data-testid={`marker-${satellite.id}`}
              selected={selectedSatellite === satellite}
              onClick={() => handleMarkerClick(satellite)}
              onMouseOver ={() => handleHoverClick(satellite)}
            />
          </Marker>
        ))}
        {cities.map((city) => (
          <Marker
            key={city.id}
            latitude={city.latitude}
            longitude={city.longitude}
          >
            <CityMarker />
            <div>{city.name}</div>
          </Marker>
          )
        )}
        {
          modalVisible && (
            <ModalContainer>
              <Modal width='300px'>
                <ModalHeader>
                  <TitleContainer>
                    Satellite Detail
                  </TitleContainer>
                  <IconButton onClick={(satellite) => handleCloseClick(satellite)}>
                    <IconArea icon = {faClose} color='#566787' />
                  </IconButton>
                </ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <LabelForm>
                      Name: {selectedSatellite.name}
                    </LabelForm>
                  </FormGroup>
                  <FormGroup>
                    <LabelForm>
                      Owner: {selectedSatellite.owner}
                    </LabelForm>
                  </FormGroup>
                  <FormGroup>
                    <LabelForm>
                      Latitude: {selectedSatellite.latitude}
                    </LabelForm>
                  </FormGroup>
                  <FormGroup>
                    <LabelForm>
                      Longitude: {selectedSatellite.longitude}
                    </LabelForm>
                  </FormGroup>
                </ModalBody>
              </Modal>
            </ModalContainer>
          )
        }
        {
        citiesLoading && (
          <LoadingContainer>
            Loading cities...
          </LoadingContainer>
        )
      }
      </Map>
    // </div>
  );
};

export default MapApp;