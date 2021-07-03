import React from "react";

import s from './Card.module.css'

export default function Card({ pL }) {
    return (
        <div className={s.card}>
            <div className={s.flipcard}>
                <div className={s.front}>
                    <div className={s.image}>
                        <img src={pL.image_url} alt={pL.name} />
                        <div className={s.nameFront}>{pL.name}</div>
                    </div>
                </div>
                <div className={s.back}>
                    <div className={s.nameBack}>{pL.name}</div>
                    <div>{pL.rating}</div>
                    <div>{pL.phone}</div>
                </div>

            </div>

        </div>
    )
}