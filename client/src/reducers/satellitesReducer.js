import * as ActionsTypes from "../actions/types";

const initialState = {
  satellites: [],
  selectedSatellite: null,
  searchQuery: '',
  modalVisible: false
};

export const satellitesReducer = (state = initialState, action) => {
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
        ...state,
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
        selectedSatellite: action.payload.satelliteData,
        modalVisible: action.payload.modalFlag
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
    case ActionsTypes.MODAL_INVISIBLE:
      return {
        ...state,
        modalVisible: false
      }
    default:
      return state;
  }
};
