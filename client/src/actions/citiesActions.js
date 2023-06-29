import axios from 'axios';
import {FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS} from './types';

const API_BASE_URL = 'http://localhost:5000';

export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    }
}

export const fetchCities = (satelliteData) => {
    const lat = satelliteData.latitude;
    const lon = satelliteData.longitude;
    const radius = 1000;
    const min_population = 1000000;

    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/cities?lat=${lat}&lon=${lon}&radius=${radius}&min_population=${min_population}`);
            dispatch({
                type: FETCH_CITIES_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            
        }       
    };
}