import React from 'react';
import Card from '../components/Card/Card'
// import NotFound from '../components/NotFound';
import s from './Cards.module.css'

export default function Cards({parkingLots}) {
  return (
    <div className={s.container}>
      <div className={s.cards}>
        {parkingLots.length ? (parkingLots.map((pL) => <Card pL={pL} key={pL.id} />)
        ) : <div>Not Found</div>} 
      </div>
    </div>
  );
}
