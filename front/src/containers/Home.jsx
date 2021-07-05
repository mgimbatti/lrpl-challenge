import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards/Cards';
import Loading from '../components/Loading/Loading'
import { Pagination }  from '../components/Pagination/Pagination';
import { useParams } from "react-router";
import { getParkingLots } from '../actions/index';

import s from './Home.module.css'


export default function Home() {
    const poorParkingLots = useSelector((state) => state.poorParkingLots);
    const loading = useSelector((state)=> state.loading);
    
    let { location } = useParams()

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [parkingLotsPerPage] = useState(9);
    
    useEffect(() => {
      dispatch(getParkingLots(location));
    }, [location]);

    function paginate(e, num) {
      e.preventDefault();
      setPage(num);
    }

    let indexLastPage = page * parkingLotsPerPage;
    // index of the last element of each page
    let indexFirtsPage = indexLastPage - parkingLotsPerPage;
    // index of the first element of each page
    let currentPage = poorParkingLots.slice(indexFirtsPage, indexLastPage);
    // pL of the current page
  

    return (
      <div>
        {loading ? (
            <Loading />
          ) : (
            <div className={s.search}>
        <Cards parkingLots={currentPage} />
        <Pagination
          parkingLotsPerPage={parkingLotsPerPage}
          totalParkingLots={poorParkingLots.length}
          paginate={paginate}
        />
        </div>
          )}
      </div>
    );
  }
  

  