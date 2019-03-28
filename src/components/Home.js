import React from 'react';
import '../styles/Home.css';

const Home = (props) => {

  const numberOfAllStudents = () => {
    if (props.isLoaded) {
      return (Object.keys(props.student.polsl.informatics).length + Object.keys(props.student.polsl.automatics).length + Object.keys(props.student.polsl.electronics).length + Object.keys(props.student.wroclaw.architecture).length + Object.keys(props.student.wroclaw.chemistry).length + Object.keys(props.student.wroclaw.transport).length + + Object.keys(props.student.warsaw.mechatronics).length + Object.keys(props.student.warsaw.biotechnology).length + Object.keys(props.student.warsaw.mathematics).length)
    }
  }

  const numberOfAllFieldsOfStudy = () => {
    if (props.isLoaded) {
      const number = props.university.map((item, i) => {
        return item.fields.length

      })
      return (number.reduce(function (a, b) { return a + b }, 0))
    }
  }

  return (
    <div className="home">
      <h1 className="home__title">Statistics:</h1>
      <span className="home__item">Number of all universities: {props.university.length}</span>
      <span className="home__item">Number of all fields of study: {numberOfAllFieldsOfStudy()}</span>
      <span className="home__item">Number of all students: {numberOfAllStudents()}</span>
    </div>
  );
}

export default Home;