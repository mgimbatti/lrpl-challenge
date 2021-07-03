import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getParkingLots } from '../actions';


export default function Home() {
    const dispatch = useDispatch();
    const parkingLots = useSelector((state) => state.parkingLots);
    const loading = useSelector((state)=> state.loading);
    let resultado;
    useEffect(() => {
        dispatch(getParkingLots('san francisco'))         
    }, [])
    
    return (
      <div>
        Hola
        {parkingLots.map((pl => (
          <li>{pl.name}</li>
        )))}

      </div>
    );
  }
  

  