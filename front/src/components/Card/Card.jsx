import React from "react";
// import Stars from '../Stars/Stars'
import s from './Card.module.css'

const defaultImageUrl = 'https://image.freepik.com/free-vector/parking-lot-isometric-composition_1284-20056.jpg';
export default function Card({ pL }) {
    return (
        <div className={s.card}>
            <div className={s.flipcard}>
                <div className={s.front}>
                    <div className={s.image}>
                        <img src={pL.image_url ? pL.image_url : defaultImageUrl} alt={pL.name} />
                        <div className={s.nameFront}>{pL.name}</div>
                    </div>
                </div>
                <div className={s.back}>
                    <div className={s.nameBack}>{pL.name}</div>
                    {/* <Stars score={pL.score}/> */}
                    <div>{pL.score}</div>
                    <div>{pL.phone}</div>
                </div>

            </div>

        </div>
    )
}