import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import List from "./index";
import { getSatellite } from '../../actions';

const mockStore = configureMockStore([thunk]); // add middleware(s) as needed

jest.mock('axios'); // This overwrites axios methods with jest Mock

describe("List Component", () => {
  let satellites;
  let store;
  let handleEditClick;
  let handleDeleteClick;

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

    store.dispatch = jest.fn();
    handleEditClick = jest.fn();
    handleDeleteClick = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders List component', () => {
    render(
      <Provider store={store}>
        <List handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
      </Provider>
    );

    const listContainer = screen.getByTestId('list-container');
    expect(listContainer).toBeInTheDocument();
    const listItem = screen.getByTestId('satellite-1');
    expect(listItem).toBeInTheDocument();
    const editButton = screen.getByTestId('edit-1');
    expect(editButton).toBeInTheDocument();
    const removeButton = screen.getByTestId('remove-1');
    expect(removeButton).toBeInTheDocument();
    const ownerContainer = screen.getByTestId('owner-1');
    expect(ownerContainer).toBeInTheDocument();
    const lat_lonContainer = screen.getByTestId('latitude-longitude-1');
    expect(lat_lonContainer).toBeInTheDocument();
  });

  test('dispatches getSatellite and calls handleEditClick when Edit button is clicked', async () => {
    render(
      <Provider store={store}>
        <List handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('edit-1'));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(getSatellite(satellites[0], false));
    });

    await waitFor(() => {
      expect(handleEditClick).toHaveBeenCalled();
    })
  });


  test('calls handleDeleteClick Remove Button is clicked', async() => {
    render(
      <Provider store={store}>
        <List handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('remove-1'));

    await waitFor(() => {
      expect(handleDeleteClick).toHaveBeenCalled();
    });
  });

  test('dispatches updateSelectedSatellite when a satellite item is clicked', async() => {
    render(
      <Provider store={store}>
        <List handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('name-1'));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(getSatellite(satellites[0], true));
    })
  });
})
