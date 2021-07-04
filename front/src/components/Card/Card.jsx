import React from "react";
// import Stars from '../Stars/Stars'
import s from './Card.module.css'
import Stars from "../Stars/Stars";

const defaultImageUrl = 'https://image.freepik.com/free-vector/parking-lot-isometric-composition_1284-20056.jpg';
export default function Card({ pL }) {
    return (
            <div className={s.ctn}>
              <div className={s.imgCtn}>
              <img src={pL.image_url ? pL.image_url : defaultImageUrl} alt={pL.name} />
              </div>
              <div className={s.texts}>
                <div className={s.propTitle}>
                  <div className={s.title}>
                      <h3>{pL.name}</h3>
                  </div>
                </div>
                <div className={s.general}>
                    <div className={s.price}>
                      <h3>{pL.phone}</h3>
                    </div>
                    <Stars score={pL.score} />
                    <div>{pL.score.toFixed(2)}</div>
                    {/* <div className={s.details}>
                      <div className={s.icons}>
                        <p>
                          {rooms}
                          <span className={s.icon}>
                            <FontAwesomeIcon icon={faBed} />
                          </span>
                        </p>
                        <p>
                          {bathrooms}
                          <span className={s.icon}>
                            <FontAwesomeIcon icon={faBath} />
                          </span>
                        </p>
                        <p>
                          {m2}
                          <span className={s.icon}>
                            <FontAwesomeIcon icon={faRulerCombined} />
                          </span>
                        </p>
                      </div>
                      <div>
                      <p className={s.views}>
                        <span className={s.eye}>
                          <FontAwesomeIcon icon={faEye}/>  
                        </span>
                          {views} visitas
                        </p>
                      </div> */}
                    {/* </div> */}
                  </div>
              </div>
            </div>
          );
        }