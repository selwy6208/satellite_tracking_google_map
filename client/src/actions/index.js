import  axios from "axios";
import * as ActionTypes from './types';

const API_BASE_URL = 'http://localhost:8080';

export const getAllSatellites = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`${API_BASE_URL}/satellites`);

      dispatch({
        type: ActionTypes.GET_ALL_SATELLITES,
        payload: response.data
      });
    } catch(error) {

    }
  };
}

export const addSatellite = (satelliteData) => {
  return async(dispatch) => {
    try{
      const response = await axios.post(`${API_BASE_URL}/satellites`, satelliteData);
      dispatch({
        type: ActionTypes.ADD_SATELLITE,
        payload: response.data
      });
    } catch(error) {

    }
  }
};

export const getSatellite = (satelliteData, modalFlag) => {
  return {
    type: ActionTypes.SET_SELECTED_SATELLITE,
    payload: {
      satelliteData,
      modalFlag
    }
  }
}

export const updateSatellite = (id, satelliteData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/satellites/${id}`, satelliteData);
    const updatedSatellite = response.data;

    dispatch({
      type: ActionTypes.UPDATE_SATELLITE,
      payload: updatedSatellite
    });
  } catch (error) {

  }
}

export const deleteSatellite = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/satellites/${id}`);
      dispatch({
        type: ActionTypes.DELETE_SATELLITE,
        payload: response.data
      })
    } catch (error) {

    }
  }
}

export const searchSatellites = (searchQuery) => {
  return {
    type: ActionTypes.SEARCH_SATELLITES,
    payload: searchQuery
  }
}

export const setModalInvisible = () => {
  return {
    type: ActionTypes.MODAL_INVISIBLE,
    payload: false
  }
}
