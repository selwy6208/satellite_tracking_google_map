import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SearchBar from "./index";

const mockStore = configureMockStore([thunk]); // add middleware(s) as needed

jest.mock('axios'); // This overwrites axios methods with jest Mock

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
})

describe('SearchBar Component', () => {

  test('SearchBar Rendering', () => {
    const store = mockStore({}); // initial mock state
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  })
})
