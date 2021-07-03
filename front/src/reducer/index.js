import { GET_PARKING_LOTS, LOADING } from '../constants.js'

const initialState = {
    parkingLots: [],
    loading: false,

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARKING_LOTS:
            return {
                ...state,
                parkingLots: action.payload
            }
        case LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}