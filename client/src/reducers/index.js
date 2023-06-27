import * as ActionsTypes from "../actions/types";

const initialState = {
  satellites: [],
  filteredSatellites:[],
  selectedSatellite: null,
  searchQuery: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.GET_ALL_SATELLITES:
      return {
        ...state,
        satellites:[...action.payload]
      }
    case ActionsTypes.ADD_SATELLITE:
      return {
        ...state,
        satellites: [...state.satellites, action.payload]
      }
    case ActionsTypes.UPDATE_SATELLITE:
      return {
        satellites: state.satellites.map(satellite => {
          if(satellite.id === action.payload.id) {
            return action.payload
          }
          else return satellite
        }),
        selectedSatellite: action.payload
      }
    case ActionsTypes.SET_SELECTED_SATELLITE:
      return {
        ...state,
        selectedSatellite: action.payload
      }
    case ActionsTypes.DELETE_SATELLITE:
      return {
        ...state,
        satellites: state.satellites.filter((satellite) => satellite.id !== action.payload.id)
      }
    case ActionsTypes.SEARCH_SATELLITES:
      return {
        ...state,
        selectedSatellite: null,
        searchQuery: action.payload
      }
    default:
      return state;
  }
};

export default reducer;