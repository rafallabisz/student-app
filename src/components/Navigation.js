import React from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUniversity, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUniversity, faSearch)

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__item"><NavLink to="/" exact className="menu__item--btn" ><FontAwesomeIcon className="menu__item--icon" icon="home" />Home</NavLink></li>
        <li className="menu__item"><NavLink to="/university" exact className="menu__item--btn" ><FontAwesomeIcon className="menu__item--icon" icon="university" />University</NavLink></li>
        <li className="menu__item"><NavLink to="/search" exact className="menu__item--btn" ><FontAwesomeIcon className="menu__item--icon" icon="search" />Search</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;