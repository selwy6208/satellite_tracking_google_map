import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MapApp from "./index";

const mockStore = configureMockStore([thunk]);

jest.mock('react-map-gl');

describe('Map', () => {
  let store;
  let satellites;

  beforeEach(() => {
    satellites = [
      {id: 1, name:'Hubble Space', owner:'NASA', latitude:'10', longitude:'20'},
      {id: 2, name:'ISS', owner:'ESA', latitude:'40', longitude:'50'}
    ];
    store = mockStore({
      satellites,
      selectedSatellite: null,
      searchQuery: ''
    });
  });

  test('renders Map container', () => {
    render(
      <Provider store={store}>
        <MapApp/>
      </Provider>
    );

    const mapContainer = screen.getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();
  });
})
