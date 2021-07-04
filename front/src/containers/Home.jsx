import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getParkingLots } from '../actions';
import Cards from '../components/Cards/Cards';

export default function Home() {
    const dispatch = useDispatch();
    const parkingLots = useSelector((state) => state.parkingLots);
    const loading = useSelector((state)=> state.loading);
  

    useEffect(() => {
        dispatch(getParkingLots('houston'))         
    }, [])
    
    return (
      <div>
        {loading ? (
            <div>loading</div>
          ) : (
        <Cards parkingLots={parkingLots} />
          )}
      </div>
    );
  }
  

  