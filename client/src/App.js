import React from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import List from './components/SearchBar';
import Map from './components/SearchBar';

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

function App() {
  return (
    <AppContainer>
      <Title>
        Satellite Tracking App
      </Title>
      <MainContainer>
        <SearchBar/>
        <List/>
        <Map/>
        Hello world!
      </MainContainer>
    </AppContainer>
  );
}

export default App;
