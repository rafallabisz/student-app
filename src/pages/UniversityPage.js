import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/UniversityPage.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faAt, faPhone)

const UniversityPage = (props) => {

    const handleFieldsOfStudy = () => {
        const path = props.university.ref.slice(1);
        return (
            props.fieldsOfStudy[path].map(item => <li key={item.universityId}><NavLink className="university-page__list--el" to={`/university/${path}${item.path}`}>{item.nameOfStudyField}</NavLink></li>)
        )
    }



    return (
        <>
            <div className="university-page">
                <h1 className="university-page__title">{props.university.name}</h1>
                <p className="university-page__el"><FontAwesomeIcon className="university-page__el--icon" icon="map-marker-alt" /> {props.university.address}</p>
                <p className="university-page__el"><FontAwesomeIcon className="university-page__el--icon" icon="at" /> {props.university.email}</p>
                <p className="university-page__el"><FontAwesomeIcon className="university-page__el--icon" icon="phone" /> {props.university.phone}</p>

                <h2 className="university-page__subtitle">Fields of study:</h2>
                <ul className="university-page__list">
                    {handleFieldsOfStudy()}
                </ul>
            </div>
        </>
    );
}

export default UniversityPage;