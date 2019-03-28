import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/University.css';
const University = (props) => {

  let data;
  if (props.isLoaded) {
    data = props.university.map(item => (
      <li className="university__li" key={item.id}><NavLink className="university__li--el" to={`/university${item.ref}`}>{item.name}</NavLink></li>
    ))
  }

  return (
    <>
      <p className="university-title">Choose a university: </p>
      <ul className="university">
        {data}
      </ul>
    </>

  );
}

export default University;