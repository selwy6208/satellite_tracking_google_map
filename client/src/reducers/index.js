import { combineReducers } from 'redux';
import { satellitesReducer } from './satellitesReducer';
import { citiesReducer } from './citiesReducer';

const rootReducer = combineReducers({
  satellites: satellitesReducer,
  cities: citiesReducer
});

export default rootReducer;