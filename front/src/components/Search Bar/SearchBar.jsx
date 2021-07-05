import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SearchBar.module.css';

function Searchbar() {
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLocation('')
  }

  function handleChange(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }

  return (
    <div className={style.searchBox}>
       <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <input type='text' autoComplete="off" value={location} onChange={(e) => handleChange(e)} placeholder='Enter a location' className={style.input} />
          <Link to={`/${location}`}>
          <input type='submit' value='Search' className={style.btn1} />
          </Link>
      </form>
    </div>
  );
}

export default Searchbar;