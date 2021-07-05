import React from "react";
import s from './Card.module.css'
import Stars from "../Stars/Stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faEdit,
} from '@fortawesome/free-solid-svg-icons';

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
                  <a href={pL.url}>
                      <h3>{pL.name}</h3>
                    </a>
                  </div>
                </div>
                <div className={s.general}>
                    <div className={s.phone}>
                      <h3>{pL.phone ? pL.phone : 'No phone available'}</h3>
                    </div>
                    <div></div>
                    <div className={s.details}>
                    <div className={s.iconDetails}>
                      <FontAwesomeIcon icon={faStar} />
                      <div className={s.rating}>{pL.rating}</div>
                      <FontAwesomeIcon icon={faEdit} />
                      <div className={s.rating}>{pL.review_count}</div>
                      <div className={s.address}>
                        <div>{pL.location.display_address[0]}</div>
                        <div>{pL.location.display_address[1]}</div>
                      </div>
                      </div>
                      <div className={s.icons}>
                        <Stars score={pL.score} />
                        <div>{pL.score.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          );
        }