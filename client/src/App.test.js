import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

jest.mock('./components/SearchBar', () => {
  return function MockSearchBar() {
    return <div data-testid="searchBar" />;
  };
});

jest.mock('./components/List', () => {
  return function MockList({ handleEditClick, handleDeleteClick }) {
    return (
      <div data-testid="list">
        <button data-testid="edit-button" onClick={handleEditClick} />
        <button data-testid="delete-button" onClick={handleDeleteClick} />
      </div>
    );
  };
});

jest.mock('./components/Map', () => {
  return function MockMap() {
    return <div data-testid="map" />;
  };
});

jest.mock('./components/SatelliteModal', () => {
  return function MockSatelliteModal({ onCancelClick }) {
    return (
      <div data-testid={`satelliteModal`}>
        <button data-testid="close-modal-button" onClick={onCancelClick} />
      </div>
    );
  };
});

jest.mock('./components/DeletePopup', () => {
  return function MockDeletePopup({ onConfirm, onCancel }) {
    return (
      <div data-testid="deletePopup">
        <button data-testid="confirm-delete-button" onClick={onConfirm} />
        <button data-testid="cancel-delete-button" onClick={onCancel} />
      </div>
    );
  };
});

jest.mock('./reusable-components', () => {
  return {
    PlusButton: function MockPlusButton({ onClick, children }) {
      return (
        <div data-testid="plusButton">
          <button data-testid="plus-button" onClick={onClick}>
            {children}
          </button>
        </div>
      );
    },
    IconArea: function MockIconArea() {
      return <div data-testid="iconArea" />;
    },
  };
});

const mockStore = configureMockStore([thunk]);

describe('App Component Test', () => {
  let store;
  let satellites;

  beforeEach(() => {
    satellites = [
      { id: 1, name: 'Hubble Space', owner: 'NASA', latitude: '10', longitude: '20' },
      { id: 2, name: 'ISS', owner: 'ESA', latitude: '40', longitude: '50' },
    ];
    store = mockStore({
      satellites,
      selectedSatellite: null,
      searchQuery: '',
    });

    store.dispatch = jest.fn();
  });

  test('renders the App component', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();

    expect(screen.getByTestId('searchBar')).toMatchSnapshot();
    expect(screen.getByTestId('list')).toMatchSnapshot();
    expect(screen.getByTestId('map')).toMatchSnapshot();
  });

  test('dispatches the `getAllSatellites` action on mount', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  test('opens the satellite modal when the edit button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('edit-button'));

    expect(screen.getByTestId('satelliteModal')).toBeInTheDocument();
  });

  test('opens the delete popup when the delete button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('delete-button'));

    expect(screen.getByTestId('deletePopup')).toBeInTheDocument();
  });

  test('closes the satellite modal when the close button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('edit-button'));
    expect(screen.getByTestId('satelliteModal')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close-modal-button'));
    expect(screen.queryByTestId('satelliteModal')).toBeNull();
  });

  test('dispatches the `deleteSatellite` action when the confirm delete button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('delete-button'));
    fireEvent.click(screen.getByTestId('confirm-delete-button'));

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  test('opens the satellite modal in "Add" mode when the plus button is clicked', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('plus-button'));

    expect(screen.getByTestId('satelliteModal')).toBeInTheDocument();
  });
});
