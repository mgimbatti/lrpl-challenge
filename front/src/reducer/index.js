import { GET_PARKING_LOTS, LOADING } from '../constants.js'

const initialState = {
    parkingLots: [],
    poorParkingLots: [],
    loading: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARKING_LOTS:
            return {
                ...state,
                parkingLots: action.payload,
                poorParkingLots: action.payload.filter((pL,index) => pL.score < 2.5 && index < 100 && !pL.is_closed)
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