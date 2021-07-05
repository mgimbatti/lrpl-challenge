import s from './Landing.module.css'

function Landing() {
  return (
      
    <div className={s.landing}>
      <div className={s.ctn}>
      <div className={s.tctn}></div>
        <div className={s.title}>
            <h1>Find the Lowest Rated Parking Lots</h1>
        </div>
        </div>
    </div>
  );
}


export default Landing;
