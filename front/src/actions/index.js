import axios from 'axios';
import { LOADING, GET_PARKING_LOTS } from '../constants';

export function getParkingLots(location) {
    let encodedLocation = encodeURI(location);
    console.log(encodedLocation);
    return function (dispatch) {
      dispatch({ type: LOADING, payload: true });
      return axios({
        method: 'get',
        url: 'http://localhost:3001/parkinglots',
        data: {
            location: encodedLocation
        }
        })
        .then(response => response.data)
        .then((data) => {
          dispatch({ type: GET_PARKING_LOTS, payload: data.businesses });
          dispatch({ type: LOADING, payload: false });
        })
    }
  }