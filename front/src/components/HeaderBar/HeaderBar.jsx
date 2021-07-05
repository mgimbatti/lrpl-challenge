import React from 'react';
import Searchbar from '../Search Bar/SearchBar';
import s from './HeaderBar.module.css';

export default function NavBar() {

  return (
    <div className={s.navBar}>
      <Searchbar />
    </div>
  );
}
