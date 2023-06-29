import { FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS} from '../actions/types';

const initialState = {
  loading: false,
  cities: []
};

export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST:
            return {
                ...state, 
                loading: true 
            };
        case FETCH_CITIES_SUCCESS:
            return {
                loading: false, 
                cities: [...action.payload]
            };
        default:
            return state;
    }
}